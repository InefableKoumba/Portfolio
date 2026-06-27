'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Dictionary } from '@/app/[lang]/dictionaries'

type NavDict = Dictionary['nav']

interface NavProps {
  dict: NavDict
  locale: 'en' | 'fr'
}

export default function Nav({ dict, locale }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const otherLocale = locale === 'en' ? 'fr' : 'en'

  const close = () => setMenuOpen(false)

  const links = [
    { id: 'nav-about',   href: '#about',   label: dict.about },
    { id: 'nav-work',    href: '#work',    label: dict.work },
    { id: 'nav-skills',  href: '#skills',  label: dict.skills },
    { id: 'nav-contact', href: '#contact', label: dict.contact },
  ]

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scroll-progress" aria-hidden="true" />

      <nav
        id="main-nav"
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 50,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          backgroundColor: 'color-mix(in srgb, var(--color-surface) 80%, transparent)',
          borderBottom: '1px solid var(--color-outline-variant)',
          transition: 'padding 0.3s ease',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 80px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
          className="px-6 md:px-20 py-6"
        >
          {/* Logo */}
          <Link
            href={`/${locale}#hero`}
            aria-label="Back to top"
            style={{
              fontFamily: 'var(--font-newsreader)',
              fontSize: '24px',
              fontWeight: 500,
              lineHeight: 1.4,
              color: 'var(--color-primary)',
              textDecoration: 'none',
            }}
          >
            IK<span style={{ color: 'var(--color-secondary)' }}>.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            <div style={{ display: 'flex', gap: '32px' }}>
              {links.map((l) => (
                <a
                  key={l.id}
                  id={l.id}
                  href={l.href}
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '16px',
                    color: 'var(--color-on-surface-variant)',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = 'var(--color-primary)')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = 'var(--color-on-surface-variant)')
                  }
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Language switcher */}
            <Link
              href={`/${otherLocale}`}
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-secondary)',
                border: '1px solid var(--color-secondary)',
                padding: '4px 10px',
                textDecoration: 'none',
                borderRadius: '2px',
                transition: 'all 0.25s',
              }}
              title={`Switch to ${otherLocale === 'fr' ? 'Français' : 'English'}`}
            >
              {otherLocale.toUpperCase()}
            </Link>

            {/* Résumé */}
            <a
              href="/assets/inefable_resume.pdf"
              target="_blank"
              rel="noopener"
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: '1px solid var(--color-primary)',
                padding: '8px 24px',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.backgroundColor = 'var(--color-primary)'
                el.style.color = 'var(--color-on-primary)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.backgroundColor = 'transparent'
                el.style.color = 'var(--color-primary)'
              }}
            >
              {dict.resume}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-toggle"
            className="md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={dict.toggle_menu}
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-primary)',
              padding: '8px',
            }}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className={menuOpen ? 'open' : ''}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              padding: '16px 24px 24px',
              borderTop: '1px solid var(--color-outline-variant)',
            }}
          >
            {links.map((l) => (
              <a
                key={l.id}
                href={l.href}
                onClick={close}
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '16px',
                  color: 'var(--color-on-surface-variant)',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </a>
            ))}
            <div style={{ display: 'flex', gap: '12px', marginTop: '4px', flexWrap: 'wrap' }}>
              <Link
                href={`/${otherLocale}`}
                onClick={close}
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-secondary)',
                  border: '1px solid var(--color-secondary)',
                  padding: '4px 10px',
                  textDecoration: 'none',
                }}
              >
                {otherLocale.toUpperCase()}
              </Link>
              <a
                href="/assets/inefable_resume.pdf"
                target="_blank"
                rel="noopener"
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: '1px solid var(--color-primary)',
                  padding: '4px 24px',
                  color: 'var(--color-primary)',
                  textDecoration: 'none',
                }}
              >
                {dict.resume}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
