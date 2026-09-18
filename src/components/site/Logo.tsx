import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-brand font-display text-sm font-bold text-brand-foreground",
        className,
      )}
    >
      D
    </span>
  );
}

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {!compact && (
        <span className="font-display text-base font-bold tracking-tight text-foreground">
          DEVGRONIX
        </span>
      )}
    </span>
  );
}
