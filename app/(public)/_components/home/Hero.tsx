// components/shared/hero.tsx
import { Button } from "@/components/ui/button";
import { getMe } from "@/services/getMe";
import {
  Building2,
  HomeIcon,
  MapPin,
  Search,
  ShieldCheck,
  Wallet,
  Star,
  BedDouble,
  Eye,
} from "lucide-react";
import Link from "next/link";

const featuredProperties = [
  {
    id: "1bc1e18b-3d85-4a70-9cce-4da995234661",
    title: "Spacious 2 Bedroom Apartment",
    city: "Cox's Bazar",
    price: 25000,
    bedroom: 2,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "6f2f968c-9572-4d40-9e7a-6b261b565da5",
    title: "Modern Family House",
    city: "Dhaka",
    price: 32000,
    bedroom: 3,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=900&auto=format&fit=crop",
  },
];

const Hero = async () => {
  const user = await getMe();
  const isLoggedIn = user?.success;

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Ambient background glow — depth without clutter */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Left column */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Verified landlords, zero brokerage
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Find a place that
            <span className="text-primary"> feels like home.</span>
          </h1>

          <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
            ToLet connects tenants directly with landlords — search
            verified listings, request a rental, and pay securely, all in one
            place.
          </p>

          {/* Search card */}
          <div className="mt-8 flex flex-col gap-2 rounded-2xl border border-border bg-card p-2 shadow-sm sm:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded-xl px-3 py-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="City — e.g. Cox's Bazar"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <div className="hidden w-px self-stretch bg-border sm:block" />
            <div className="flex flex-1 items-center gap-2 rounded-xl px-3 py-2.5">
              <HomeIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Bedrooms, budget..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <Button
              size="lg"
              className="gap-2 rounded-xl"
              nativeButton={false}
              render={<Link href="/properties" />}
            >
              <Search className="h-4 w-4" />
              Search
            </Button>
          </div>

          {/* CTA row — search primary, list-property secondary */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button
              variant="ghost"
              className="gap-2 text-sm"
              nativeButton={false}
              render={
                <Link
                  href={isLoggedIn ? "/landlord/properties/new" : "/register"}
                />
              }
            >
              <Wallet className="h-4 w-4" />
              List your property
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-8">
            <div>
              <p className="text-2xl font-extrabold text-foreground">1,200+</p>
              <p className="text-xs text-muted-foreground">Active listings</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-2xl font-extrabold text-foreground">40+</p>
              <p className="text-xs text-muted-foreground">Cities covered</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-2xl font-extrabold text-foreground">98%</p>
              <p className="text-xs text-muted-foreground">
                Tenant satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* Right column — layered composition, signature visual */}
        <div className="relative hidden h-[460px] lg:block">
          {/* Orbit ring — subtle geometric accent behind the main card */}
          <div
            aria-hidden
            className="absolute right-10 top-6 h-72 w-72 bg-primary/100
            rounded-full border border-dashed border-primary/20"
          />
          
          {/* Main featured card */}
          <div className="absolute left-4 top-6 w-80 overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            <div className="relative h-52 w-full">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${featuredProperties[0].image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

              <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Available now
              </span>

              <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold text-primary-foreground">
                ৳{featuredProperties[0].price.toLocaleString()}/mo
              </span>

              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-sm font-semibold text-white">
                  {featuredProperties[0].title}
                </p>
                <p className="flex items-center gap-1 text-xs text-white/80">
                  <MapPin className="h-3 w-3" />
                  {featuredProperties[0].city}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between px-4 py-3">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <BedDouble className="h-3.5 w-3.5" />
                {featuredProperties[0].bedroom} bedrooms
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-foreground">
                <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                4.9
              </span>
            </div>
          </div>

          {/* Floating verified secondary card */}
          <div className="absolute bottom-8 right-0 w-52 rotate-3
           rounded-2xl border border-border bg-card p-3 shadow-lg 
           transition-transform duration-300 hover:rotate-0">
            <div
              className="h-24 w-full rounded-xl bg-cover bg-center"
              style={{
                backgroundImage: `url(${featuredProperties[1].image})`,
              }}
            />
            <p className="mt-2 truncate text-xs font-semibold text-foreground">
              {featuredProperties[1].title}
            </p>
            <p className="text-[11px] text-muted-foreground">
              {featuredProperties[1].city}
            </p>
          </div>

          {/* Social-proof floating pill */}
          <div className="absolute -left-2 bottom-2 flex items-center gap-2 
          rounded-full border border-border bg-card px-3 py-2 shadow-md">
            <div className="flex -space-x-2">
              {["bg-primary", "bg-orange-300", "bg-orange-500"].map(
                (color, i) => (
                  <span
                    key={i}
                    className={`h-6 w-6 rounded-full border-2 border-card ${color}`}
                  />
                )
              )}
            </div>
            <span className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
              <Eye className="h-3.5 w-3.5" />
              24 viewing today
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;