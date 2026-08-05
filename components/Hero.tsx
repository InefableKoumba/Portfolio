"use client";

import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type HeroDict = Dictionary["hero"];

export default function Hero({ dict }: { dict: HeroDict }) {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 px-[clamp(24px,6vw,80px)] max-w-[1440px] mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* ── Left Content Block ── */}
        <div className="lg:col-span-7 z-10">
          {/* Subheader / Kicker Badge */}
          <div className="scroll-reveal flex items-center gap-2.5 mb-8">
            <span className="w-2.5 h-2.5 rounded-sm bg-brand-signal inline-block shadow-[0_0_12px_#FFB238]"></span>
            <span className="font-ibm-mono text-xs font-semibold tracking-[0.25em] uppercase text-brand-text/90">
              PORTFOLIO
            </span>
          </div>

          {/* Large Impact Name Title */}
          <h1 className="scroll-reveal font-jetbrains text-[clamp(40px,6vw,86px)] leading-[0.95] tracking-tight font-extrabold mb-6 text-brand-text transition-delay-100">
            Inefable
            <span className="block text-brand-signal mt-1">KOUMBA</span>
          </h1>

          {/* Subtitle Role Accent */}
          <h2 className="scroll-reveal font-ibm-mono text-[clamp(16px,2vw,22px)] font-bold tracking-wider uppercase text-brand-data mb-8 transition-delay-150">
            {(dict as { role?: string }).role ??
              "SOFTWARE DEVELOPER / TECHNICAL LEAD"}
          </h2>

          {/* Concise Impact Description */}
          <p className="scroll-reveal font-ibm-sans text-[clamp(17px,1.8vw,22px)] leading-relaxed text-brand-muted/90 max-w-[580px] mb-10 transition-delay-200">
            {(dict as { tagline?: string }).tagline ??
              "I design, build and scale digital products that solve real problems and create measurable impact."}
          </p>

          {/* Orange Accent Trace Line & Action CTA */}
          <div className="scroll-reveal flex items-center gap-6 transition-delay-300">
            <span className="w-12 h-[3px] bg-brand-signal rounded-full"></span>
            <a
              href="#work"
              className="inline-flex items-center gap-3 font-ibm-mono text-xs font-bold tracking-widest uppercase bg-brand-signal hover:bg-brand-signal/80 text-brand-bg px-8 py-4 rounded-xl transition-all duration-300"
            >
              {dict.cta_work}
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* ── Right Hero Visual Block (Spotlight Backdrop + Cutout Portrait) ── */}
        <div className="relative scroll-reveal lg:col-span-5 flex justify-center lg:justify-end transition-delay-200 relative">
          <div className="relative w-full max-w-[460px] aspect-[4/5] flex items-center justify-center">
            {/* Glowing Radial Halo Rings matching reference design (Teal & Amber Glowing Arcs) */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-data/25 via-transparent to-brand-signal/25 blur-3xl scale-95 opacity-80 pointer-events-none"></div>

            {/* Circular Backdrop Arc Graphic */}

            {/* Cutout Portrait Container with Bottom Smooth Fade Gradient */}
            <div className="absolute -bottom-40 w-[140%] h-[120%] flex items-center justify-center z-10 pointer-events-none overflow-hidden">
              <Image
                src="/assets/img/kims.png"
                alt="Inefable Koumba — portrait"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 660px"
                className="object-contain object-bottom filter contrast-[1.05]"
              />
              {/* Bottom Background Transition Overlay Mask */}
              {/* <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-brand-bg)] via-[var(--color-brand-bg)]/80 to-transparent z-20 pointer-events-none"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
