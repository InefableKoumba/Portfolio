import type { Metadata } from "next";
import { JetBrains_Mono, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import { hasLocale, locales } from "./dictionaries";
import { notFound } from "next/navigation";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "700", "800"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  return {
    title: "Inefable Koumba — Software Developer & Technical Lead",
    description: isFr
      ? "Inefable Koumba est Développeur Logiciel et Responsable Technique basé à Brazzaville, Congo. Fondateur de FRANZER OÜ. Spécialisé en full-stack, applications mobiles et architecture de plateformes d'entreprise."
      : "Inefable Koumba is a Software Developer and Technical Lead based in Brazzaville, Congo. Founder of FRANZER OÜ. Specializing in full-stack engineering, mobile apps, and enterprise platform architecture.",
    keywords: [
      "Inefable Koumba",
      "Software Developer",
      "Technical Lead",
      "FRANZER OÜ",
      "Full-Stack",
      "Flutter",
      "Go",
      "Next.js",
    ],
    authors: [{ name: "Inefable Koumba" }],
    robots: "index, follow",
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${jetbrainsMono.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
