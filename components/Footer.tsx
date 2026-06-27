'use client'

import type { Dictionary } from '@/app/[lang]/dictionaries'

type FooterDict = Dictionary['footer']

interface FooterProps {
  dict: FooterDict
  locale: 'en' | 'fr'
}

export default function Footer({ dict, locale }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        width: '100%',
        paddingTop: '64px',
        paddingBottom: '64px',
        borderTop: '1px solid var(--color-outline-variant)',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 'clamp(24px, 6vw, 80px)',
          paddingRight: 'clamp(24px, 6vw, 80px)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
        className="flex-col md:flex-row gap-8"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
          className="items-center md:items-start"
        >
          <a
            href="#hero"
            style={{
              fontFamily: 'var(--font-newsreader)',
              fontSize: '24px',
              fontWeight: 500,
              color: 'var(--color-primary)',
              textDecoration: 'none',
            }}
          >
            IK<span style={{ color: 'var(--color-secondary)' }}>.</span>
          </a>
          <p
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface-variant)',
              margin: 0,
            }}
          >
            {dict.copyright}
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '40px',
            fontFamily: 'var(--font-hanken)',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          <a
            href="https://www.linkedin.com/in/inefablekoumba"
            target="_blank"
            rel="noopener"
            style={{
              color: 'var(--color-on-surface-variant)',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
            }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/InefableKoumba"
            target="_blank"
            rel="noopener"
            style={{
              color: 'var(--color-on-surface-variant)',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
            }}
          >
            GitHub
          </a>
          <a
            href="/assets/inefable_resume.pdf"
            target="_blank"
            rel="noopener"
            style={{
              color: 'var(--color-on-surface-variant)',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
            }}
          >
            CV / Résumé
          </a>
        </div>

        <div>
          <button
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-hanken)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface-variant)',
              padding: 0,
            }}
          >
            {dict.back_to_top}
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              north
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
