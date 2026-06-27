import type { Dictionary } from '@/app/[lang]/dictionaries'

type SkillsDict = Dictionary['skills']

export default function Skills({ dict }: { dict: SkillsDict }) {
  return (
    <section
      id="skills"
      style={{
        paddingLeft: 'clamp(24px, 6vw, 80px)',
        paddingRight: 'clamp(24px, 6vw, 80px)',
        paddingTop: '128px',
        paddingBottom: '128px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
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
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '32px' }} className="grid-cols-1 md:grid-cols-3">
        {dict.categories.map((cat, idx) => (
          <div
            key={cat.id}
            className="scroll-reveal"
            style={{
              padding: '32px',
              border: '1px solid var(--color-outline-variant)',
              transitionDelay: `${idx * 100}ms`,
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: '32px',
                color: 'var(--color-primary)',
                display: 'block',
                marginBottom: '24px',
              }}
            >
              {cat.icon}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-newsreader)',
                fontSize: '24px',
                fontWeight: 500,
                lineHeight: 1.4,
                marginBottom: '16px',
              }}
            >
              {cat.title}
            </h3>

            {cat.type === 'tags' ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
                {cat.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: 'var(--font-hanken)',
                      fontSize: '16px',
                      lineHeight: 1.6,
                      color: 'var(--color-on-surface-variant)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: '16px',
                        color: 'var(--color-secondary)',
                        flexShrink: 0,
                        marginTop: '4px',
                      }}
                    >
                      check
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div
        className="scroll-reveal grid grid-cols-1 md:grid-cols-4"
        style={{
          marginTop: '48px',
          paddingTop: '48px',
          borderTop: '1px solid var(--color-outline-variant)',
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '32px',
          transitionDelay: '300ms',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface-variant)',
              marginBottom: '12px',
            }}
          >
            {dict.spoken_label}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {dict.spoken.map((lang) => (
              <span key={lang} className="skill-tag">
                {lang}
              </span>
            ))}
          </div>
        </div>
        <div className="md:col-span-3">
          <p
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface-variant)',
              marginBottom: '12px',
            }}
          >
            {dict.professional_label}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {dict.professional.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
