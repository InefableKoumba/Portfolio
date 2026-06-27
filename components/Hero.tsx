'use client'

import Image from 'next/image'
import type { Dictionary } from '@/app/[lang]/dictionaries'

type HeroDict = Dictionary['hero']

export default function Hero({ dict }: { dict: HeroDict }) {
  return (
    <section
      id="hero"
      style={{
        paddingTop: '160px',
        paddingBottom: '128px',
        paddingLeft: 'clamp(24px, 6vw, 80px)',
        paddingRight: 'clamp(24px, 6vw, 80px)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px',
          alignItems: 'end',
        }}
        className="grid-cols-1 md:grid-cols-12"
      >
        {/* ── Text ── */}
        <div style={{ gridColumn: 'span 8' }} className="col-span-12 md:col-span-8">
          <span
            className="scroll-reveal"
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-secondary)',
              display: 'block',
              marginBottom: '24px',
            }}
          >
            {dict.location}
          </span>

          <h1
            className="scroll-reveal"
            style={{
              fontFamily: 'var(--font-newsreader)',
              fontSize: 'clamp(32px, 5vw, 72px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 300,
              marginBottom: '32px',
              transitionDelay: '100ms',
            }}
          >
            {dict.headline_1}{' '}
            <em style={{ fontStyle: 'italic' }}>{dict.headline_italic}</em>{' '}
            {dict.headline_2}
          </h1>

          <p
            className="scroll-reveal"
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'var(--color-on-surface-variant)',
              maxWidth: '560px',
              marginBottom: '48px',
              transitionDelay: '200ms',
            }}
          >
            {dict.bio}
          </p>

          <div
            className="scroll-reveal"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              transitionDelay: '300ms',
            }}
          >
            <a
              href="#work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-hanken)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderBottom: '1px solid var(--color-primary)',
                paddingBottom: '4px',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                transition: 'color 0.3s, border-color 0.3s',
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
              {dict.cta_work}
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                arrow_forward
              </span>
            </a>

            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'var(--font-hanken)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: '1px solid var(--color-primary)',
                padding: '12px 24px',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                transition: 'background 0.3s, color 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)'
                e.currentTarget.style.color = 'var(--color-on-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'var(--color-primary)'
              }}
            >
              {dict.cta_contact}
            </a>
          </div>
        </div>

        {/* ── Portrait ── */}
        <div
          className="scroll-reveal col-span-12 md:col-span-4"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            transitionDelay: '150ms',
          }}
        >
          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: 'clamp(200px, 25vw, 288px)',
                height: 'clamp(200px, 25vw, 288px)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-surface-container)',
                borderRadius: '12px',
                position: 'relative',
              }}
            >
              <Image
                src="/assets/img/kims.png"
                alt="Inefable Koumba — portrait"
                fill
                priority
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                  filter: 'grayscale(1) brightness(0.9) contrast(1.1)',
                }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                backgroundColor: 'rgba(0,0,0,0.88)',
                backdropFilter: 'blur(4px)',
                padding: '8px 16px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                }}
              >
                {dict.badge}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div
        className="scroll-reveal grid grid-cols-2 md:grid-cols-4"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
          marginTop: '80px',
          paddingTop: '48px',
          borderTop: '1px solid var(--color-outline-variant)',
          transitionDelay: '400ms',
        }}
      >
        {dict.stats.map((s) => (
          <div key={s.label}>
            <p
              style={{
                fontFamily: 'var(--font-newsreader)',
                fontSize: '32px',
                lineHeight: 1.3,
                fontWeight: 400,
                marginBottom: '4px',
              }}
            >
              {s.value}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-on-surface-variant)',
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
