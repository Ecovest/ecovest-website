import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

/**
 * The only way to render an icon on this site.
 * Hugeicons (free, Stroke Rounded) in EcoVest ink, 1.5px stroke.
 * Import icons from "@hugeicons/core-free-icons" and pass them in.
 */
export function Icon({
  icon,
  size = 20,
  className = "text-icon",
  strokeWidth = 1.5,
  label,
}: {
  icon: IconSvgElement;
  size?: number;
  className?: string;
  strokeWidth?: number;
  /** Give a label only when the icon carries meaning on its own. */
  label?: string;
}) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      color="currentColor"
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    />
  );
}
