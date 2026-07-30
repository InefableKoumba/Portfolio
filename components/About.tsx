import type { Dictionary } from '@/app/[lang]/dictionaries'

type AboutDict = Dictionary['about']

export default function About({ dict }: { dict: AboutDict }) {
  return (
    <section
      id="about"
      className="bg-brand-bg"
    >
      <div className="px-[clamp(24px,6vw,80px)] py-32 max-w-[1440px] mx-auto">
        {/* Section heading */}
        <div className="scroll-reveal mb-16">
          <span className="signal-trace font-ibm-mono text-xs font-semibold tracking-[0.12em] uppercase text-brand-data inline-block mb-4">
            {dict.label}
          </span>
          <h2 className="font-jetbrains text-[clamp(32px,4.5vw,64px)] leading-[1.15] font-bold tracking-tight text-brand-text max-w-[840px]">
            {dict.headline_1}{' '}
            <em className="not-italic italic text-brand-signal">{dict.headline_italic}</em>{' '}
            {dict.headline_2}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* ── Bio + Education ── */}
          <div className="scroll-reveal md:col-span-7 transition-delay-100">
            <div className="flex flex-col gap-8">
              {[dict.bio_1, dict.bio_2].map((para, i) => (
                <p
                  key={i}
                  className="font-ibm-sans text-lg leading-relaxed text-brand-muted"
                >
                  {para}
                </p>
              ))}
              <p className="font-ibm-sans text-lg leading-relaxed text-brand-muted">
                {dict.bio_3_prefix}{' '}
                <strong className="text-brand-text font-semibold">
                  {dict.bio_3_degree}
                </strong>{' '}
                {dict.bio_3_suffix}
              </p>

              {/* Education */}
              <div className="pt-8 border-t border-outline">
                <h3 className="font-ibm-mono text-xs font-semibold tracking-wider uppercase text-brand-signal mb-6">
                  {dict.education_label}
                </h3>
                <div className="flex flex-col gap-6">
                  {dict.education.map((edu) => (
                    <div
                      key={edu.school}
                      className="brand-card p-5 px-6 flex gap-4 items-start"
                    >
                      <span className="material-symbols-outlined text-brand-data text-2xl shrink-0 mt-0.5">
                        school
                      </span>
                      <div>
                        <p className="font-jetbrains text-lg font-bold text-brand-text">
                          {edu.school}
                        </p>
                        <p className="font-ibm-sans text-[15px] text-brand-muted mt-1">
                          {edu.degree} &nbsp;·&nbsp; {edu.period}
                        </p>
                        <p className="font-ibm-mono text-xs font-semibold tracking-wider uppercase text-brand-data mt-1.5">
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
          <div className="scroll-reveal md:col-span-5 transition-delay-200">
            <div className="brand-card p-9">
              <h3 className="font-ibm-mono text-xs font-semibold tracking-wider uppercase text-brand-signal mb-8">
                {dict.experience_label}
              </h3>

              <div className="pl-4 border-l border-outline flex flex-col gap-8">
                {dict.experience.map((exp) => (
                  <div key={`${exp.company}-${exp.role}`} className="relative pl-6">
                    {/* Timeline dot */}
                    <div
                      className={`absolute -left-[21px] top-[6px] w-[10px] h-[10px] rounded-full border-2 border-brand-card ${
                        exp.current ? 'bg-brand-signal' : 'bg-brand-data'
                      }`}
                    />
                    <p className="font-ibm-mono text-xs font-semibold tracking-wider uppercase text-brand-data mb-1">
                      {exp.period}
                    </p>
                    <p className="font-jetbrains text-lg font-bold text-brand-text">
                      {exp.company}
                    </p>
                    <p className="font-ibm-mono text-xs font-semibold tracking-wider uppercase text-brand-signal mt-0.5">
                      {exp.role}
                    </p>
                    <p className="font-ibm-sans text-sm leading-relaxed text-brand-muted mt-2">
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
