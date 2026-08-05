"use client";

import type { Dictionary } from "@/app/[lang]/dictionaries";
import { FaLinkedin, FaGithub, FaFacebook, FaXTwitter } from "react-icons/fa6";

type FooterDict = Dictionary["footer"];

interface FooterProps {
  dict: FooterDict;
  locale: "en" | "fr";
}

export default function Footer({ dict, locale }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-16 border-t border-outline bg-brand-bg">
      <div className="flex justify-between items-center px-[clamp(24px,6vw,80px)] max-w-[1440px] mx-auto flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-3 items-center md:items-start">
          <a
            href="#hero"
            className="font-jetbrains text-2xl font-bold text-brand-signal no-underline"
          >
            IK<span className="text-brand-data">.</span>
          </a>
          <p className="font-ibm-mono text-xs font-medium tracking-wider uppercase text-brand-muted m-0">
            {dict.copyright}
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/inefablekoumba"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="w-9 h-9 rounded-full border border-outline bg-brand-card/50 flex items-center justify-center text-brand-muted hover:text-brand-signal hover:border-brand-signal hover:bg-brand-card transition-all duration-300"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/InefableKoumba"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            title="GitHub"
            className="w-9 h-9 rounded-full border border-outline bg-brand-card/50 flex items-center justify-center text-brand-muted hover:text-brand-signal hover:border-brand-signal hover:bg-brand-card transition-all duration-300"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://facebook.com/inefablekoumba"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            title="Facebook"
            className="w-9 h-9 rounded-full border border-outline bg-brand-card/50 flex items-center justify-center text-brand-muted hover:text-brand-signal hover:border-brand-signal hover:bg-brand-card transition-all duration-300"
          >
            <FaFacebook className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/inefable027"
            target="_blank"
            rel="noopener"
            aria-label="Twitter / X"
            title="Twitter / X"
            className="w-9 h-9 rounded-full border border-outline bg-brand-card/50 flex items-center justify-center text-brand-muted hover:text-brand-signal hover:border-brand-signal hover:bg-brand-card transition-all duration-300"
          >
            <FaXTwitter className="w-4 h-4" />
          </a>
        </div>

        <div>
          <button
            onClick={scrollToTop}
            className="bg-transparent border-none cursor-pointer inline-flex items-center gap-2 font-ibm-mono text-xs font-semibold tracking-widest uppercase text-brand-data p-0"
          >
            {dict.back_to_top}
            <span className="material-symbols-outlined text-[16px]">north</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
