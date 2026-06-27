'use client'

import { useState, type FormEvent } from 'react'
import type { Dictionary } from '@/app/[lang]/dictionaries'

type ContactDict = Dictionary['contact']

export default function Contact({ dict }: { dict: ContactDict }) {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState(dict.subjects[0])
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFormState('sending')

    setTimeout(() => {
      setFormState('sent')
      setName('')
      setEmail('')
      setSubject(dict.subjects[0])
      setMessage('')

      setTimeout(() => {
        setFormState('idle')
      }, 3500)
    }, 1500)
  }

  return (
    <section
      id="contact"
      style={{
        paddingLeft: 'clamp(24px, 6vw, 80px)',
        paddingRight: 'clamp(24px, 6vw, 80px)',
        paddingTop: '128px',
        paddingBottom: '128px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left: Info */}
        <div
          className="scroll-reveal col-span-12 md:col-span-4"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            borderTop: '1px solid var(--color-outline-variant)',
            paddingTop: '48px',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: 'var(--color-on-surface-variant)',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              {dict.direct_label}
            </span>
            <a
              href="mailto:inefablekoumba@proton.me"
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '18px',
                color: 'var(--color-on-surface)',
                textDecoration: 'none',
                transition: 'color 0.3s',
                wordBreak: 'break-all',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-on-surface)')}
            >
              inefablekoumba@proton.me
            </a>
          </div>

          <div>
            <span
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: 'var(--color-on-surface-variant)',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              {dict.phone_label}
            </span>
            <a
              href="tel:+242068801986"
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '18px',
                color: 'var(--color-on-surface)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-on-surface)')}
            >
              +242 06 880 19 86
            </a>
          </div>

          <div>
            <span
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: 'var(--color-on-surface-variant)',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              {dict.location_label}
            </span>
            <p
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '16px',
                lineHeight: 1.6,
                color: 'var(--color-on-surface-variant)',
                margin: 0,
              }}
            >
              {dict.location_city}
              <br />
              {dict.location_country}
              <br />
              <span style={{ color: 'var(--color-secondary)' }}>{dict.location_remote}</span>
            </p>
          </div>

          <div>
            <span
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: 'var(--color-on-surface-variant)',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              {dict.social_label}
            </span>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <a
                  href="https://www.linkedin.com/in/inefablekoumba"
                  target="_blank"
                  rel="noopener"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '16px',
                    color: 'var(--color-on-surface)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-on-surface)')}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    link
                  </span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/InefableKoumba"
                  target="_blank"
                  rel="noopener"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '16px',
                    color: 'var(--color-on-surface)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-on-surface)')}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    code
                  </span>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Form */}
        <div
          className="scroll-reveal col-span-12 md:col-span-7 md:col-start-6"
          style={{
            borderTop: '1px solid var(--color-outline-variant)',
            paddingTop: '48px',
            transitionDelay: '150ms',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: 'var(--color-on-surface-variant)',
              display: 'block',
              marginBottom: '48px',
            }}
          >
            {dict.form_label}
          </span>

          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
          >
            <div>
              <label
                htmlFor="contact-name"
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: 'var(--color-on-surface-variant)',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                {dict.name_label}
              </label>
              <input
                id="contact-name"
                className="form-input"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={dict.name_placeholder}
                autoComplete="name"
                required
                disabled={formState !== 'idle'}
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: 'var(--color-on-surface-variant)',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                {dict.email_label}
              </label>
              <input
                id="contact-email"
                className="form-input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={dict.email_placeholder}
                autoComplete="email"
                required
                disabled={formState !== 'idle'}
              />
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: 'var(--color-on-surface-variant)',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                {dict.subject_label}
              </label>
              <select
                id="contact-subject"
                className="form-input"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={{ appearance: 'none', cursor: 'pointer' }}
                disabled={formState !== 'idle'}
              >
                {dict.subjects.map((subj) => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: 'var(--color-on-surface-variant)',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                {dict.message_label}
              </label>
              <textarea
                id="contact-message"
                className="form-input"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={dict.message_placeholder}
                required
                style={{ resize: 'none' }}
                disabled={formState !== 'idle'}
              />
            </div>

            <div style={{ paddingTop: '16px' }}>
              <button
                type="submit"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: formState === 'idle' ? 'pointer' : 'default',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: 0,
                  opacity: formState === 'idle' ? 1 : 0.6,
                  pointerEvents: formState === 'idle' ? 'auto' : 'none',
                  color: 'var(--color-primary)',
                  transition: 'opacity 0.3s',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    borderBottom: '2px solid var(--color-primary)',
                    paddingBottom: '4px',
                    transition: 'all 0.3s',
                  }}
                >
                  {formState === 'idle' && dict.submit}
                  {formState === 'sending' && dict.sending}
                  {formState === 'sent' && dict.sent}
                </span>
                <span className="material-symbols-outlined">
                  {formState === 'sent' ? 'check' : 'arrow_forward'}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
