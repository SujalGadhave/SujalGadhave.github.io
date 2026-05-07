"use client";

import type { FormEvent } from "react";
import { Code2, Link2, Mail, Send } from "lucide-react";

import { portfolioIdentity } from "@/data/portfolio";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "Recruiter"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:sujalgadhave009@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <SectionShell
      id="contact"
      title="Contact Experience"
      subtitle="Open to internships, junior software engineering roles, and backend-focused collaboration opportunities."
    >
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Let Us Build Something Meaningful</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
            I enjoy solving engineering problems where architecture, security, and product usability
            need to work together. Reach out for opportunities, collaboration, or technical discussions.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href={portfolioIdentity.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              data-cursor="interactive"
            >
              <Code2 className="h-4 w-4 text-[var(--accent-primary)]" />
              github.com/SujalGadhave
            </a>
            <a
              href={portfolioIdentity.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              data-cursor="interactive"
            >
              <Link2 className="h-4 w-4 text-[var(--accent-primary)]" />
              linkedin.com/in/sujalgadhave
            </a>
            <a
              href={portfolioIdentity.email}
              className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              data-cursor="interactive"
            >
              <Mail className="h-4 w-4 text-[var(--accent-primary)]" />
              sujalgadhave009@gmail.com
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6 sm:p-8"
        >
          <h3 className="text-xl font-semibold text-[var(--text-primary)]">Send a Message</h3>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Share role details, project context, or collaboration goals.
          </p>

          <div className="mt-5 space-y-3">
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-dim)] outline-none transition-colors focus:border-[var(--border-strong)]"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-dim)] outline-none transition-colors focus:border-[var(--border-strong)]"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Write your message..."
              className="w-full resize-none rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-dim)] outline-none transition-colors focus:border-[var(--border-strong)]"
            />
          </div>

          <Button type="submit" className="mt-4 gap-2">
            Send Message
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </SectionShell>
  );
}
