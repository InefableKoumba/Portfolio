'use client'

import { useEffect } from 'react'

/**
 * Client component that wires up scroll-driven behaviours:
 *  - scroll progress bar width
 *  - nav shrink on scroll
 *  - IntersectionObserver for .scroll-reveal elements
 *  - active nav link highlighting
 */
export default function ScrollInit() {
  useEffect(() => {
    // ── Scroll progress bar ──
    const progressBar = document.getElementById('scroll-progress')
    const updateProgress = () => {
      if (!progressBar) return
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      progressBar.style.width =
        (maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0) + '%'
    }

    // ── Nav shrink on scroll ──
    const nav = document.getElementById('main-nav')
    const updateNav = () => {
      if (!nav) return
      if (window.scrollY > 80) {
        nav.classList.add('py-3')
        nav.classList.remove('py-6')
      } else {
        nav.classList.remove('py-3')
        nav.classList.add('py-6')
      }
    }

    const onScroll = () => {
      updateProgress()
      updateNav()
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // ── Scroll reveal ──
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.scroll-reveal').forEach((el) =>
      revealObserver.observe(el)
    )

    // ── Active nav link ──
    const navLinks: Record<string, HTMLElement | null> = {
      work: document.getElementById('nav-work'),
      about: document.getElementById('nav-about'),
      skills: document.getElementById('nav-skills'),
      contact: document.getElementById('nav-contact'),
    }
    const activeClasses = ['!text-[var(--color-primary)]', 'font-semibold', 'border-b', 'border-[var(--color-primary)]', 'pb-1']

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.id
          Object.values(navLinks).forEach((l) => {
            if (!l) return
            activeClasses.forEach((c) => l.classList.remove(c))
          })
          if (navLinks[id]) {
            activeClasses.forEach((c) => navLinks[id]!.classList.add(c))
          }
        })
      },
      { threshold: 0.35 }
    )
    ;['work', 'about', 'skills', 'contact'].forEach((id) => {
      const el = document.getElementById(id)
      if (el) sectionObserver.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      revealObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  return null
}
