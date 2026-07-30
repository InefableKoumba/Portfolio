"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type ContactDict = Dictionary["contact"];

export default function Contact({ dict }: { dict: ContactDict }) {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">(
    "idle",
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(dict.subjects[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    setTimeout(() => {
      setFormState("sent");
      setName("");
      setEmail("");
      setSubject(dict.subjects[0]);
      setMessage("");

      setTimeout(() => {
        setFormState("idle");
      }, 3500);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="px-[clamp(24px,6vw,80px)] py-32 max-w-[1440px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left: Info */}
        <div className="scroll-reveal brand-card col-span-12 md:col-span-4 flex flex-col gap-9 p-9">
          <div>
            <span className="signal-trace font-ibm-mono text-xs font-semibold tracking-wider text-brand-data inline-block mb-3 uppercase">
              {dict.direct_label}
            </span>
            <a
              href="mailto:hello@inefable.dev"
              className="font-jetbrains text-lg text-brand-text no-underline hover:text-brand-signal transition-colors duration-300 break-all block"
            >
              hello@inefable.dev
            </a>
          </div>

          <div>
            <span className="font-ibm-mono text-xs font-semibold tracking-wider text-brand-data block mb-3 uppercase">
              {dict.phone_label}
            </span>
            <a
              href="tel:+242068801986"
              className="font-jetbrains text-lg text-brand-text no-underline hover:text-brand-signal transition-colors duration-300 block"
            >
              +242 06 880 19 86
            </a>
          </div>

          <div>
            <span className="font-ibm-mono text-xs font-semibold tracking-wider text-brand-data block mb-3 uppercase">
              {dict.location_label}
            </span>
            <p className="font-ibm-sans text-base leading-relaxed text-brand-muted m-0">
              {dict.location_city}
              <br />
              {dict.location_country}
              <br />
              <span className="text-brand-signal">{dict.location_remote}</span>
            </p>
          </div>

          <div>
            <span className="font-ibm-mono text-xs font-semibold tracking-wider text-brand-data block mb-3 uppercase">
              {dict.social_label}
            </span>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li>
                <a
                  href="https://www.linkedin.com/in/inefablekoumba"
                  target="_blank"
                  rel="noopener"
                  className="font-ibm-sans text-base text-brand-text no-underline inline-flex items-center gap-2 hover:text-brand-signal transition-colors duration-300"
                >
                  <span className="material-symbols-outlined text-[18px] text-brand-signal">
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
                  className="font-ibm-sans text-base text-brand-text no-underline inline-flex items-center gap-2 hover:text-brand-signal transition-colors duration-300"
                >
                  <span className="material-symbols-outlined text-[18px] text-brand-signal">
                    code
                  </span>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Form */}
        <div className="scroll-reveal brand-card col-span-12 md:col-span-8 p-9 transition-delay-150">
          <span className="signal-trace font-ibm-mono text-xs font-semibold tracking-[0.12em] text-brand-data inline-block mb-8 uppercase">
            {dict.form_label}
          </span>

          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <div>
              <label
                htmlFor="contact-name"
                className="font-ibm-mono text-xs font-semibold tracking-wider text-brand-muted block mb-2"
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
                disabled={formState !== "idle"}
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="font-ibm-mono text-xs font-semibold tracking-wider text-brand-muted block mb-2"
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
                disabled={formState !== "idle"}
              />
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="font-ibm-mono text-xs font-semibold tracking-wider text-brand-muted block mb-2"
              >
                {dict.subject_label}
              </label>
              <select
                id="contact-subject"
                className="form-input appearance-none cursor-pointer"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={formState !== "idle"}
              >
                {dict.subjects.map((subj) => (
                  <option
                    key={subj}
                    value={subj}
                    className="bg-brand-card text-brand-text"
                  >
                    {subj}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="font-ibm-mono text-xs font-semibold tracking-wider text-brand-muted block mb-2"
              >
                {dict.message_label}
              </label>
              <textarea
                id="contact-message"
                className="form-input resize-none"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={dict.message_placeholder}
                required
                disabled={formState !== "idle"}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className={`bg-brand-signal border-none rounded-full inline-flex items-center gap-3 px-8 py-3.5 color-brand-bg text-brand-bg transition-all duration-300 ease-in-out shadow-[0_4px_14px_rgba(255,178,56,0.25)] ${
                  formState === "idle"
                    ? "cursor-pointer opacity-100 pointer-events-auto"
                    : "cursor-default opacity-60 pointer-events-none"
                }`}
              >
                <span className="font-ibm-mono text-[13px] font-bold tracking-wider uppercase">
                  {formState === "idle" && dict.submit}
                  {formState === "sending" && dict.sending}
                  {formState === "sent" && dict.sent}
                </span>
                <span className="material-symbols-outlined text-[18px]">
                  {formState === "sent" ? "check" : "arrow_forward"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
