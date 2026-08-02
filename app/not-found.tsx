// app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-background px-4 text-center">
      {/* Floating "lost key" illustration */}
      <div className="relative h-32 w-32">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-8xl font-extrabold text-muted select-none">
            404
          </span>
        </div>
        <svg
          className="absolute -right-2 -top-2 h-10 w-10 rotate-12 animate-[float_3s_ease-in-out_infinite] text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="7.5" cy="15.5" r="5.5" />
          <path d="M21 2l-9.6 9.6" />
          <path d="M15.5 7.5l3 3L22 7l-3-3" />
        </svg>
      </div>

      <div className="max-w-sm">
        <h1 className="text-2xl font-extrabold text-foreground">
          This listing doesn't exist
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for may have been rented out, removed, or
          never existed in the first place.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="lg" className="gap-2" render={<Link href="/" />}>
          <Home className="h-4 w-4" />
          Back to home
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="gap-2"
          render={<Link href="/properties" />}
        >
          <Search className="h-4 w-4" />
          Browse properties
        </Button>
      </div>
    </div>
  );
}