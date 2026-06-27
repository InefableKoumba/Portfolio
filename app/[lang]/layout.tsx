import type { Metadata } from 'next'
import { Newsreader, Hanken_Grotesk } from 'next/font/google'
import '../globals.css'
import { getDictionary, hasLocale, locales, type Locale } from './dictionaries'
import { notFound } from 'next/navigation'

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const isFr = lang === 'fr'
  return {
    title: 'Inefable Koumba — Software Developer & Technical Lead',
    description: isFr
      ? 'Inefable Koumba est Développeur Logiciel et Responsable Technique basé à Brazzaville, Congo. Fondateur de FRANZER OÜ. Spécialisé en full-stack, applications mobiles et architecture de plateformes d\'entreprise.'
      : 'Inefable Koumba is a Software Developer and Technical Lead based in Brazzaville, Congo. Founder of FRANZER OÜ. Specializing in full-stack engineering, mobile apps, and enterprise platform architecture.',
    keywords: ['Inefable Koumba', 'Software Developer', 'Technical Lead', 'FRANZER OÜ', 'Full-Stack', 'Flutter', 'Go', 'Next.js'],
    authors: [{ name: 'Inefable Koumba' }],
    robots: 'index, follow',
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  return (
    <html
      lang={lang}
      className={`${newsreader.variable} ${hankenGrotesk.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
