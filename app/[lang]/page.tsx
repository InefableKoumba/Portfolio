import { getDictionary, hasLocale } from './dictionaries'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import About from '@/components/About'
import Skills from '@/components/Skills'
import CtaBanner from '@/components/CtaBanner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollInit from '@/components/ScrollInit'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const locale = lang as 'en' | 'fr'

  return (
    <>
      <ScrollInit />
      <Nav dict={dict.nav} locale={locale} />
      <main>
        <Hero dict={dict.hero} />
        <About dict={dict.about} />
        <Work dict={dict.work} />
        <Skills dict={dict.skills} />
        <CtaBanner dict={dict.cta} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} locale={locale} />
    </>
  )
}
