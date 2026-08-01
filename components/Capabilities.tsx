import { Code2, CloudCog, Bot, Database } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Enterprise Software Engineering",
    blurb:
      "Mission-critical applications delivered end-to-end — from discovery and design through production and support.",
    items: [
      "Custom platforms & web applications",
      "Legacy system modernization",
      "Performance & reliability engineering",
    ],
  },
  {
    icon: Bot,
    title: "AI & Agentic Workflows",
    blurb:
      "Practical AI that automates real business processes — production systems, not experiments.",
    items: [
      "AI strategy & enterprise integration",
      "Agent & LLM systems in production",
      "Document intelligence & knowledge retrieval",
    ],
  },
  {
    icon: CloudCog,
    title: "Cloud-Native & Infrastructure",
    blurb:
      "Secure, scalable cloud foundations that cut operational overhead and accelerate delivery.",
    items: [
      "Azure & multi-cloud architecture",
      "DevOps automation & CI/CD",
      "Infrastructure as Code",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering & Systems Design",
    blurb:
      "Fragmented data turned into decision-ready insight for analysts and leadership.",
    items: [
      "Data pipelines & integration",
      "Analytics & reporting systems",
      "Quantitative & financial modelling",
    ],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-16 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Capability Statement
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Core Capabilities
          </h2>
          <p className="mt-4 text-slate-400">
            Four practice areas covering the full lifecycle of modern software
            delivery — from strategy and cloud architecture to production AI
            systems and intelligent automation.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-indigo-500/50 hover:bg-slate-900"
            >
              <div className="inline-flex rounded-lg bg-indigo-500/10 p-3 ring-1 ring-indigo-500/20 transition-colors group-hover:bg-indigo-500/20">
                <pillar.icon className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {pillar.blurb}
              </p>
              <ul className="mt-4 space-y-2.5 border-t border-slate-800 pt-4">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
