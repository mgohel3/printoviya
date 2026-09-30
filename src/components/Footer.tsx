import Link from "next/link";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Printoviya", href: "/about#why-printoviya" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/start-a-project" },
  { label: "Portfolio", href: "/portfolio" },
];

const SERVICE_LINKS = [
  { label: "Branding & Identity", href: "/services#branding-identity" },
  { label: "Packaging Solutions", href: "/services#packaging-solutions" },
  { label: "Merchandise Printing", href: "/services#merchandise" },
  { label: "Print Solutions", href: "/services#print-solutions" },
  { label: "Social Media Design", href: "/services#social-media-design" },
  { label: "Dedicated Design Support", href: "/services#dedicated-designer" },
  { label: "Consultation", href: "/print-concierge" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-px mx-auto max-w-[1440px] py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Your printing journey. A to Z. We&apos;re with you — design, coordinate and
              print, or bring your own printer.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-blue">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-white">Our Services</h3>
            <ul className="mt-4 space-y-3">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-blue">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-white">Stay in Touch</h3>
            <p className="mt-4 text-sm text-white/60">
              Tips, updates and inspiration — straight to your inbox.
            </p>
            <form className="mt-4 flex items-center overflow-hidden rounded-full border border-white/15 bg-white/5">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                className="w-full bg-transparent py-3 pl-5 pr-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue text-white transition-colors hover:bg-blue-dark"
              >
                →
              </button>
            </form>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-blue hover:text-blue"
              >
                <SocialIcon name="instagram" className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-blue hover:text-blue"
              >
                <SocialIcon name="linkedin" className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-blue hover:text-blue"
              >
                <SocialIcon name="youtube" className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-blue hover:text-blue"
              >
                <SocialIcon name="pinterest" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Printoviya. All rights reserved.</p>
          <p>Design · Support · Print · Deliver · Beyond.</p>
        </div>
      </div>
    </footer>
  );
}
