import {
  ArrowRight,
  FileText,
  BadgeCheck,
  Building2,
  CloudCog,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const trustMarkers = [
  { icon: BadgeCheck, label: "CanadaBuys Registered Supplier" },
  { icon: Building2, label: "100% Canadian Owned — BC Incorporated" },
  { icon: CloudCog, label: "Azure & AWS Multi-Cloud Delivery" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Background accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[72rem] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl dark:bg-indigo-600/20" />
        <div className="absolute top-32 right-[10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,116,139,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700">
            <Badge
              variant="outline"
              className="rounded-full bg-card/80 px-4 py-1.5 text-sm font-medium text-muted-foreground"
            >
              🇨🇦 Canadian Owned &amp; Registered Entity
            </Badge>
          </div>

          <h1 className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both mt-8 text-4xl font-bold tracking-tight text-foreground delay-150 duration-700 sm:text-6xl lg:text-7xl">
            Enterprise Software Engineering,{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-cyan-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-cyan-400 dark:to-cyan-300">
              AI &amp; Cloud-Native Systems
            </span>
          </h1>

          <p className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground delay-300 duration-700 sm:text-xl">
            Building production AI and agentic infrastructure, resilient cloud
            architecture, and data pipelines for public and enterprise sectors.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both mt-10 flex flex-col items-center justify-center gap-4 delay-500 duration-700 sm:flex-row">
            <Button
              render={<a href="#capabilities" />}
              nativeButton={false}
              size="lg"
              className="h-11 w-full px-6 shadow-lg shadow-indigo-600/30 sm:w-auto"
            >
              <FileText className="h-4 w-4" />
              View Capability Statement
            </Button>
            <Button
              render={<a href="#contact" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-11 w-full bg-card/60 px-6 sm:w-auto"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="animate-in fade-in fill-mode-both mt-16 delay-700 duration-1000">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 rounded-2xl border bg-card/40 px-6 py-5 backdrop-blur-sm sm:flex-row sm:gap-8">
              {trustMarkers.map((marker) => (
                <div
                  key={marker.label}
                  className="flex items-center gap-2.5 text-sm font-medium text-foreground/80"
                >
                  <marker.icon className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" />
                  {marker.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
