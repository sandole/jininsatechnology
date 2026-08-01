import { Code2, CloudCog, Bot, Database } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pillars = [
  {
    icon: Code2,
    number: "01",
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
    number: "02",
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
    number: "03",
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
    number: "04",
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
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            Capability Statement
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Core Capabilities
          </h2>
          <p className="mt-4 text-muted-foreground">
            Four practice areas covering the full lifecycle of modern software
            delivery — from strategy and cloud architecture to production AI
            systems and intelligent automation.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="group relative gap-4 overflow-hidden bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <CardHeader className="gap-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex rounded-lg bg-indigo-500/10 p-3 ring-1 ring-indigo-500/20 transition-colors group-hover:bg-indigo-500/20">
                    <pillar.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span className="font-mono text-sm font-semibold text-muted-foreground/50">
                    {pillar.number}
                  </span>
                </div>
                <CardTitle className="text-lg leading-snug">
                  {pillar.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {pillar.blurb}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5 border-t pt-4">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-foreground/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
