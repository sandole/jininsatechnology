import { Terminal, Cloud, Sparkles, GitPullRequest } from "lucide-react";

const domains = [
  {
    icon: Terminal,
    name: "Languages & Runtimes",
    items: ["Python", "TypeScript", "Go", "Java", "Node.js"],
  },
  {
    icon: Cloud,
    name: "Cloud & Infrastructure",
    items: [
      "Microsoft Azure",
      "Kubernetes",
      "Docker",
      "Terraform",
      "ArgoCD",
      "Kafka",
      "Event-Driven Systems",
    ],
  },
  {
    icon: Sparkles,
    name: "AI, Frameworks & Data",
    items: [
      "LangChain / LangGraph",
      "LlamaIndex",
      "RAG Pipelines",
      "Model Context Protocol (MCP)",
      "Next.js",
      "React",
      "PostgreSQL",
    ],
  },
];

const openSource = [
  { project: "python/cpython", note: "merged core contributions" },
  { project: "OpenBB", note: "8 merged PRs" },
  { project: "LlamaIndex", note: "contributor" },
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
            and AI layers — the same stack we run in institutional-grade
            environments.
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

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="inline-flex rounded-lg bg-indigo-500/10 p-2.5 ring-1 ring-indigo-500/20">
                <GitPullRequest className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">
                  Open Source Track Record
                </h3>
                <p className="mt-0.5 text-sm text-slate-400">
                  Our engineering is validated in public — merged contributions
                  to the tools the industry runs on.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {openSource.map((entry) => (
                <span
                  key={entry.project}
                  className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-sm font-medium text-indigo-300"
                >
                  <span className="font-mono">{entry.project}</span>
                  <span className="text-indigo-400/70"> · {entry.note}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
