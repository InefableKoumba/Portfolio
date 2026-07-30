'use client'

import Image from 'next/image'
import type { Dictionary } from '@/app/[lang]/dictionaries'

type HeroDict = Dictionary['hero']

export default function Hero({ dict }: { dict: HeroDict }) {
  return (
    <section
      id="hero"
      className="pt-40 pb-32 px-[clamp(24px,6vw,80px)] max-w-[1440px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* ── Text ── */}
        <div className="col-span-12 md:col-span-8">
          <span className="scroll-reveal signal-trace font-ibm-mono text-[13px] font-semibold tracking-[0.12em] uppercase text-brand-data inline-block mb-6">
            {dict.location}
          </span>

          <h1 className="scroll-reveal font-jetbrains text-[clamp(36px,5.5vw,76px)] leading-[1.15] tracking-tight font-bold mb-8 text-brand-text transition-delay-100">
            {dict.headline_1}{' '}
            <em className="not-italic italic text-brand-signal">{dict.headline_italic}</em>{' '}
            {dict.headline_2}
          </h1>

          <p className="scroll-reveal font-ibm-sans text-[19px] leading-relaxed text-brand-muted max-w-[640px] mb-12 transition-delay-200">
            {dict.bio}
          </p>

          <div className="scroll-reveal flex flex-wrap gap-5 transition-delay-300">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 font-ibm-mono text-[13px] font-semibold tracking-wider uppercase bg-brand-signal text-brand-bg px-7 py-3.5 rounded-full no-underline transition-all duration-300 ease-in-out shadow-[0_4px_14px_rgba(255,178,56,0.25)] hover:bg-brand-data hover:-translate-y-0.5"
            >
              {dict.cta_work}
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center font-ibm-mono text-[13px] font-semibold tracking-wider uppercase border border-outline rounded-full px-7 py-3.5 text-brand-text bg-brand-card no-underline transition-all duration-300 ease-in-out hover:border-brand-signal hover:text-brand-signal"
            >
              {dict.cta_contact}
            </a>
          </div>
        </div>

        {/* ── Portrait ── */}
        <div className="scroll-reveal col-span-12 md:col-span-4 flex justify-end transition-delay-150">
          <div className="relative">
            <div className="w-[clamp(240px,28vw,320px)] h-[clamp(240px,28vw,320px)] overflow-hidden bg-brand-card border-2 border-outline rounded-3xl relative shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
              <Image
                src="/assets/img/kims.png"
                alt="Inefable Koumba — portrait"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-[rgba(14,26,43,0.9)] border border-outline rounded-xl backdrop-blur-md px-4 py-2">
              <span className="font-ibm-mono text-xs font-semibold tracking-widest text-brand-signal uppercase">
                {dict.badge}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="scroll-reveal grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 transition-delay-400">
        {dict.stats.map((s) => (
          <div
            key={s.label}
            className="brand-card px-7 py-6"
          >
            <p className="font-jetbrains text-[36px] leading-snug font-bold text-brand-signal mb-1.5">
              {s.value}
            </p>
            <p className="font-ibm-mono text-xs font-semibold tracking-wider uppercase text-brand-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
