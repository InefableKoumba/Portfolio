"use client";

import type { Dictionary } from "@/app/[lang]/dictionaries";
import { FaLinkedin, FaGithub, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

type CtaDict = Dictionary["cta"];
type ContactDict = Dictionary["contact"];

export default function CtaBanner({
  dict,
  contactDict,
}: {
  dict: CtaDict;
  contactDict: ContactDict;
}) {
  return (
    <section
      id="contact"
      className="bg-brand-bg py-20 px-[clamp(24px,6vw,80px)]"
    >
      <div className="scroll-reveal brand-card max-w-[1240px] mx-auto py-16 px-8 md:px-14 text-center border border-outline/70 shadow-2xl relative overflow-hidden">
        {/* Subtle Ambient Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-signal/10 via-transparent to-brand-data/10 pointer-events-none"></div>

        {/* Section Label Badge */}
        <span className="signal-trace font-ibm-mono text-xs font-semibold tracking-[0.2em] uppercase text-brand-data mb-6 inline-block">
          {dict.label}
        </span>

        {/* Headline */}
        <h2 className="font-jetbrains text-[clamp(32px,5vw,52px)] leading-tight font-extrabold text-brand-text mb-6">
          {dict.headline_1}{" "}
          <em className="not-italic italic text-brand-signal">
            {dict.headline_italic}
          </em>{" "}
          {dict.headline_2}
        </h2>

        {/* Body Text */}
        <p className="font-ibm-sans text-lg leading-relaxed text-brand-muted max-w-[680px] mx-auto mb-12">
          {dict.body}
        </p>

        {/* Direct Email Display Callout */}
        <div className="mb-12">
          <a
            href="mailto:hello@inefable.dev"
            className="font-jetbrains text-[clamp(22px,3.8vw,36px)] font-bold leading-snug text-brand-signal no-underline border-b-2 border-brand-signal/60 pb-1.5 transition-all duration-300 ease-in-out inline-block hover:text-brand-data hover:border-brand-data hover:scale-[1.02]"
          >
            hello@inefable.dev
          </a>
        </div>

        {/* Embedded Contact & Social Details Grid inside OUVERT AUX OPPORTUNITÉS Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-outline/50 max-w-[1000px] mx-auto text-left">
          {/* Email */}
          <div className="bg-brand-bg/60 p-5 rounded-2xl border border-outline/40">
            <div className="flex items-center gap-2 text-brand-data mb-2">
              <Mail className="w-4 h-4" />
              <span className="font-ibm-mono text-xs font-bold tracking-wider uppercase">
                {contactDict.direct_label}
              </span>
            </div>
            <a
              href="mailto:hello@inefable.dev"
              className="font-jetbrains text-sm font-semibold text-brand-text hover:text-brand-signal transition-colors break-all"
            >
              hello@inefable.dev
            </a>
          </div>

          {/* Phone */}
          <div className="bg-brand-bg/60 p-5 rounded-2xl border border-outline/40">
            <div className="flex items-center gap-2 text-brand-data mb-2">
              <Phone className="w-4 h-4" />
              <span className="font-ibm-mono text-xs font-bold tracking-wider uppercase">
                {contactDict.phone_label}
              </span>
            </div>
            <a
              href="tel:+242068801986"
              className="font-jetbrains text-sm font-semibold text-brand-text hover:text-brand-signal transition-colors"
            >
              +242 06 880 19 86
            </a>
          </div>

          {/* Location */}
          <div className="bg-brand-bg/60 p-5 rounded-2xl border border-outline/40">
            <div className="flex items-center gap-2 text-brand-data mb-2">
              <MapPin className="w-4 h-4" />
              <span className="font-ibm-mono text-xs font-bold tracking-wider uppercase">
                {contactDict.location_label}
              </span>
            </div>
            <p className="font-ibm-sans text-xs font-semibold text-brand-text leading-tight m-0">
              {contactDict.location_city}, {contactDict.location_country}
              <span className="block text-brand-signal mt-0.5">
                {contactDict.location_remote}
              </span>
            </p>
          </div>

          {/* Social Profiles */}
          <div className="bg-brand-bg/60 p-5 rounded-2xl border border-outline/40">
            <div className="flex items-center gap-2 text-brand-data mb-2">
              <Globe className="w-4 h-4" />
              <span className="font-ibm-mono text-xs font-bold tracking-wider uppercase">
                {contactDict.social_label}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/in/inefablekoumba"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-lg border border-outline bg-brand-card flex items-center justify-center text-brand-text hover:text-brand-signal hover:border-brand-signal transition-all"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/InefableKoumba"
                target="_blank"
                rel="noopener"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-lg border border-outline bg-brand-card flex items-center justify-center text-brand-text hover:text-brand-signal hover:border-brand-signal transition-all"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/inefablekoumba"
                target="_blank"
                rel="noopener"
                aria-label="Facebook Profile"
                className="w-8 h-8 rounded-lg border border-outline bg-brand-card flex items-center justify-center text-brand-text hover:text-brand-signal hover:border-brand-signal transition-all"
                title="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/inefable027"
                target="_blank"
                rel="noopener"
                aria-label="Twitter / X Profile"
                className="w-8 h-8 rounded-lg border border-outline bg-brand-card flex items-center justify-center text-brand-text hover:text-brand-signal hover:border-brand-signal transition-all"
                title="Twitter / X"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
