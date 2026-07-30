import type { Dictionary } from '@/app/[lang]/dictionaries'

type SkillsDict = Dictionary['skills']

export default function Skills({ dict }: { dict: SkillsDict }) {
  return (
    <section
      id="skills"
      className="px-[clamp(24px,6vw,80px)] py-32 max-w-[1440px] mx-auto"
    >
      <div className="scroll-reveal flex justify-between items-end mb-16 border-b border-outline pb-8">
        <div>
          <span className="signal-trace font-ibm-mono text-xs font-semibold tracking-[0.12em] uppercase text-brand-data inline-block mb-3">
            CAPABILITIES
          </span>
          <h2 className="font-jetbrains text-[clamp(28px,4vw,48px)] font-bold leading-tight text-brand-text">
            {dict.title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dict.categories.map((cat, idx) => (
          <div
            key={cat.id}
            className={`brand-card scroll-reveal p-9 transition-delay-${idx * 100}`}
          >
            <span className="material-symbols-outlined text-4xl text-brand-signal block mb-6">
              {cat.icon}
            </span>
            <h3 className="font-jetbrains text-2xl font-bold leading-snug text-brand-text mb-5">
              {cat.title}
            </h3>

            {cat.type === 'tags' ? (
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <ul className="flex flex-col gap-3.5 list-none p-0 m-0">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="font-ibm-sans text-base leading-relaxed text-brand-muted flex items-start gap-2.5"
                  >
                    <span className="material-symbols-outlined text-[18px] text-brand-data shrink-0 mt-1">
                      check_circle
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="scroll-reveal grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 transition-delay-300">
        <div className="brand-card p-6">
          <p className="font-ibm-mono text-xs font-semibold tracking-wider uppercase text-brand-signal mb-4">
            {dict.spoken_label}
          </p>
          <div className="flex flex-wrap gap-2">
            {dict.spoken.map((lang) => (
              <span key={lang} className="skill-tag">
                {lang}
              </span>
            ))}
          </div>
        </div>
        <div className="md:col-span-3 brand-card p-6">
          <p className="font-ibm-mono text-xs font-semibold tracking-wider uppercase text-brand-signal mb-4">
            {dict.professional_label}
          </p>
          <div className="flex flex-wrap gap-2">
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
