import {
  BadgeCheck,
  Building2,
  ShieldCheck,
  ListChecks,
} from "lucide-react";

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
      className="scroll-mt-16 border-y border-slate-800 bg-slate-900/40 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Vendor Profile
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Government Procurement Readiness
          </h2>
          <p className="mt-4 text-slate-400">
            A registered, compliant Canadian supplier prepared for federal,
            provincial, and prime contractor engagements.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex rounded-lg bg-cyan-500/10 p-2.5 ring-1 ring-cyan-500/20">
                  <card.icon className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {card.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-lg bg-indigo-500/10 p-2.5 ring-1 ring-indigo-500/20">
              <ListChecks className="h-5 w-5 text-indigo-400" />
            </div>
            <h3 className="text-base font-semibold text-white">
              UNSPSC Classifications
            </h3>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-xs uppercase tracking-wider text-slate-400">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-6">
                    Code
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-6">
                    Classification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {unspscCodes.map((entry) => (
                  <tr
                    key={entry.code}
                    className="transition-colors hover:bg-slate-900/60"
                  >
                    <td className="px-4 py-3.5 sm:px-6">
                      <span className="rounded-md bg-indigo-500/10 px-2.5 py-1 font-mono text-xs font-semibold text-indigo-300 ring-1 ring-indigo-500/20">
                        {entry.code}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-slate-300 sm:px-6">
                      {entry.label}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
