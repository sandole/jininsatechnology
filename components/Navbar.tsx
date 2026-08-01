"use client";

import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#procurement", label: "GovProcurement" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-baseline gap-1 select-none">
          <span className="text-lg font-bold tracking-tight text-foreground">
            JININSA
          </span>
          <span className="text-lg font-light tracking-widest text-cyan-600 dark:text-cyan-400">
            TECHNOLOGY
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <Button
            render={<a href="#procurement" />}
            nativeButton={false}
            className="shadow-lg shadow-indigo-600/20"
          >
            <ShieldCheck className="h-4 w-4" />
            Procurement Profile
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t bg-background px-4 pb-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            render={<a href="#procurement" onClick={() => setOpen(false)} />}
            nativeButton={false}
            className="mt-2 w-full"
          >
            <ShieldCheck className="h-4 w-4" />
            Procurement Profile
          </Button>
        </div>
      )}
    </header>
  );
}
