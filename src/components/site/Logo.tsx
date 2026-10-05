import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="DEVGRONIX"
      aria-hidden="true"
      className={cn("size-8 shrink-0 object-contain", className)}
    />
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
