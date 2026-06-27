import type { Dictionary } from '@/app/[lang]/dictionaries'

type AboutDict = Dictionary['about']

export default function About({ dict }: { dict: AboutDict }) {
  return (
    <section
      id="about"
      style={{ backgroundColor: 'var(--color-surface-container-low)' }}
    >
      <div
        style={{
          paddingLeft: 'clamp(24px, 6vw, 80px)',
          paddingRight: 'clamp(24px, 6vw, 80px)',
          paddingTop: '128px',
          paddingBottom: '128px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Section heading */}
        <div className="scroll-reveal" style={{ marginBottom: '64px' }}>
          <span
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-secondary)',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            {dict.label}
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-newsreader)',
              fontSize: 'clamp(32px, 5vw, 72px)',
              lineHeight: 1.1,
              fontWeight: 300,
              letterSpacing: '-0.01em',
              maxWidth: '720px',
            }}
          >
            {dict.headline_1}{' '}
            <em style={{ fontStyle: 'italic' }}>{dict.headline_italic}</em>{' '}
            {dict.headline_2}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* ── Bio + Education ── */}
          <div
            className="scroll-reveal md:col-span-7"
            style={{ transitionDelay: '100ms' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[dict.bio_1, dict.bio_2].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '18px',
                    lineHeight: 1.6,
                    color: 'var(--color-on-surface-variant)',
                  }}
                >
                  {para}
                </p>
              ))}
              <p
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '18px',
                  lineHeight: 1.6,
                  color: 'var(--color-on-surface-variant)',
                }}
              >
                {dict.bio_3_prefix}{' '}
                <strong style={{ color: 'var(--color-on-surface)', fontWeight: 600 }}>
                  {dict.bio_3_degree}
                </strong>{' '}
                {dict.bio_3_suffix}
              </p>

              {/* Education */}
              <div
                style={{
                  paddingTop: '32px',
                  borderTop: '1px solid var(--color-outline-variant)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '24px',
                  }}
                >
                  {dict.education_label}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {dict.education.map((edu) => (
                    <div
                      key={edu.school}
                      style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          color: 'var(--color-secondary)',
                          fontSize: '20px',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        school
                      </span>
                      <div>
                        <p
                          style={{
                            fontFamily: 'var(--font-hanken)',
                            fontSize: '16px',
                            fontWeight: 600,
                            color: 'var(--color-on-surface)',
                          }}
                        >
                          {edu.school}
                        </p>
                        <p
                          style={{
                            fontFamily: 'var(--font-hanken)',
                            fontSize: '16px',
                            color: 'var(--color-on-surface-variant)',
                          }}
                        >
                          {edu.degree} &nbsp;·&nbsp; {edu.period}
                        </p>
                        <p
                          style={{
                            fontFamily: 'var(--font-hanken)',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'var(--color-on-surface-variant)',
                            marginTop: '4px',
                          }}
                        >
                          {edu.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Experience timeline ── */}
          <div
            className="scroll-reveal md:col-span-5"
            style={{ transitionDelay: '200ms' }}
          >
            <div
              style={{
                backgroundColor: 'var(--color-surface-container-lowest)',
                padding: '32px',
                border: '1px solid var(--color-outline-variant)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '32px',
                }}
              >
                {dict.experience_label}
              </h3>

              <div
                style={{
                  paddingLeft: '16px',
                  borderLeft: '1px solid var(--color-outline-variant)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '32px',
                }}
              >
                {dict.experience.map((exp) => (
                  <div key={`${exp.company}-${exp.role}`} style={{ position: 'relative', paddingLeft: '24px' }}>
                    {/* Timeline dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-21px',
                        top: '6px',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: exp.current
                          ? 'var(--color-primary)'
                          : 'var(--color-on-surface-variant)',
                        border: '2px solid var(--color-surface-container-lowest)',
                      }}
                    />
                    <p
                      style={{
                        fontFamily: 'var(--font-hanken)',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--color-secondary)',
                        marginBottom: '4px',
                      }}
                    >
                      {exp.period}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-hanken)',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: 'var(--color-on-surface)',
                      }}
                    >
                      {exp.company}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-hanken)',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: 'var(--color-on-surface-variant)',
                      }}
                    >
                      {exp.role}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-hanken)',
                        fontSize: '14px',
                        lineHeight: 1.6,
                        color: 'var(--color-on-surface-variant)',
                        marginTop: '8px',
                      }}
                    >
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
