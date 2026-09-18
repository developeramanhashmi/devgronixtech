import { Link } from "@tanstack/react-router";

import { publishedServices } from "@/lib/content/services";
import { Container } from "./Section";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Create. Develop. Grow. — digital products, software and technology solutions for
              ambitious businesses in India and international markets.
            </p>
          </div>

          <FooterColumn title="Company">
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/works">Works</FooterLink>
            <FooterLink to="/pricing">Pricing</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterColumn>

          <nav aria-label="Services" className="flex flex-col gap-3">
            <h3 className="rule-label">Services</h3>
            {publishedServices.map((service) => (
              <Link
                key={service.id}
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {service.title}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h3 className="rule-label">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Email not yet provided — add your business email to publish it here.
            </p>
            <p className="text-sm text-muted-foreground">
              Social profiles: to be added.
            </p>
            <Link
              to="/contact"
              className="mt-1 inline-flex w-fit rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              Start a project
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DEVGRONIX. All rights reserved.</p>
          <p>Portfolio and testimonial entries shown are concept/sample content.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <nav aria-label={title} className="flex flex-col gap-3">
      <h3 className="rule-label">{title}</h3>
      {children}
    </nav>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}
