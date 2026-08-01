import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-16 border-t border-slate-800 bg-slate-900/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Contact & Engagement
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s discuss your next engagement.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-slate-400">
              Available for RFPs, standing offers, subcontracting arrangements,
              and direct enterprise engagements. Responses within one business
              day.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:contact@jininsa.com"
                className="group flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
              >
                <span className="inline-flex rounded-lg bg-indigo-500/10 p-2.5 ring-1 ring-indigo-500/20">
                  <Mail className="h-5 w-5 text-indigo-400" />
                </span>
                <span className="font-medium">contact@jininsa.com</span>
                <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <span className="inline-flex rounded-lg bg-indigo-500/10 p-2.5 ring-1 ring-indigo-500/20">
                  <MapPin className="h-5 w-5 text-indigo-400" />
                </span>
                <span className="font-medium">
                  Operating in British Columbia, Canada
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8">
            <h3 className="text-base font-semibold text-white">
              Send an inquiry
            </h3>
            <form
              action="mailto:contact@jininsa.com"
              method="post"
              encType="text/plain"
              className="mt-6 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="jane@organization.ca"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="Tell us about your project, RFP, or partnership opportunity…"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-colors hover:bg-indigo-500"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} JININSA TECHNOLOGY. All rights
            reserved.
          </p>
          <p className="text-center text-xs text-slate-600 sm:text-right">
            Registered Canadian business entity (CRA) &middot; Incorporated in
            British Columbia, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
