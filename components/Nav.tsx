"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { ChevronDown, Check, Download, Menu, X } from "lucide-react";

type NavDict = Dictionary["nav"];

interface NavProps {
  dict: NavDict;
  locale: "en" | "fr";
}

export default function Nav({ dict, locale }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const links = [
    { id: "nav-about", href: "#about", sectionId: "about", label: dict.about },
    { id: "nav-work", href: "#work", sectionId: "work", label: dict.work },
    {
      id: "nav-skills",
      href: "#skills",
      sectionId: "skills",
      label: dict.skills,
    },
    {
      id: "nav-contact",
      href: "#contact",
      sectionId: "contact",
      label: dict.contact,
    },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const currentLang = languages.find((l) => l.code === locale) || languages[1];

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);

      // Section Scroll Spy
      const sections = ["hero", "about", "work", "skills", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of Array.from(sections).reverse()) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scroll-progress" aria-hidden="true" />

      {/* Full-width sticky header bar */}
      <header
        id="main-nav-wrapper"
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#0E1A2B]/95 backdrop-blur-md border-brand-signal/30 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-[#0E1A2B]/80 backdrop-blur-sm border-outline/40 py-4"
        }`}
      >
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 flex justify-between items-center"
        >
          {/* Brand Logo & Title */}
          <Link
            href={`/${locale}#hero`}
            aria-label="Back to top"
            className="group flex items-center gap-2.5 font-jetbrains text-xl font-extrabold tracking-tight text-brand-text no-underline transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-signal via-brand-signal to-brand-data flex items-center justify-center text-brand-bg font-black text-sm shadow-[0_0_15px_rgba(255,178,56,0.4)] group-hover:scale-105 transition-transform">
              IK
            </div>
            <span className="font-jetbrains text-xl font-bold tracking-tight text-brand-signal">
              IK<span className="text-brand-data">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links with Glowing Active Pill Indicator */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full shadow-inner">
            {links.map((l) => {
              const isActive = activeSection === l.sectionId;
              return (
                <a
                  key={l.id}
                  id={l.id}
                  href={l.href}
                  className={`relative font-ibm-sans text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full no-underline transition-all duration-300 ${
                    isActive
                      ? ""
                      : "text-brand-text/80 hover:text-brand-signal hover:bg-brand-card/60"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </div>

          {/* Right Action Cluster */}
          <div className="hidden md:flex items-center gap-4">
            {/* Custom Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 font-ibm-mono text-xs font-bold tracking-wider uppercase text-brand-data border border-brand-data/40 bg-brand-card/80 px-3.5 py-2 rounded-xl hover:border-brand-data hover:bg-brand-card transition-all duration-200 cursor-pointer shadow-sm"
                aria-expanded={langDropdownOpen}
                aria-label="Select language"
              >
                <span className="text-sm leading-none">{currentLang.flag}</span>
                <span>{currentLang.code.toUpperCase()}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-brand-data transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-3 w-40 rounded-2xl bg-[#122238] border border-brand-data/30 shadow-[0_12px_32px_rgba(0,0,0,0.6)] py-2 z-50 overflow-hidden backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={`/${lang.code}`}
                      onClick={() => setLangDropdownOpen(false)}
                      className={`flex items-center justify-between w-full px-4 py-2.5 text-xs font-ibm-sans font-semibold no-underline transition-colors ${
                        locale === lang.code
                          ? "text-brand-signal bg-brand-signal/15"
                          : "text-brand-text hover:bg-brand-card hover:text-brand-data"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base leading-none">
                          {lang.flag}
                        </span>
                        <span>{lang.name}</span>
                      </div>
                      {locale === lang.code && (
                        <Check className="w-3.5 h-3.5 text-brand-signal" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* "See My CV" Button */}
            <a
              href="/assets/inefable_resume.pdf"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 font-ibm-mono text-xs font-extrabold tracking-wider uppercase bg-brand-signal hover:bg-brand-signal/80 text-brand-bg px-5 py-2.5 rounded-xl no-underline transition-all duration-300 shadow-[0_4px_16px_rgba(255,178,56,0.35)]"
            >
              <Download className="w-3.5 h-3.5 text-brand-bg" />
              <span>{dict.resume}</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-toggle"
            className="md:hidden bg-brand-card/80 border border-outline rounded-xl p-2.5 text-brand-signal cursor-pointer flex items-center justify-center hover:border-brand-signal transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={dict.toggle_menu}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-outline/40 bg-[#0E1A2B] pt-4 pb-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-2">
              {links.map((l) => {
                const isActive = activeSection === l.sectionId;
                return (
                  <a
                    key={l.id}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-ibm-sans text-sm font-bold tracking-wider uppercase py-2.5 px-4 rounded-xl transition-all ${
                      isActive
                        ? "bg-brand-signal text-brand-bg shadow-md"
                        : "text-brand-text hover:bg-brand-card hover:text-brand-signal"
                    }`}
                  >
                    {l.label}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-outline/40">
              <div className="flex items-center gap-2">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}`}
                    onClick={() => setMenuOpen(false)}
                    className={`font-ibm-mono text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                      locale === lang.code
                        ? "bg-brand-signal text-brand-bg"
                        : "bg-brand-card text-brand-muted border border-outline"
                    }`}
                  >
                    {lang.flag} {lang.code.toUpperCase()}
                  </Link>
                ))}
              </div>

              <a
                href="/assets/inefable_resume.pdf"
                target="_blank"
                rel="noopener"
                onClick={() => setMenuOpen(false)}
                className="font-ibm-mono text-xs font-bold tracking-wider uppercase bg-brand-signal text-brand-bg px-4 py-2 rounded-xl shadow-md"
              >
                {dict.resume}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
