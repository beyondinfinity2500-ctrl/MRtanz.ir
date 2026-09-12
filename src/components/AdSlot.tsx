import type { AdSlotName } from "@/data/types";
import { adSlots } from "@/data/ads";

interface AdSlotProps {
  slot: AdSlotName;
  className?: string;
}

export function AdSlot({ slot, className = "" }: AdSlotProps) {
  const config = adSlots[slot];
  const isEnabled = config.enabled !== false;

  if (!isEnabled) {
    return (
      <div
        className={`ad-slot ad-slot--disabled ${className}`}
        role="presentation"
      >
        {/* minimal non-disruptive placeholder */}
      </div>
    );
  }

  return (
    <div
      className={`ad-slot ${className}`}
      role="complementary"
      aria-label={config.label}
      style={{
        maxWidth: config.width,
        height: config.height,
      }}
    >
      <span>{config.label}</span>
    </div>
  );
}
