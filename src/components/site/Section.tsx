import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}

export function Section({
  id,
  className,
  children,
  bleed = false,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  bleed?: boolean;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-24 lg:py-32", className)}>
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  align = "left",
  className,
}: {
  index?: string;
  label?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {(index || label) && (
        <div
          className={cn(
            "mb-5 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          {index && <span className="font-display text-sm font-semibold text-brand">{index}</span>}
          <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
          {label && <span className="rule-label">{label}</span>}
        </div>
      )}
      <h2 className="text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
