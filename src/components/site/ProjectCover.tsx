import { cn } from "@/lib/utils";

/**
 * Original abstract cover artwork for portfolio items — no stock photography.
 * `pattern` comes from the project data layer and can later be replaced by an
 * uploaded image without changing call sites.
 */
export function ProjectCover({
  pattern = "grid",
  label,
  className,
}: {
  pattern?: string;
  label?: string;
  className?: string;
}) {
  if (pattern.startsWith("/") || /\.(png|jpe?g|webp)$/i.test(pattern)) {
    return (
      <div className={cn("relative flex h-full w-full items-center justify-center overflow-hidden bg-surface-strong/40 p-2 sm:p-3", className)}>
        <img src={pattern} alt={label || "Project preview"} loading="lazy" className="h-full w-full object-contain" />
      </div>
    );
  }
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative isolate h-full w-full overflow-hidden bg-surface-strong",
        className,
      )}
    >
      {pattern === "mesh" && (
        <>
          <div className="absolute -left-10 top-1/2 size-64 -translate-y-1/2 rounded-full bg-brand/25 blur-3xl" />
          <div className="absolute inset-0 grid-lines opacity-40" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="none">
            <g stroke="currentColor" className="text-border-strong" fill="none" strokeWidth="1">
              {Array.from({ length: 9 }).map((_, i) => (
                <path key={i} d={`M-20 ${20 + i * 34} C 120 ${i * 22}, 260 ${300 - i * 24}, 420 ${60 + i * 20}`} />
              ))}
            </g>
          </svg>
        </>
      )}
      {pattern === "lines" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-transparent" />
          <div className="absolute inset-y-0 left-0 flex w-full items-end gap-1.5 px-6 pb-6">
            {Array.from({ length: 22 }).map((_, i) => (
              <span
                key={i}
                className={cn("flex-1 rounded-t-sm", i % 5 === 0 ? "bg-brand/70" : "bg-border-strong")}
                style={{ height: `${18 + ((i * 37) % 70)}%` }}
              />
            ))}
          </div>
        </>
      )}
      {pattern !== "mesh" && pattern !== "lines" && (
        <>
          <div className="absolute inset-0 grid-lines opacity-60" />
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
            <span className="col-span-2 row-span-2 col-start-2 row-start-2 border border-brand/60" />
            <span className="col-span-2 row-span-1 col-start-4 row-start-3 bg-brand/25" />
            <span className="col-span-1 row-span-1 col-start-5 row-start-1 bg-border-strong/60" />
          </div>
        </>
      )}
      {label && (
        <span className="absolute bottom-4 left-5 font-display text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          {label}
        </span>
      )}
    </div>
  );
}
