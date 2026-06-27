'use client'

import type { Dictionary } from '@/app/[lang]/dictionaries'

type CtaDict = Dictionary['cta']

export default function CtaBanner({ dict }: { dict: CtaDict }) {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-surface-container)',
        paddingTop: '128px',
        paddingBottom: '128px',
        paddingLeft: 'clamp(24px, 6vw, 80px)',
        paddingRight: 'clamp(24px, 6vw, 80px)',
      }}
    >
      <div
        className="scroll-reveal"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-secondary)',
            marginBottom: '24px',
            display: 'block',
          }}
        >
          {dict.label}
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-newsreader)',
            fontSize: 'clamp(32px, 5vw, 48px)',
            lineHeight: 1.2,
            fontWeight: 400,
            marginBottom: '24px',
          }}
        >
          {dict.headline_1}{' '}
          <em style={{ fontStyle: 'italic' }}>{dict.headline_italic}</em>{' '}
          {dict.headline_2}
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '18px',
            lineHeight: 1.6,
            color: 'var(--color-on-surface-variant)',
            maxWidth: '560px',
            margin: '0 auto 48px',
          }}
        >
          {dict.body}
        </p>
        <a
          href="mailto:inefablekoumba@proton.me"
          style={{
            fontFamily: 'var(--font-newsreader)',
            fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: 400,
            lineHeight: 1.3,
            color: 'var(--color-primary)',
            textDecoration: 'none',
            borderBottom: '2px solid var(--color-primary)',
            paddingBottom: '8px',
            transition: 'color 0.3s, border-color 0.3s',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-secondary)'
            e.currentTarget.style.borderColor = 'var(--color-secondary)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-primary)'
            e.currentTarget.style.borderColor = 'var(--color-primary)'
          }}
        >
          inefablekoumba@proton.me
        </a>
      </div>
    </section>
  )
}
