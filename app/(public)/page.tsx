// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Search,
  MapPin,
  Home as HomeIcon,
  Building2,
  ShieldCheck,
  Wallet,
  MessageSquareText,
  ArrowRight,
  Star,
  BedDouble,
  Bath,
} from "lucide-react";
import { getMe } from "@/services/getMe";

// Backend er /api/categories response shape onujayi
const categories = [
  { id: "1", name: "Apartment", icon: Building2 },
  { id: "2", name: "House", icon: HomeIcon },
  { id: "3", name: "Studio", icon: Building2 },
];

// Backend er /api/properties response shape onujayi (Postman collection theke)
const featuredProperties = [
  {
    id: "1bc1e18b-3d85-4a70-9cce-4da995234661",
    title: "Spacious 2 Bedroom Apartment",
    city: "Cox's Bazar",
    price: 25000,
    bedroom: 2,
    bathroom: 2,
    category: "Apartment",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "6f2f968c-9572-4d40-9e7a-6b261b565da5",
    title: "Modern Family House",
    city: "Dhaka",
    price: 32000,
    bedroom: 3,
    bathroom: 3,
    category: "House",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2744e9ac-e4c8-469f-92a7-d6487c69aa9a",
    title: "Cozy Studio Near Campus",
    city: "Chattogram",
    price: 9500,
    bedroom: 1,
    bathroom: 1,
    category: "Studio",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop",
  },
];

const tenantSteps = [
  { step: "01", title: "Search & filter", desc: "City, price, bedroom onujayi khunje bero tomar jonno thik property." },
  { step: "02", title: "Send a request", desc: "POST /api/rentals diye landlord ke sorasori request pathao." },
  { step: "03", title: "Pay & move in", desc: "Approve hole Stripe checkout diye secure payment complete koro." },
];

export default async function Home() {
  const user = await getMe();
  const isLoggedIn = user?.success;

  return (
    <div className="bg-background">
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
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
              RentNest connects tenants directly with landlords — search
              verified listings, request a rental, and pay securely, all in
              one place.
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
                render={<Link href="/properties" />}
              >
                <Search className="h-4 w-4" />
                Search
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
                <p className="text-xs text-muted-foreground">Tenant satisfaction</p>
              </div>
            </div>
          </div>

          {/* Fanned property card stack — signature element */}
          <div className="relative hidden h-[420px] lg:block">
            <div className="absolute right-8 top-4 w-64 -rotate-6 rounded-2xl border border-border bg-card p-3 shadow-lg">
              <div
                className="h-36 w-full rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${featuredProperties[1].image})` }}
              />
              <p className="mt-3 text-sm font-semibold text-foreground">
                {featuredProperties[1].title}
              </p>
              <p className="text-xs text-muted-foreground">
                {featuredProperties[1].city}
              </p>
            </div>

            <div className="absolute left-0 top-24 w-64 rotate-3 rounded-2xl border border-border bg-card p-3 shadow-xl">
              <div
                className="h-36 w-full rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${featuredProperties[0].image})` }}
              />
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {featuredProperties[0].title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {featuredProperties[0].city}
                  </p>
                </div>
                <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">
                  ৳{featuredProperties[0].price.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="absolute bottom-0 right-2 w-56 rotate-2 rounded-2xl border border-border bg-card p-3 shadow-md">
              <div
                className="h-28 w-full rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${featuredProperties[2].image})` }}
              />
              <p className="mt-3 text-sm font-semibold text-foreground">
                {featuredProperties[2].title}
              </p>
            </div>
          </div>
        </div>
      </section>

     
      {/* ---------- Footer ---------- */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} RentNest. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <MessageSquareText className="h-4 w-4" />
            <span>support@rentnest.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}