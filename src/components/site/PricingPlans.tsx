import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { pricingNote } from "@/lib/content/pricing";
import type { PricingPlan, Service } from "@/lib/content/types";
import { Reveal } from "./Reveal";

/**
 * Renders a service's own pricing plans. Shared by the service detail page and
 * `/pricing/:serviceSlug` so both read the same data.
 */
export function PricingPlans({ service, plans }: { service: Service; plans: PricingPlan[] }) {
  if (plans.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border-strong p-10 text-center">
        <p className="text-sm text-muted-foreground">
          Pricing for {service.title.toLowerCase()} is scoped per project.
        </p>
        <Link
          to="/contact"
          search={{ service: service.slug }}
          className="interactive mt-5 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground"
        >
          Get a Quote
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, i) => (
          <Reveal
            key={plan.id}
            delay={i * 60}
            className={cn(
              "card-interactive flex h-full flex-col rounded-xl border bg-surface p-7",
              plan.popular ? "border-brand" : "border-border",
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-bold text-foreground">{plan.name}</h3>
              {plan.popular && (
                <span className="rounded-full bg-brand px-2.5 py-1 text-[0.6875rem] font-semibold text-brand-foreground">
                  Most popular
                </span>
              )}
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

            <div className="mt-6 border-t border-border pt-6">
              <p className="rule-label">{plan.priceQualifier}</p>
              <p className="mt-1.5 font-display text-3xl font-bold text-foreground">{plan.price}</p>
              {plan.originalPrice && (
                <p className="mt-1 text-xs text-muted-foreground">
                  <span className="line-through">{plan.originalPrice}</span> · Limited offer
                </p>
              )}
              <p className="mt-1 text-xs text-muted-foreground">{plan.billingType}</p>
            </div>

            <ul className="mt-6 flex flex-1 flex-col gap-2.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              search={{ service: service.slug }}
              className={cn(
                "interactive mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold",
                plan.popular
                  ? "bg-brand text-brand-foreground hover:opacity-90"
                  : "border border-border-strong text-foreground hover:border-brand hover:text-brand",
              )}
            >
              {plan.ctaText}
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 flex flex-col gap-4 rounded-xl border border-dashed border-border-strong p-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{pricingNote}</p>
        <Link
          to="/contact"
          search={{ service: service.slug }}
          className="interactive inline-flex shrink-0 items-center justify-center rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
        >
          Custom requirements? Get a Quote
        </Link>
      </Reveal>
    </>
  );
}
