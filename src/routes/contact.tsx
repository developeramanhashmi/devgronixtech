import { createFileRoute } from "@tanstack/react-router";
import { AlertCircle, Mail } from "lucide-react";
import { useState } from "react";

import { breadcrumbSchema, jsonLdScript, seoHead } from "@/lib/seo";
import { publishedServices } from "@/lib/content/services";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  /**
   * `?service=<slug>` preselects the service dropdown, so a visitor arriving
   * from a service or pricing page doesn't re-enter what they were reading.
   */
  validateSearch: (search: Record<string, unknown>): { service?: string } => {
    const value = search["service"];
    return typeof value === "string" && value.length > 0 ? { service: value } : {};
  },
  head: () => ({
    ...seoHead({
      title: "Contact DEVGRONIX | Get a Project Quote",
      description:
        "Tell DEVGRONIX about your project — service, budget range and timeline — and get a scoped quote back. Working with businesses in India and international markets.",
      path: "/contact",
    }),
    scripts: [
      jsonLdScript([
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ]),
    ],
  }),
  component: ContactPage,
});

const budgets = [
  "Under ₹4,999",
  "₹5,000 – ₹10,000",
  "₹10,000 – ₹15,000",
  "₹15,000+",
  "Not sure yet",
];

const timelines = ["As soon as possible", "1–3 months", "3–6 months", "Flexible"];

type Errors = Record<string, string>;

function ContactPage() {
  const { service: requestedService } = Route.useSearch();
  const preselected = publishedServices.find((s) => s.slug === requestedService);
  const [errors, setErrors] = useState<Errors>({});
  const [validated, setValidated] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const description = String(data.get("description") ?? "").trim();

    if (name.length < 2) next["name"] = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next["email"] = "Please enter a valid email address.";
    if (!service) next["service"] = "Please choose a service.";
    if (description.length < 20) next["description"] = "Please describe the project in at least 20 characters.";

    setErrors(next);
    const valid = Object.keys(next).length === 0;
    setValidated(valid);

    if (valid) {
      const serviceTitle = publishedServices.find((s) => s.slug === service)?.title ?? service;
      const message = [
        "Hi DEVGRONIX, I would like to enquire about:",
        `- Name: ${name}`,
        `- Email: ${email}`,
        `- Company: ${company}`,
        `- Service: ${serviceTitle}`,
        `- Details: ${description}`,
      ].join("\n");

      // Best-effort email copy — the WhatsApp handoff below stays the primary channel.
      void fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, service, description }),
      }).catch(() => {
        // Silent: the enquiry still reaches us via WhatsApp.
      });

      window.open(`https://wa.me/917070519128?text=${encodeURIComponent(message)}`, "_blank");
    }
  }

  return (
    <>
      <PageHero
        label="Contact"
        title="Tell us what you're building."
        description="Share the goal, the constraints and your timeline. We'll reply with questions, a suggested approach and a quote range."
      >
        {preselected && (
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/50 bg-brand-soft px-4 py-2 text-sm text-foreground">
            Enquiring about <span className="font-semibold">{preselected.title}</span>
          </p>
        )}
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" error={errors["name"]} required />
                <Field label="Email" name="email" type="email" error={errors["email"]} required />
                <Field label="Company" name="company" />
                <Field label="Country" name="country" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <SelectField
                  label="Service"
                  name="service"
                  error={errors["service"]}
                  defaultValue={preselected?.slug ?? ""}
                  required
                >
                  <option value="">Select a service</option>
                  {publishedServices.map((s) => (
                    <option key={s.id} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                  <option value="other">Something else</option>
                </SelectField>
                <SelectField label="Budget range" name="budget">
                  <option value="">Select a range</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </SelectField>
              </div>

              <TextareaField
                label="Project description"
                name="description"
                error={errors["description"]}
                required
                rows={5}
                placeholder="What are you building, who is it for, and what needs to be true at launch?"
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <SelectField label="Timeline" name="timeline">
                  <option value="">Select a timeline</option>
                  {timelines.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </SelectField>
                <Field label="Additional details" name="additional" placeholder="Links, systems to integrate, etc." />
              </div>

              <button
                type="submit"
                className="inline-flex w-fit items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
              >
                Submit enquiry
              </button>

              {validated && (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-xl border border-brand/50 bg-brand-soft p-5 text-sm text-foreground"
                >
                  <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
                  <p>
                    Your enquiry is ready — WhatsApp has opened in a new tab with your details pre-filled.
                    Press send there and we'll get back to you. If no tab opened, please check your
                    browser's pop-up blocker.
                  </p>
                </div>
              )}
              {!validated && Object.keys(errors).length > 0 && (
                <p role="alert" className="text-sm text-destructive">
                  Please fix the highlighted fields.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={100} className="flex h-fit flex-col gap-7 rounded-xl border border-border bg-surface p-7">
            <div>
              <h2 className="rule-label">Direct contact</h2>
              <p className="mt-3 flex items-start gap-2.5 text-sm text-muted-foreground">
                <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
                admin@devgronix.in
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h2 className="rule-label">What happens next</h2>
              <ol className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-display text-xs font-semibold text-brand">01</span>
                  We read your brief and send back clarifying questions.
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-xs font-semibold text-brand">02</span>
                  A short call to confirm scope and constraints.
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-xs font-semibold text-brand">03</span>
                  A written proposal with deliverables, timeline and cost.
                </li>
              </ol>
            </div>
            <div className="border-t border-border pt-6">
              <h2 className="rule-label">Markets</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We work with clients across India and internationally, including the Middle East.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

const fieldClass =
  "mt-2 w-full rounded-lg border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string | undefined;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="rule-label">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(fieldClass, error ? "border-destructive" : "border-border focus:border-brand")}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  error,
  required,
  defaultValue = "",
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  required?: boolean;
  defaultValue?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="rule-label">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(fieldClass, error ? "border-destructive" : "border-border focus:border-brand")}
      >
        {children}
      </select>
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function TextareaField({
  label,
  name,
  error,
  required,
  rows = 4,
  placeholder,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  required?: boolean;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="rule-label">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(fieldClass, "resize-y", error ? "border-destructive" : "border-border focus:border-brand")}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
