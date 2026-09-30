"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border py-5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-heading text-base font-semibold text-navy">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-blue transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate">{answer}</p>}
    </div>
  );
}
