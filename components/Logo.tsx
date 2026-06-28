import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="grid place-items-center w-8 h-8 rounded-full bg-brand-600 overflow-hidden">
        <Image
          src="/logo.png"
          alt="EcoVest logo"
          width={20}
          height={23}
          className="object-contain"
          priority
        />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">
        Eco<span className="text-brand-500">Vest</span>
      </span>
    </div>
  );
}
