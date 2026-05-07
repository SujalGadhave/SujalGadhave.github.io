import { Send } from "lucide-react";

import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      title="Contact"
      subtitle="Let’s connect for internships, junior engineering roles, or backend-focused collaborations."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-2xl font-semibold text-white">Reach Out</h3>
          <p className="mt-3 text-slate-300">
            I am actively looking for opportunities where I can contribute to real systems and
            keep growing as a software engineer.
          </p>

          <div className="mt-6 grid gap-3 text-sm">
            <a
              href="https://github.com/SujalGadhave"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-200 transition hover:border-sky-300/40"
            >
              GitHub: github.com/SujalGadhave
            </a>
            <a
              href="https://www.linkedin.com/in/sujalgadhave"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-200 transition hover:border-sky-300/40"
            >
              LinkedIn: /in/sujalgadhave
            </a>
            <a
              href="mailto:sujalgadhave009@gmail.com"
              className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-200 transition hover:border-sky-300/40"
            >
              Email: sujalgadhave009@gmail.com
            </a>
          </div>
        </div>

        <form
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          action="mailto:sujalgadhave009@gmail.com"
          method="post"
          encType="text/plain"
        >
          <h3 className="text-xl font-semibold text-white">Quick Message</h3>

          <div className="mt-4 space-y-3">
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-300/60 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-300/60 focus:outline-none"
            />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Let’s talk about opportunities or collaboration."
              className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-300/60 focus:outline-none"
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

