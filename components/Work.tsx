"use client";

import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type WorkDict = Dictionary["work"];

const PROJECT_IMAGES: Record<string, string> = {
  "jecontribue-crowdfunding": "/assets/img/jecontribue.webp",
  volten: "/assets/img/voltenai.webp",
  koyeba: "/assets/img/koyeba.webp",
  rhodium: "/assets/img/rhodium.webp",
  rhoptique: "/assets/img/rhoptique.webp",
  mybgr: "/assets/img/mybgr.webp",
  sandweiler: "/assets/img/sandweiler.webp",
  berdorf: "/assets/img/berdorf.webp",
};

export default function Work({
  dict,
  locale,
}: {
  dict: WorkDict;
  locale: "fr" | "en";
}) {
  const isFr = locale === "fr";

  const projects = dict.projects.map((p) => ({
    ...p,
    platforms:
      (p as { platforms?: string[] }).platforms ??
      (p.id === "koyeba" ? ["Android", "iOS"] : ["Web"]),
  }));

  return (
    <section
      id="work"
      className="px-[clamp(24px,6vw,80px)] pb-32 max-w-[1440px] mx-auto mt-12"
    >
      {/* Section Header */}
      <div className="scroll-reveal flex justify-between items-end mb-12 border-b border-outline pb-8">
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

      {/* Grid: Clean 2-column equal-size grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const imgSrc = PROJECT_IMAGES[project.id] ?? "";
          const liveUrl = (project as { link?: string }).link;
          const hasWeb = project.platforms.includes("Web");
          const hasAndroid = project.platforms.includes("Android");
          const hasIOS = project.platforms.includes("iOS");

          return (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="project-card brand-card scroll-reveal group p-6 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-surface-container mb-6 relative border border-outline">
                  <Image
                    src={imgSrc}
                    alt={project.name}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="project-image object-cover transition-transform duration-700 ease-in-out"
                  />

                  {/* Platform Icons Badge Overlay */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-brand-bg/85 border border-outline/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                    {hasWeb && (
                      <span
                        className="material-symbols-outlined text-brand-text text-[16px]"
                        title="Web"
                      >
                        language
                      </span>
                    )}
                    {hasAndroid && (
                      <span
                        className="material-symbols-outlined text-brand-data text-[16px]"
                        title="Android"
                      >
                        android
                      </span>
                    )}
                    {hasIOS && (
                      <span
                        className="material-symbols-outlined text-brand-signal text-[16px]"
                        title="iOS App"
                      >
                        phone_iphone
                      </span>
                    )}
                  </div>
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
                  <span className="material-symbols-outlined text-[18px]">
                    read_more
                  </span>
                  {isFr ? "Détails Techniques" : "Technical Details"}
                </Link>

                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-ibm-mono text-xs font-semibold tracking-wider uppercase bg-surface-bright text-brand-text border border-outline rounded-lg px-4 py-2.5 hover:border-brand-data hover:text-brand-data transition-all duration-200"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      open_in_new
                    </span>
                    {isFr ? "Visiter le site" : "Visit Live Site"}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
