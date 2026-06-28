"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/* ---------- shared geometry ---------- */

// A coin with softly rounded (beveled) edges, built from a lathe profile.
function useCoinGeometry() {
  return useMemo(() => {
    const r = 0.55; // radius
    const t = 0.075; // half thickness
    const b = 0.04; // bevel radius
    const seg = 6;
    const pts: THREE.Vector2[] = [];
    pts.push(new THREE.Vector2(0, t));
    pts.push(new THREE.Vector2(r - b, t));
    for (let i = 1; i <= seg; i++) {
      const a = (Math.PI / 2) * (i / seg);
      pts.push(new THREE.Vector2(r - b + Math.sin(a) * b, t - b + Math.cos(a) * b));
    }
    pts.push(new THREE.Vector2(r, -t + b));
    for (let i = 1; i <= seg; i++) {
      const a = (Math.PI / 2) * (i / seg);
      pts.push(new THREE.Vector2(r - b + Math.cos(a) * b, -t + b - Math.sin(a) * b));
    }
    pts.push(new THREE.Vector2(0, -t));
    const g = new THREE.LatheGeometry(pts, 64);
    g.computeVertexNormals();
    return g;
  }, []);
}

// A pointed leaf silhouette, extruded with a soft bevel.
function useLeafGeometry() {
  return useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.24, 0.26, 0.27, 0.72, 0, 1.05);
    shape.bezierCurveTo(-0.27, 0.72, -0.24, 0.26, 0, 0);
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.03,
      bevelEnabled: true,
      bevelThickness: 0.025,
      bevelSize: 0.03,
      bevelSegments: 3,
      steps: 1,
    });
    geo.translate(0, 0, -0.015);
    geo.computeVertexNormals();
    return geo;
  }, []);
}

/* ---------- coins ---------- */

function CoinStack({
  position,
  count,
  delay = 0,
  geometry,
}: {
  position: [number, number, number];
  count: number;
  delay?: number;
  geometry: THREE.BufferGeometry;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = (state.clock.elapsedTime + delay) * 0.22;
  });

  const gap = 0.132;

  return (
    <group ref={ref} position={position}>
      {Array.from({ length: count }).map((_, i) => {
        const top = i === count - 1;
        return (
          <mesh
            key={i}
            geometry={geometry}
            position={[0, i * gap - (count * gap) / 2, 0]}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial
              color={top ? "#F6D277" : "#E3B248"}
              metalness={0.85}
              roughness={0.46}
              emissive="#6a4a12"
              emissiveIntensity={0.22}
            />
          </mesh>
        );
      })}
    </group>
  );
}

/* ---------- plant ---------- */

function Sprout({
  geometry,
  pointer,
}: {
  geometry: THREE.BufferGeometry;
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    // idle sway + lean toward the pointer (mouse left -> leaves swing left)
    const targetZ = Math.sin(t * 0.7) * 0.06 - pointer.current.x * 0.5;
    const targetY = Math.sin(t * 0.4) * 0.12 + pointer.current.x * 0.25;
    const targetX = pointer.current.y * 0.35;
    ref.current.rotation.z += (targetZ - ref.current.rotation.z) * 0.09;
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.09;
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.09;
  });

  const leaves: {
    pos: [number, number, number];
    rot: [number, number, number];
    scale: number;
    color: string;
  }[] = [
    { pos: [0, 0.42, 0], rot: [0.15, 0.5, 0.95], scale: 0.7, color: "#43A356" },
    { pos: [0, 0.46, 0], rot: [0.15, -0.5, -0.95], scale: 0.8, color: "#2E7D32" },
    { pos: [0, 0.6, 0.02], rot: [0.1, 0, 0.05], scale: 0.95, color: "#6FBA7E" },
  ];

  return (
    <group ref={ref} position={[0, 0.62, 0.05]}>
      {/* stem */}
      <mesh position={[0, 0.22, 0]} castShadow>
        <cylinderGeometry args={[0.035, 0.05, 0.55, 16]} />
        <meshStandardMaterial color="#16451B" roughness={0.55} metalness={0.1} />
      </mesh>

      {leaves.map((l, i) => (
        <mesh
          key={i}
          geometry={geometry}
          position={l.pos}
          rotation={l.rot}
          scale={l.scale}
          castShadow
        >
          <meshStandardMaterial
            color={l.color}
            roughness={0.42}
            metalness={0.05}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ---------- scene ---------- */

function Scene({
  pointer,
}: {
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const coinGeo = useCoinGeometry();
  const leafGeo = useLeafGeometry();

  // smooth scale-in entrance + gentle parallax toward the pointer
  const root = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!root.current) return;
    const s = root.current.scale.x;
    const next = s + (1 - s) * Math.min(1, delta * 3.2);
    root.current.scale.setScalar(next);

    const k = Math.min(1, delta * 4);
    root.current.rotation.y += (pointer.current.x * 0.35 - root.current.rotation.y) * k;
    root.current.rotation.x += (-pointer.current.y * 0.18 - root.current.rotation.x) * k;
  });

  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight
        position={[5, 8, 4]}
        intensity={1.35}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-4, 3, -2]} intensity={0.45} color="#A5D6A7" />
      {/* front fill so coin faces read solid, not glassy */}
      <directionalLight position={[0, 1, 6]} intensity={0.6} color="#FFF6E0" />
      {/* rim light for a premium edge highlight */}
      <pointLight position={[0, 1.5, -4]} intensity={0.65} color="#FFE7A8" />

      <group ref={root} scale={0.4}>
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
          <group position={[0, -0.2, 0]}>
            <CoinStack position={[-1.4, -0.3, 0.2]} count={5} delay={0} geometry={coinGeo} />
            <CoinStack position={[0, 0, 0]} count={8} delay={1.3} geometry={coinGeo} />
            <CoinStack position={[1.4, -0.5, -0.2]} count={4} delay={2.5} geometry={coinGeo} />
            <Sprout geometry={leafGeo} pointer={pointer} />
          </group>
        </Float>
      </group>

      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.35}
        scale={8}
        blur={2.4}
        far={3}
        color="#0E2D12"
      />
      <Environment preset="park" />
    </>
  );
}

export default function Hero3D() {
  // pointer offset in -1..1, driven by mouse on hover-capable (desktop) devices only
  const pointer = useRef({ x: 0, y: 0 });
  const interactive = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    [],
  );

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!interactive) return;
    const r = e.currentTarget.getBoundingClientRect();
    pointer.current.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    pointer.current.y = ((e.clientY - r.top) / r.height) * 2 - 1;
  }
  function onLeave() {
    pointer.current.x = 0;
    pointer.current.y = 0;
  }

  return (
    <div
      className="absolute inset-0"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0.6, 5], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene pointer={pointer} />
        </Suspense>
      </Canvas>
    </div>
  );
}
