import { BadgeCheck, Building2, ShieldCheck, ListChecks } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const unspscCodes = [
  { code: "81112106", label: "Application Service Providers" },
  { code: "80101500", label: "Information Technology Consultation" },
  { code: "81111500", label: "Software Engineering & Maintenance" },
  { code: "81111800", label: "System Administration & Cloud Management" },
];

const cards = [
  {
    icon: BadgeCheck,
    title: "Registration",
    body: "CanadaBuys & SAP Ariba Registered Supplier — discoverable and bid-ready on federal procurement platforms.",
  },
  {
    icon: Building2,
    title: "Entity",
    body: "100% Canadian Owned & Incorporated Business, registered in British Columbia.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    body: "Prepared for Contract Security Program (CSP/DOS) sponsorship and operating under PIPEDA-aligned data handling practices.",
  },
];

export default function GovProcurement() {
  return (
    <section
      id="procurement"
      className="scroll-mt-16 border-y bg-muted/30 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            Vendor Profile
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Government Procurement Readiness
          </h2>
          <p className="mt-4 text-muted-foreground">
            A registered, compliant Canadian supplier prepared for federal,
            provincial, and prime contractor engagements.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <Card
              key={card.title}
              className="gap-3 bg-card/60 transition-colors hover:border-cyan-500/40"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-lg bg-cyan-500/10 p-2.5 ring-1 ring-cyan-500/20">
                    <card.icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <CardTitle className="text-base">{card.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6 bg-card/60">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="inline-flex rounded-lg bg-indigo-500/10 p-2.5 ring-1 ring-indigo-500/20">
                <ListChecks className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <CardTitle className="text-base">
                UNSPSC Classifications
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-xl border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold sm:px-6">
                      Code
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold sm:px-6">
                      Classification
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {unspscCodes.map((entry) => (
                    <tr
                      key={entry.code}
                      className="transition-colors hover:bg-muted/40"
                    >
                      <td className="px-4 py-3.5 sm:px-6">
                        <Badge
                          variant="outline"
                          className="border-indigo-500/30 bg-indigo-500/10 font-mono text-xs font-semibold text-indigo-700 dark:text-indigo-300"
                        >
                          {entry.code}
                        </Badge>
                      </td>
                      <td className="px-4 py-3.5 text-foreground/80 sm:px-6">
                        {entry.label}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
