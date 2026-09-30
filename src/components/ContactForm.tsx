"use client";

import { useState, type FormEvent } from "react";
import { UploadCloud, CheckCircle2 } from "lucide-react";

const PROJECT_TYPES = [
  "Design",
  "Printing",
  "Packaging",
  "Merchandise",
  "Dedicated Designer",
  "Print Coordination",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-slate/60 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20";
const labelClass = "mb-1.5 block text-sm font-medium text-navy";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-off-white p-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-blue" aria-hidden="true" />
        <h3 className="mt-4 font-heading text-xl font-semibold text-navy">
          Thanks — we&apos;ve got your requirement.
        </h3>
        <p className="mt-2 max-w-sm text-sm text-slate">
          We&apos;ll review the details and get back to you with next steps shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input id="company" name="company" type="text" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>
            Country
          </label>
          <input id="country" name="country" type="text" className={inputClass} />
        </div>
        <div>
          <label htmlFor="projectType" className={labelClass}>
            Project Type
          </label>
          <select id="projectType" name="projectType" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a project type
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="need" className={labelClass}>
          What do you need?
        </label>
        <input
          id="need"
          name="need"
          type="text"
          placeholder="e.g. 500 branded tote bags"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor="quantity" className={labelClass}>
            Quantity
          </label>
          <input id="quantity" name="quantity" type="text" className={inputClass} />
        </div>
        <div>
          <label htmlFor="preferredPrinter" className={labelClass}>
            Preferred Printer (optional)
          </label>
          <input id="preferredPrinter" name="preferredPrinter" type="text" className={inputClass} />
        </div>
        <div>
          <label htmlFor="deadline" className={labelClass}>
            Deadline
          </label>
          <input id="deadline" name="deadline" type="date" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="budget" className={labelClass}>
          Budget (optional)
        </label>
        <input id="budget" name="budget" type="text" className={inputClass} />
      </div>

      <div>
        <label htmlFor="details" className={labelClass}>
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          required
          className={inputClass}
          placeholder="Tell us about your project, requirement or problem you're trying to solve."
        />
      </div>

      <div>
        <span className={labelClass}>Upload Artwork / Reference File</span>
        <label
          htmlFor="file"
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-off-white px-6 py-8 text-center transition-colors hover:border-blue"
        >
          <UploadCloud className="h-8 w-8 text-blue" aria-hidden="true" />
          <span className="mt-2 text-sm font-medium text-navy">
            {fileName ?? "Click to upload a file"}
          </span>
          <span className="mt-1 text-xs text-slate">PDF, AI, PSD, JPG or PNG</span>
          <input
            id="file"
            name="file"
            type="file"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          />
        </label>
      </div>

      <div className="rounded-xl bg-light-blue px-5 py-4 text-sm font-medium text-navy">
        Already have a printer? No problem. Tell us who you&apos;re working with and
        we&apos;ll help coordinate.
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl bg-blue px-6 py-4 font-heading text-sm font-semibold text-white transition-colors hover:bg-blue-dark sm:w-auto"
      >
        Submit Your Requirement
      </button>
    </form>
  );
}
