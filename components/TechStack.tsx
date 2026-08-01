import { Terminal, Cloud, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      "Azure",
      "AWS",
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

export default function TechStack() {
  return (
    <section id="tech-stack" className="scroll-mt-16 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            Technology
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Core Tech Stack
          </h2>
          <p className="mt-4 text-muted-foreground">
            Production-proven tooling across the application, infrastructure,
            and AI layers — the same stack we run in institutional-grade
            environments.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {domains.map((domain) => (
            <Card
              key={domain.name}
              className="gap-3 bg-card/50 transition-colors hover:border-cyan-500/40"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-lg bg-cyan-500/10 p-2.5 ring-1 ring-cyan-500/20">
                    <domain.icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <CardTitle className="text-base">{domain.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {domain.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="rounded-full bg-background/80 px-3.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
