"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Printoviya", href: "/about#why-printoviya" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/start-a-project" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur">
      <div className="container-px mx-auto flex h-20 max-w-[1440px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href.split("#")[0];
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue ${
                  active ? "text-blue" : "text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/start-a-project"
            className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-blue"
          >
            Tell Us What You Need
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white xl:hidden">
          <nav className="container-px mx-auto flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy hover:bg-light-blue"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/start-a-project"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-navy px-5 py-3 font-heading text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Tell Us What You Need
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
