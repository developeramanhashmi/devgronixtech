import { MessageCircle, Phone } from "lucide-react";

export function MobileActionBar() {
  return (
    <aside
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/90 p-2.5 backdrop-blur-lg md:hidden"
    >
      <div className="mx-auto flex max-w-md items-center gap-2">
        {/* Call Button */}
        <a
          href="tel:+917070519128"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border-strong bg-surface py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-brand/40 active:scale-[0.98]"
        >
          <Phone className="size-3.5 text-muted-foreground" aria-hidden="true" />
          <span>Call Us</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917070519128?text=Hi%20DEVGRONIX,%20I'm%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-chart-3 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-[0.98]"
        >
          <MessageCircle className="size-3.5" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
