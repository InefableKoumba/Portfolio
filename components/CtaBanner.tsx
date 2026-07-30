"use client";

import type { Dictionary } from "@/app/[lang]/dictionaries";

type CtaDict = Dictionary["cta"];

export default function CtaBanner({ dict }: { dict: CtaDict }) {
  return (
    <section className="bg-brand-bg py-16 px-[clamp(24px,6vw,80px)]">
      <div className="scroll-reveal brand-card max-w-[1440px] mx-auto py-20 px-8 text-center">
        <span className="signal-trace font-ibm-mono text-xs font-semibold tracking-[0.15em] uppercase text-brand-data mb-6 inline-block">
          {dict.label}
        </span>
        <h2 className="font-jetbrains text-[clamp(32px,5vw,48px)] leading-tight font-bold text-brand-text mb-6">
          {dict.headline_1}{" "}
          <em className="not-italic italic text-brand-signal">
            {dict.headline_italic}
          </em>{" "}
          {dict.headline_2}
        </h2>
        <p className="font-ibm-sans text-lg leading-relaxed text-brand-muted max-w-[640px] mx-auto mb-12">
          {dict.body}
        </p>
        <a
          href="mailto:hello@inefable.dev"
          className="font-jetbrains text-[clamp(22px,3.5vw,32px)] font-bold leading-snug text-brand-signal no-underline border-b-2 border-brand-signal pb-2 transition-all duration-300 ease-in-out inline-block hover:text-brand-data hover:border-brand-data"
        >
          hello@inefable.dev
        </a>
      </div>
    </section>
  );
}
