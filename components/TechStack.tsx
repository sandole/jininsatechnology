import { Terminal, Cloud, Layers } from "lucide-react";

const domains = [
  {
    icon: Terminal,
    name: "Languages & Runtimes",
    items: ["Python", "TypeScript", "C++", "Node.js"],
  },
  {
    icon: Cloud,
    name: "Cloud & Infrastructure",
    items: ["AWS", "Docker", "Kubernetes", "Terraform", "Serverless"],
  },
  {
    icon: Layers,
    name: "Frameworks & Data",
    items: [
      "Next.js",
      "React",
      "PostgreSQL",
      "Redis",
      "LangChain / LangGraph",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="scroll-mt-16 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Technology
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Core Tech Stack
          </h2>
          <p className="mt-4 text-slate-400">
            Production-proven tooling across the application, infrastructure,
            and data layers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {domains.map((domain) => (
            <div
              key={domain.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex rounded-lg bg-cyan-500/10 p-2.5 ring-1 ring-cyan-500/20">
                  <domain.icon className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {domain.name}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {domain.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-950/80 px-3.5 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
