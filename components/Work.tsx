'use client'

import Image from 'next/image'
import type { Dictionary } from '@/app/[lang]/dictionaries'

type WorkDict = Dictionary['work']

const PROJECT_IMAGES: Record<string, string> = {
  volten:    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format&fit=crop',
  rhodium:   'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format&fit=crop',
  rhopay:    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80&auto=format&fit=crop',
  luxembourg:'https://images.unsplash.com/photo-1467293622093-9f15c96be70f?w=900&q=80&auto=format&fit=crop',
}

const PROJECT_LAYOUT: Record<string, { col: string; aspect: string; delay?: string }> = {
  volten:    { col: 'col-span-12 md:col-span-8', aspect: '16/10' },
  rhodium:   { col: 'col-span-12 md:col-span-4', aspect: '4/5', delay: '150ms' },
  rhopay:    { col: 'col-span-12 md:col-span-5 md:mt-12', aspect: '1/1', delay: '100ms' },
  luxembourg:{ col: 'col-span-12 md:col-span-7 md:mt-12', aspect: '16/9', delay: '250ms' },
}

export default function Work({ dict }: { dict: WorkDict }) {
  return (
    <section
      id="work"
      style={{
        paddingLeft: 'clamp(24px, 6vw, 80px)',
        paddingRight: 'clamp(24px, 6vw, 80px)',
        paddingBottom: '128px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div
        className="scroll-reveal"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '64px',
          borderBottom: '1px solid var(--color-outline-variant)',
          paddingBottom: '32px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-newsreader)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          {dict.title}
        </h2>
        <p
          className="hidden md:block"
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: 'var(--color-on-surface-variant)',
            textTransform: 'uppercase',
          }}
        >
          {dict.date_range}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-12 gap-8">
        {dict.projects.map((project) => {
          const layout = PROJECT_LAYOUT[project.id] ?? { col: 'col-span-12', aspect: '16/9' }
          const imgSrc = PROJECT_IMAGES[project.id] ?? ''

          return (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className={`${layout.col} project-card scroll-reveal group`}
              style={{ cursor: 'pointer', transitionDelay: layout.delay }}
            >
              {/* Image */}
              <div
                style={{
                  aspectRatio: layout.aspect,
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-surface-container)',
                  marginBottom: '24px',
                  position: 'relative',
                }}
              >
                <Image
                  src={imgSrc}
                  alt={project.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="project-image"
                  style={{
                    objectFit: 'cover',
                    filter: 'grayscale(1)',
                    transition: 'filter 0.7s ease, transform 0.7s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.filter = 'grayscale(1)'
                  }}
                />
              </div>

              {/* Meta */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-newsreader)',
                      fontSize: '24px',
                      fontWeight: 500,
                      lineHeight: 1.4,
                      marginBottom: '8px',
                    }}
                  >
                    {project.name}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span
                  className="material-symbols-outlined"
                  style={{
                    color: 'var(--color-on-surface-variant)',
                    flexShrink: 0,
                    marginLeft: '16px',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    const card = (e.currentTarget as HTMLElement).closest('.project-card')
                    if (card) {
                      ;(e.currentTarget as HTMLElement).style.opacity = '1'
                    }
                  }}
                >
                  north_east
                </span>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: 'var(--color-on-surface-variant)',
                  marginTop: '16px',
                  maxWidth: '480px',
                }}
              >
                {project.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
