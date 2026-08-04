// components/shared/hero-search.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, HomeIcon, Search } from "lucide-react";

const HeroSearch = () => {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (city) params.set("city", city);
    if (query) params.set("q", query);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="mt-8 flex flex-col gap-2 rounded-2xl border border-border bg-card p-2 shadow-sm sm:flex-row">
      <div className="flex flex-1 items-center gap-2 rounded-xl px-3 py-2.5">
        <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City — e.g. Cox's Bazar"
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
      </div>
      <div className="hidden w-px self-stretch bg-border sm:block" />
      <div className="flex flex-1 items-center gap-2 rounded-xl px-3 py-2.5">
        <HomeIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Bedrooms, budget..."
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
      </div>
      <Button size="lg" className="gap-2 rounded-xl" onClick={handleSearch}>
        <Search className="h-4 w-4" />
        Search
      </Button>
    </div>
  );
};

export default HeroSearch;