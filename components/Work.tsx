import Link from 'next/link'
import Image from 'next/image'
import type { Dictionary } from '@/app/[lang]/dictionaries'

type WorkDict = Dictionary['work']

const PROJECT_IMAGES: Record<string, string> = {
  'jecontribue-crowdfunding': 'https://images.unsplash.com/photo-1532629345422-7515fe9d1633?w=900&q=80&auto=format&fit=crop',
  volten:    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format&fit=crop',
  koyeba:    'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&q=80&auto=format&fit=crop',
  rhodium:   'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format&fit=crop',
  rhopay:    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80&auto=format&fit=crop',
  rhoptique: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&q=80&auto=format&fit=crop',
  sandweiler:'https://images.unsplash.com/photo-1467293622093-9f15c96be70f?w=900&q=80&auto=format&fit=crop',
  berdorf:   'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=80&auto=format&fit=crop',
}

const PROJECT_LAYOUT: Record<string, { col: string; aspect: string; delayClass?: string }> = {
  'jecontribue-crowdfunding': { col: 'col-span-12 md:col-span-12', aspect: 'aspect-[21/9]' },
  volten:    { col: 'col-span-12 md:col-span-6 md:mt-4', aspect: 'aspect-[16/10]' },
  koyeba:    { col: 'col-span-12 md:col-span-6 md:mt-4', aspect: 'aspect-[16/10]', delayClass: 'transition-delay-100' },
  rhodium:   { col: 'col-span-12 md:col-span-4 md:mt-4', aspect: 'aspect-[4/5]', delayClass: 'transition-delay-150' },
  rhopay:    { col: 'col-span-12 md:col-span-8 md:mt-4', aspect: 'aspect-[16/9]', delayClass: 'transition-delay-200' },
  rhoptique: { col: 'col-span-12 md:col-span-12 md:mt-8', aspect: 'aspect-[21/9]', delayClass: 'transition-delay-150' },
  sandweiler:{ col: 'col-span-12 md:col-span-6 md:mt-8', aspect: 'aspect-[16/10]', delayClass: 'transition-delay-200' },
  berdorf:   { col: 'col-span-12 md:col-span-6 md:mt-8', aspect: 'aspect-[16/10]', delayClass: 'transition-delay-250' },
}

export default function Work({ dict, locale }: { dict: WorkDict; locale: 'fr' | 'en' }) {
  const isFr = locale === 'fr'
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
          const liveUrl = (project as { link?: string }).link

          return (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className={`${layout.col} project-card brand-card scroll-reveal group p-6 flex flex-col justify-between ${layout.delayClass ?? ''}`}
            >
              <div>
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
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="skill-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="font-ibm-sans text-base leading-relaxed text-brand-muted">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-outline/50">
                <Link
                  href={`/${locale}/projects/${project.id}`}
                  className="inline-flex items-center gap-2 font-ibm-mono text-xs font-semibold tracking-wider uppercase bg-brand-primary/10 text-brand-signal border border-brand-signal/30 rounded-lg px-4 py-2.5 hover:bg-brand-signal hover:text-brand-bg transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-[18px]">read_more</span>
                  {isFr ? 'Détails Techniques' : 'Technical Details'}
                </Link>

                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-ibm-mono text-xs font-semibold tracking-wider uppercase bg-surface-bright text-brand-text border border-outline rounded-lg px-4 py-2.5 hover:border-brand-data hover:text-brand-data transition-all duration-200"
                  >
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    {isFr ? 'Visiter le site' : 'Visit Live Site'}
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
