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

const PROJECT_LAYOUT: Record<string, { col: string; aspect: string; delayClass?: string }> = {
  volten:    { col: 'col-span-12 md:col-span-8', aspect: 'aspect-[16/10]' },
  rhodium:   { col: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/5]', delayClass: 'transition-delay-150' },
  rhopay:    { col: 'col-span-12 md:col-span-5 md:mt-12', aspect: 'aspect-square', delayClass: 'transition-delay-100' },
  luxembourg:{ col: 'col-span-12 md:col-span-7 md:mt-12', aspect: 'aspect-[16/9]', delayClass: 'transition-delay-250' },
}

export default function Work({ dict }: { dict: WorkDict }) {
  return (
    <section
      id="work"
      className="px-[clamp(24px,6vw,80px)] pb-32 max-w-[1440px] mx-auto"
    >
      {/* Header */}
      <div className="scroll-reveal flex justify-between items-end mb-16 border-b border-outline pb-8">
        <div>
          <span className="signal-trace font-ibm-mono text-xs font-semibold tracking-[0.12em] uppercase text-brand-data inline-block mb-3">
            PORTFOLIO
          </span>
          <h2 className="font-jetbrains text-[clamp(28px,4vw,48px)] font-bold leading-tight text-brand-text">
            {dict.title}
          </h2>
        </div>
        <p className="hidden md:block font-ibm-mono text-xs font-semibold tracking-wider text-brand-muted uppercase">
          {dict.date_range}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-12 gap-8">
        {dict.projects.map((project) => {
          const layout = PROJECT_LAYOUT[project.id] ?? { col: 'col-span-12', aspect: 'aspect-video' }
          const imgSrc = PROJECT_IMAGES[project.id] ?? ''

          return (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className={`${layout.col} project-card brand-card scroll-reveal group cursor-pointer p-6 ${layout.delayClass ?? ''}`}
            >
              {/* Image */}
              <div className={`${layout.aspect} overflow-hidden rounded-2xl bg-surface-container mb-6 relative border border-outline`}>
                <Image
                  src={imgSrc}
                  alt={project.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="project-image object-cover transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Meta */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-jetbrains text-2xl font-bold leading-snug text-brand-text mb-3">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="material-symbols-outlined text-brand-signal shrink-0 ml-4 text-2xl transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1">
                  north_east
                </span>
              </div>

              <p className="font-ibm-sans text-base leading-relaxed text-brand-muted mt-4">
                {project.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
