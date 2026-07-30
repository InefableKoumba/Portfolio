'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import type { Dictionary } from '@/app/[lang]/dictionaries'
import { Globe, ChevronDown, Check } from 'lucide-react'

type NavDict = Dictionary['nav']

interface NavProps {
  dict: NavDict
  locale: 'en' | 'fr'
}

export default function Nav({ dict, locale }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const otherLocale = locale === 'en' ? 'fr' : 'en'
  const close = () => setMenuOpen(false)

  const links = [
    { id: 'nav-about',   href: '#about',   label: dict.about },
    { id: 'nav-work',    href: '#work',    label: dict.work },
    { id: 'nav-skills',  href: '#skills',  label: dict.skills },
    { id: 'nav-contact', href: '#contact', label: dict.contact },
  ]

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ]

  const currentLang = languages.find((l) => l.code === locale) || languages[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scroll-progress" aria-hidden="true" />

      <header
        id="main-nav-wrapper"
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-5 pointer-events-none"
      >
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className="pointer-events-auto w-full max-w-[1440px] backdrop-blur-md bg-[rgba(22,38,61,0.85)] border border-outline rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out"
        >
          <div className="flex justify-between items-center px-7 py-3">
            {/* Logo */}
            <Link
              href={`/${locale}#hero`}
              aria-label="Back to top"
              className="font-jetbrains text-xl font-bold leading-relaxed text-brand-signal no-underline tracking-tight"
            >
              IK<span className="text-brand-data">.</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-7">
                {links.map((l) => (
                  <a
                    key={l.id}
                    id={l.id}
                    href={l.href}
                    className="font-ibm-sans text-[15px] font-medium text-brand-text no-underline hover:text-brand-signal transition-colors duration-300 ease-in-out"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              {/* Language Selector Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2 font-ibm-mono text-xs font-semibold tracking-wider uppercase text-brand-data border border-brand-data/50 bg-brand-card/60 px-3.5 py-1.5 rounded-full hover:border-brand-data hover:bg-brand-card transition-all duration-200 cursor-pointer"
                  aria-expanded={langDropdownOpen}
                  aria-label="Select language"
                >
                  <span className="text-base leading-none">{currentLang.flag}</span>
                  <span>{currentLang.code.toUpperCase()}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-brand-data transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 rounded-2xl bg-brand-card border border-outline shadow-xl py-2 z-50 overflow-hidden backdrop-blur-lg">
                    {languages.map((lang) => (
                      <Link
                        key={lang.code}
                        href={`/${lang.code}`}
                        onClick={() => setLangDropdownOpen(false)}
                        className={`flex items-center justify-between w-full px-4 py-2.5 text-xs font-ibm-sans font-medium no-underline transition-colors ${
                          locale === lang.code
                            ? 'text-brand-signal bg-brand-bg/60'
                            : 'text-brand-text hover:bg-brand-bg/40 hover:text-brand-data'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-lg leading-none">{lang.flag}</span>
                          <span>{lang.name}</span>
                        </div>
                        {locale === lang.code && <Check className="w-3.5 h-3.5 text-brand-signal" />}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Résumé button */}
              <a
                href="/assets/inefable_resume.pdf"
                target="_blank"
                rel="noopener"
                className="font-ibm-mono text-xs font-semibold tracking-wider uppercase bg-brand-signal rounded-full px-5 py-2 text-brand-bg no-underline hover:bg-brand-data hover:text-brand-bg transition-all duration-300 ease-in-out shadow-[0_2px_10px_rgba(255,178,56,0.2)]"
              >
                {dict.resume}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-toggle"
              className="md:hidden bg-transparent border-none cursor-pointer text-brand-signal p-2 flex items-center"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={dict.toggle_menu}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="material-symbols-outlined">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

          {/* Mobile menu */}
          <div
            id="mobile-menu"
            className={`${menuOpen ? 'open' : ''} rounded-b-3xl`}
          >
            <div className="flex flex-col gap-4 px-6 pt-4 pb-6 border-t border-outline">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={close}
                  className="font-ibm-sans text-base text-brand-text no-underline"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3 mt-2 flex-wrap items-center">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}`}
                    onClick={close}
                    className={`flex items-center gap-2 font-ibm-mono text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full no-underline border transition-all ${
                      locale === lang.code
                        ? 'border-brand-signal text-brand-signal bg-brand-card'
                        : 'border-outline text-brand-muted hover:text-brand-text'
                    }`}
                  >
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </Link>
                ))}
                <a
                  href="/assets/inefable_resume.pdf"
                  target="_blank"
                  rel="noopener"
                  className="font-ibm-mono text-xs font-semibold tracking-wider uppercase bg-brand-signal px-5 py-2 rounded-full text-brand-bg no-underline mt-1 w-full text-center"
                >
                  {dict.resume}
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
