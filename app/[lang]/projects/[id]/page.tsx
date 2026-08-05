import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PROJECTS_DATA } from '../../projects-data'
import { getDictionary, hasLocale } from '../../dictionaries'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import GrainyGradients from '@/components/GrainyGradients'

export async function generateStaticParams() {
  const locales = ['fr', 'en']
  const projectIds = Object.keys(PROJECTS_DATA)
  return locales.flatMap((lang) =>
    projectIds.map((id) => ({ lang, id }))
  )
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>
}) {
  const { lang, id } = await params
  if (!hasLocale(lang)) notFound()

  const project = PROJECTS_DATA[id]
  if (!project) notFound()

  const dict = await getDictionary(lang as 'fr' | 'en')
  const locale = lang as 'fr' | 'en'
  const isFr = locale === 'fr'

  const tagline = project.tagline[locale]
  const overview = project.overview[locale]
  const problem = project.problem[locale]
  const solution = project.solution[locale]

  return (
    <>
      <GrainyGradients />
      <Nav dict={dict.nav} locale={locale} />

      <main className="pt-32 pb-32 px-[clamp(24px,6vw,80px)] max-w-[1280px] mx-auto">
        {/* Back Link */}
        <Link
          href={`/${locale}#work`}
          className="inline-flex items-center gap-2 font-ibm-mono text-xs font-semibold uppercase text-brand-muted hover:text-brand-signal transition-colors mb-10 border border-outline rounded-full px-5 py-2 bg-brand-card/50"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          {isFr ? 'Retour aux projets' : 'Back to projects'}
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="skill-tag">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-jetbrains text-[clamp(36px,5vw,64px)] font-bold text-brand-text mb-6 leading-tight">
            {project.name}
          </h1>

          <p className="font-ibm-sans text-[clamp(18px,2vw,24px)] text-brand-signal font-medium max-w-[900px] leading-relaxed mb-8">
            {tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-ibm-mono text-xs font-semibold uppercase bg-brand-signal text-brand-bg px-6 py-3.5 rounded-xl transition-all duration-300 hover:bg-brand-data shadow-lg"
              >
                <span className="material-symbols-outlined text-[20px]">language</span>
                {isFr ? 'Visiter le site en direct' : 'Visit Live Site'}
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-ibm-mono text-xs font-semibold uppercase border border-outline text-brand-text px-6 py-3.5 rounded-xl bg-brand-card hover:border-brand-signal hover:text-brand-signal transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
                {isFr ? 'Code Source' : 'View Source Code'}
              </a>
            )}
          </div>
        </div>

        {/* Project Image Banner */}
        <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-outline mb-16 shadow-2xl">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overview, Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 md:col-span-6 brand-card p-8">
            <span className="font-ibm-mono text-xs font-semibold tracking-wider text-brand-data uppercase block mb-3">
              {isFr ? 'PRÉSENTATION DU PROJET' : 'OVERVIEW'}
            </span>
            <p className="font-ibm-sans text-base leading-relaxed text-brand-text">
              {overview}
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 brand-card p-8">
            <span className="font-ibm-mono text-xs font-semibold tracking-wider text-brand-signal uppercase block mb-3">
              {isFr ? 'LE DÉFI / PROBLÈMED' : 'THE CHALLENGE'}
            </span>
            <p className="font-ibm-sans text-base leading-relaxed text-brand-muted mb-6">
              {problem}
            </p>
            <span className="font-ibm-mono text-xs font-semibold tracking-wider text-brand-data uppercase block mb-3">
              {isFr ? 'LA SOLUTION TECHNIQUE' : 'THE TECHNICAL SOLUTION'}
            </span>
            <p className="font-ibm-sans text-base leading-relaxed text-brand-text">
              {solution}
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        {project.metrics.length > 0 && (
          <div className="mb-20">
            <h2 className="font-jetbrains text-2xl font-bold text-brand-text mb-8 border-b border-outline pb-4">
              {isFr ? 'Impact & Métriques Clés' : 'Impact & Key Metrics'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="brand-card p-6 border-l-4 border-l-brand-signal">
                  <p className="font-jetbrains text-4xl font-bold text-brand-signal mb-2">
                    {m.value}
                  </p>
                  <p className="font-ibm-sans text-sm text-brand-muted leading-relaxed">
                    {m.label[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Full Stack Specs */}
        <div className="mb-20">
          <h2 className="font-jetbrains text-2xl font-bold text-brand-text mb-8 border-b border-outline pb-4">
            {isFr ? 'Spécifications Techniques Completes' : 'Full Stack Specifications'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(project.techStack).map(([category, items]) => {
              if (items.length === 0) return null
              const labels: Record<string, { fr: string; en: string }> = {
                frontend: { fr: 'Frontend & UI', en: 'Frontend & UI' },
                backend: { fr: 'Backend & Services', en: 'Backend & Microservices' },
                database: { fr: 'Données & Cache', en: 'Database & Caching' },
                devops: { fr: 'Infrastructure & DevOps', en: 'DevOps & Tooling' },
                integrations: { fr: 'Intégrations Tiers', en: 'Third-Party APIs' },
              }
              const categoryName = labels[category]?.[locale] ?? category

              return (
                <div key={category} className="brand-card p-6">
                  <h3 className="font-ibm-mono text-xs font-semibold uppercase text-brand-data tracking-wider mb-4 border-b border-outline/50 pb-2">
                    {categoryName}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="font-ibm-sans text-sm text-brand-text flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-signal shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* Architectural Highlights */}
        {project.architectureHighlights.length > 0 && (
          <div className="mb-20">
            <h2 className="font-jetbrains text-2xl font-bold text-brand-text mb-8 border-b border-outline pb-4">
              {isFr ? "Décisions d'Architecture Clés" : 'Key Architecture Decisions'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.architectureHighlights.map((arch, idx) => (
                <div key={idx} className="brand-card p-6">
                  <span className="font-ibm-mono text-xs font-semibold text-brand-signal uppercase tracking-wider block mb-2">
                    0{idx + 1}. HIGHLIGHT
                  </span>
                  <h3 className="font-jetbrains text-lg font-bold text-brand-text mb-3">
                    {arch.title[locale]}
                  </h3>
                  <p className="font-ibm-sans text-sm leading-relaxed text-brand-muted">
                    {arch.description[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Breakdown */}
        {project.features.length > 0 && (
          <div className="mb-20">
            <h2 className="font-jetbrains text-2xl font-bold text-brand-text mb-8 border-b border-outline pb-4">
              {isFr ? 'Fonctionnalités Principales' : 'Core Features Breakdown'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feat, idx) => (
                <div key={idx} className="brand-card p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-jetbrains text-xl font-bold text-brand-text mb-3">
                      {feat.title[locale]}
                    </h3>
                    <p className="font-ibm-sans text-sm text-brand-muted leading-relaxed mb-6">
                      {feat.description[locale]}
                    </p>
                  </div>
                  {feat.tech && feat.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-outline/50">
                      {feat.tech.map((t) => (
                        <span key={t} className="skill-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer dict={dict.footer} locale={locale} />
    </>
  )
}
