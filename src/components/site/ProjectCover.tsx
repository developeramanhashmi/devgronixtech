import { cn } from "@/lib/utils";

/**
 * Modern portfolio cover renderer.
 * Supports full-bleed uploaded images (.webp, .png, .jpg) as well as bespoke
 * business-specific vector SVG blueprints for live client projects.
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
  // If it's a real uploaded image path
  if (pattern.startsWith("/") || /\.(png|jpe?g|webp|svg)$/i.test(pattern)) {
    return (
      <div className={cn("relative flex h-full w-full items-center justify-center overflow-hidden bg-surface-subtle", className)}>
        <img
          src={pattern}
          alt={label || "Project preview"}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative isolate flex h-full w-full items-center justify-center overflow-hidden bg-surface-strong transition-transform duration-500 will-change-transform group-hover:scale-105",
        className,
      )}
    >
      {/* 1. Lightngear UAE — Architectural & Commercial Lighting Vector */}
      {pattern === "lightngear" && (
        <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-500/10 via-surface-strong to-surface">
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div className="absolute -top-12 size-48 rounded-full bg-amber-400/20 blur-3xl" />
          <svg className="relative h-4/5 w-4/5 text-amber-400/80" viewBox="0 0 320 200" fill="none" stroke="currentColor">
            {/* Spotlight fixture */}
            <path d="M160 20 L160 50" strokeWidth="3" />
            <rect x="140" y="50" width="40" height="20" rx="4" fill="currentColor" fillOpacity="0.2" strokeWidth="2" />
            <path d="M130 70 L80 170 L240 170 L190 70 Z" fill="currentColor" fillOpacity="0.08" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="160" cy="120" r="14" fill="currentColor" fillOpacity="0.3" strokeWidth="2" />
            {/* Light beam accents */}
            <line x1="160" y1="80" x2="160" y2="160" strokeWidth="2" strokeDasharray="6 4" />
            <line x1="135" y1="130" x2="185" y2="130" strokeWidth="1.5" />
            {/* Spec tags */}
            <rect x="20" y="150" width="70" height="24" rx="12" fill="currentColor" fillOpacity="0.15" strokeWidth="1" />
            <text x="32" y="166" fontSize="10" fill="currentColor" fontFamily="monospace" fontWeight="bold">3000K CRI95</text>
            <rect x="230" y="150" width="70" height="24" rx="12" fill="currentColor" fillOpacity="0.15" strokeWidth="1" />
            <text x="245" y="166" fontSize="10" fill="currentColor" fontFamily="monospace" fontWeight="bold">DUBAI UAE</text>
          </svg>
        </div>
      )}

      {/* 2. SIAAN Total Services — Saudi General Contracting & MEP Vector */}
      {pattern === "siaan" && (
        <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500/10 via-surface-strong to-surface">
          <div className="absolute inset-0 grid-lines opacity-40" />
          <div className="absolute -bottom-8 -right-8 size-48 rounded-full bg-emerald-500/15 blur-3xl" />
          <svg className="relative h-4/5 w-4/5 text-emerald-400/80" viewBox="0 0 320 200" fill="none" stroke="currentColor">
            {/* Construction Crane & Building Structure */}
            <path d="M50 180 L50 40 L190 40 L230 70" strokeWidth="2.5" />
            <path d="M50 40 L20 60" strokeWidth="2" />
            <line x1="50" y1="70" x2="80" y2="40" strokeWidth="1.5" />
            <line x1="80" y1="40" x2="110" y2="70" strokeWidth="1.5" />
            <line x1="110" y1="70" x2="140" y2="40" strokeWidth="1.5" />
            <line x1="140" y1="40" x2="170" y2="70" strokeWidth="1.5" />
            <line x1="140" y1="40" x2="140" y2="100" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="130" y="100" width="20" height="15" rx="2" fill="currentColor" fillOpacity="0.3" strokeWidth="1.5" />
            {/* Modern High-rise Silhouette */}
            <rect x="180" y="70" width="50" height="110" rx="3" fill="currentColor" fillOpacity="0.12" strokeWidth="2" />
            <rect x="240" y="100" width="45" height="80" rx="3" fill="currentColor" fillOpacity="0.08" strokeWidth="2" />
            {/* MEP Grid line */}
            <line x1="20" y1="180" x2="300" y2="180" strokeWidth="2.5" />
            <text x="188" y="170" fontSize="9" fill="currentColor" fontFamily="monospace" fontWeight="bold">SAUDI MEP</text>
          </svg>
        </div>
      )}

      {/* 3. ScholarHope Corp — Education & Scholarship Grant System */}
      {pattern === "scholarhope" && (
        <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500/10 via-surface-strong to-surface">
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div className="absolute -left-6 top-6 size-44 rounded-full bg-blue-500/20 blur-3xl" />
          <svg className="relative h-4/5 w-4/5 text-blue-400/85" viewBox="0 0 320 200" fill="none" stroke="currentColor">
            {/* Graduation Cap */}
            <path d="M160 45 L90 80 L160 115 L230 80 Z" fill="currentColor" fillOpacity="0.25" strokeWidth="2" />
            <path d="M120 95 L120 135 C120 150 200 150 200 135 L200 95" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
            <path d="M230 80 L230 130" strokeWidth="2" />
            <circle cx="230" cy="135" r="4" fill="currentColor" />
            {/* Verification Shield & Growth */}
            <rect x="50" y="130" width="90" height="45" rx="8" fill="currentColor" fillOpacity="0.1" strokeWidth="1.5" />
            <path d="M70 148 L76 154 L90 142" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="96" y="152" fontSize="9" fill="currentColor" fontFamily="monospace" fontWeight="bold">VERIFIED</text>
            <text x="70" y="167" fontSize="8" fill="currentColor" opacity="0.8">SCHOLARSHIP</text>
            {/* Metrics card */}
            <rect x="180" y="130" width="95" height="45" rx="8" fill="currentColor" fillOpacity="0.1" strokeWidth="1.5" />
            <path d="M195 160 L210 150 L225 155 L245 140" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="245" cy="140" r="3" fill="currentColor" />
            <text x="195" y="142" fontSize="8" fill="currentColor" opacity="0.8">STUDENT AID</text>
          </svg>
        </div>
      )}

      {/* 4. Karnataka Bearing Agencies — Precision Mechanical Bearings CAD */}
      {pattern === "bearing" && (
        <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500/10 via-surface-strong to-surface">
          <div className="absolute inset-0 grid-lines opacity-40" />
          <div className="absolute size-44 rounded-full bg-cyan-500/15 blur-3xl" />
          <svg className="relative h-4/5 w-4/5 text-cyan-400/85" viewBox="0 0 320 200" fill="none" stroke="currentColor">
            {/* Technical Crosshair axes */}
            <line x1="20" y1="100" x2="300" y2="100" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />
            <line x1="160" y1="15" x2="160" y2="185" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />
            {/* Outer Race Ring */}
            <circle cx="160" cy="100" r="75" strokeWidth="3" fill="currentColor" fillOpacity="0.05" />
            <circle cx="160" cy="100" r="62" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
            {/* Inner Race Ring & Bore */}
            <circle cx="160" cy="100" r="38" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
            <circle cx="160" cy="100" r="22" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
            {/* 8 Steel Ball Bearings */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
              const rad = (angle * Math.PI) / 180;
              const bx = 160 + 50 * Math.cos(rad);
              const by = 100 + 50 * Math.sin(rad);
              return <circle key={idx} cx={bx} cy={by} r="9" fill="currentColor" fillOpacity="0.3" strokeWidth="2" />;
            })}
            <rect x="25" y="25" width="80" height="22" rx="4" fill="currentColor" fillOpacity="0.15" strokeWidth="1" />
            <text x="33" y="39" fontSize="9" fill="currentColor" fontFamily="monospace" fontWeight="bold">ISO 9001 CAD</text>
          </svg>
        </div>
      )}

      {/* 5. Periyapalayam Rooms — Hospitality Booking & Stay Vector */}
      {pattern === "hospitality" && (
        <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-500/10 via-surface-strong to-surface">
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div className="absolute -bottom-6 -left-6 size-44 rounded-full bg-rose-500/15 blur-3xl" />
          <svg className="relative h-4/5 w-4/5 text-rose-400/85" viewBox="0 0 320 200" fill="none" stroke="currentColor">
            {/* Guest House Portal & Keycard */}
            <rect x="70" y="45" width="180" height="120" rx="10" fill="currentColor" fillOpacity="0.08" strokeWidth="2" />
            {/* Bed / Room comfort silhouette */}
            <path d="M95 135 L95 110 C95 102 102 96 110 96 L160 96 C168 96 175 102 175 110 L175 135" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
            <circle cx="115" cy="112" r="8" fill="currentColor" fillOpacity="0.3" strokeWidth="1.5" />
            <line x1="90" y1="135" x2="230" y2="135" strokeWidth="2" />
            {/* Booking Confirmed Pill */}
            <rect x="180" y="65" width="60" height="50" rx="6" fill="currentColor" fillOpacity="0.15" strokeWidth="1.5" />
            <circle cx="210" cy="85" r="10" strokeWidth="1.5" />
            <path d="M206 85 L209 88 L215 82" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="187" y="106" fontSize="8" fill="currentColor" fontFamily="monospace" fontWeight="bold">AC ROOM</text>
            <text x="85" y="155" fontSize="9" fill="currentColor" fontFamily="monospace" fontWeight="bold">TEMPLE PILGRIM STAY</text>
          </svg>
        </div>
      )}

      {/* 6. Custom Printing & Merchandising Vector */}
      {pattern === "printing" && (
        <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-500/10 via-surface-strong to-surface">
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div className="absolute top-2 right-2 size-48 rounded-full bg-violet-500/20 blur-3xl" />
          <svg className="relative h-4/5 w-4/5 text-violet-400/85" viewBox="0 0 320 200" fill="none" stroke="currentColor">
            {/* Branded T-Shirt */}
            <path d="M120 40 L140 55 C150 60 170 60 180 55 L200 40 L235 65 L215 95 L195 85 L195 160 L125 160 L125 85 L105 95 L85 65 Z" fill="currentColor" fillOpacity="0.18" strokeWidth="2" />
            {/* Brand Logo Stamp on Shirt */}
            <rect x="145" y="90" width="30" height="20" rx="4" fill="currentColor" fillOpacity="0.4" strokeWidth="1.5" />
            <line x1="152" y1="100" x2="168" y2="100" strokeWidth="2" strokeLinecap="round" />
            {/* Coffee Mug */}
            <rect x="235" y="115" width="40" height="45" rx="6" fill="currentColor" fillOpacity="0.2" strokeWidth="2" />
            <path d="M275 125 C285 125 285 145 275 145" strokeWidth="2" />
            {/* CMYK Palette Circles */}
            <circle cx="50" cy="145" r="7" fill="#00ffff" opacity="0.8" />
            <circle cx="68" cy="145" r="7" fill="#ff00ff" opacity="0.8" />
            <circle cx="86" cy="145" r="7" fill="#ffff00" opacity="0.8" />
            <circle cx="104" cy="145" r="7" fill="#000000" opacity="0.8" />
          </svg>
        </div>
      )}

      {/* 7. Fashion Photography Vector */}
      {pattern === "fashion" && (
        <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-pink-500/10 via-surface-strong to-surface">
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div className="absolute size-44 rounded-full bg-pink-500/15 blur-3xl" />
          <svg className="relative h-4/5 w-4/5 text-pink-400/85" viewBox="0 0 320 200" fill="none" stroke="currentColor">
            {/* Camera body & Lens */}
            <rect x="80" y="65" width="160" height="100" rx="14" fill="currentColor" fillOpacity="0.1" strokeWidth="2" />
            <rect x="100" y="48" width="40" height="18" rx="4" fill="currentColor" fillOpacity="0.25" strokeWidth="2" />
            <circle cx="160" cy="115" r="38" strokeWidth="3" fill="currentColor" fillOpacity="0.05" />
            <circle cx="160" cy="115" r="22" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
            <circle cx="215" cy="85" r="6" fill="currentColor" fillOpacity="0.5" />
            <text x="95" y="152" fontSize="9" fill="currentColor" fontFamily="monospace" fontWeight="bold">EDITORIAL COUTURE</text>
          </svg>
        </div>
      )}

      {/* Abstract Fallbacks: mesh, lines, grid */}
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

      {pattern !== "lightngear" &&
        pattern !== "siaan" &&
        pattern !== "scholarhope" &&
        pattern !== "bearing" &&
        pattern !== "hospitality" &&
        pattern !== "printing" &&
        pattern !== "fashion" &&
        pattern !== "mesh" &&
        pattern !== "lines" && (
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
