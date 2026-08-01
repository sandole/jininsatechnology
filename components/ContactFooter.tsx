import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  {
    href: "mailto:sandole97@gmail.com",
    label: "sandole97@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    href: "https://github.com/sandole",
    label: "github.com/sandole",
    icon: GithubIcon,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/minjunseong/",
    label: "linkedin.com/in/minjunseong",
    icon: LinkedinIcon,
    external: true,
  },
];

export default function ContactFooter() {
  return (
    <footer id="contact" className="scroll-mt-16 border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Contact & Engagement
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s discuss your next engagement.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Available for RFPs, standing offers, subcontracting arrangements,
              and enterprise AI initiatives. Responses within one business day.
            </p>

            <div className="mt-8 space-y-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  {...(social.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-3 text-foreground/80 transition-colors hover:text-foreground"
                >
                  <span className="inline-flex rounded-lg bg-indigo-500/10 p-2.5 ring-1 ring-indigo-500/20">
                    <social.icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </span>
                  <span className="font-medium">{social.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
              <div className="flex items-center gap-3 text-foreground/80">
                <span className="inline-flex rounded-lg bg-indigo-500/10 p-2.5 ring-1 ring-indigo-500/20">
                  <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </span>
                <span className="font-medium">
                  Operating in British Columbia, Canada
                </span>
              </div>
            </div>
          </div>

          <Card className="bg-card/60">
            <CardHeader>
              <CardTitle className="text-base">Send an inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="mailto:sandole97@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@organization.ca"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="resize-none"
                    placeholder="Tell us about your project, RFP, or partnership opportunity…"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full shadow-lg shadow-indigo-600/25"
                >
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Separator className="mt-16" />
        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} JININSA TECHNOLOGY. All rights
            reserved.
          </p>
          <p className="text-center text-xs text-muted-foreground/70 sm:text-right">
            Registered Canadian business entity (CRA) &middot; Incorporated in
            British Columbia, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
