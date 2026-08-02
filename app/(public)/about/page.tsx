// app/about/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Users,
  Building2,
  Handshake,
  X,
  Check,
  MapPin,
  Wallet,
  MessagesSquare,
  Target,
} from "lucide-react";

const stats = [
  { value: "1,200+", label: "Active listings" },
  { value: "40+", label: "Cities covered" },
  { value: "3,500+", label: "Happy tenants" },
  { value: "৳0", label: "Brokerage fee" },
];

const traditional = [
  "Broker commission — often 1 full month's rent",
  "Listings scattered across Facebook groups, word of mouth",
  "No way to verify landlord or property before visiting",
  "Cash payment, no record, no protection",
];

const withToLet = [
  "Zero brokerage — talk to the landlord directly",
  "Every listing in one searchable, filterable place",
  "Verified landlord profiles before you request a visit",
  "Secure online payment with a full transaction record",
];

const values = [
  {
    icon: ShieldCheck,
    title: "Verified, always",
    desc: "Every landlord on ToLet goes through identity verification before a listing goes live.",
  },
  {
    icon: Handshake,
    title: "Direct, not brokered",
    desc: "Tenants and landlords talk to each other — no middleman taking a cut or slowing things down.",
  },
  {
    icon: Wallet,
    title: "Payments you can trust",
    desc: "Rent moves through secure, trackable checkout — not cash handed over with no receipt.",
  },
  {
    icon: MessagesSquare,
    title: "Built on real reviews",
    desc: "Ratings come only from tenants who actually completed a rental — no fake listings, no fake stars.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* ---------- Hero ---------- */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
            <Target className="h-3.5 w-3.5 text-primary" />
            Why we built ToLet
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl">
            Renting a home shouldn't need a
            <span className="text-primary"> middleman.</span>
          </h1>

          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            In most cities across Bangladesh, finding a rental still means
            chasing brokers, paying a month's rent just to get an
            introduction, and hoping the listing is even real. ToLet
            removes that layer entirely — tenants and landlords, connected
            directly.
          </p>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Signature: Traditional vs ToLet ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
            The old way, and the ToLet way
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Same goal — finding a place to live — with the friction removed.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Traditional */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Traditional renting
            </h3>
            <ul className="mt-5 space-y-4">
              {traditional.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <span className="text-sm text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ToLet */}
          <div className="rounded-2xl border-2 border-primary bg-card p-6 shadow-sm sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
              With ToLet
            </h3>
            <ul className="mt-5 space-y-4">
              {withToLet.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
            What we hold ourselves to
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Who it's for ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <Users className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              For tenants
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Search by city, price, and bedroom count. Send a request
              straight to the landlord, and pay securely once approved — no
              broker in between, no surprise fees.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <Building2 className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              For landlords
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              List a property in minutes, review tenant requests, and get
              paid directly. Every payment is tracked — no cash handovers,
              no chasing.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground sm:px-12">
          <MapPin className="h-8 w-8" />
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Ready to find your next home?
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Browse verified listings across 40+ cities in Bangladesh.
            </p>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="gap-2 rounded-xl"
            nativeButton={false}
            render={<Link href="/properties" />}
          >
            Browse properties
          </Button>
        </div>
      </section>
    </div>
  );
}