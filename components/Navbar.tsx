"use client";

import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";

const links = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#procurement", label: "GovProcurement" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-baseline gap-1 select-none">
          <span className="text-lg font-bold tracking-tight text-white">
            JININSA
          </span>
          <span className="text-lg font-light tracking-widest text-cyan-400">
            TECHNOLOGY
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#procurement"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-colors hover:bg-indigo-500"
          >
            <ShieldCheck className="h-4 w-4" />
            Procurement Profile
          </a>
        </div>

        <button
          type="button"
          className="text-slate-300 hover:text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 pb-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-slate-300 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#procurement"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
            onClick={() => setOpen(false)}
          >
            <ShieldCheck className="h-4 w-4" />
            Procurement Profile
          </a>
        </div>
      )}
    </header>
  );
}
