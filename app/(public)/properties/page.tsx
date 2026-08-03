import { Suspense } from "react";
import Link from "next/link";
import { PropertyFilters } from "../_actions/properties/getProperties";
import { getProperties } from "@/lib/api/properties";
 import { PropertyCard } from "../_components/properties/PropertyCard";
import { SearchForm } from "../_components/properties/SearchFrom";
import { PropertyFiltersPanel } from "../_components/properties/PropertyFilters";

type PageProps = {
  searchParams: Promise<PropertyFilters>;
};

async function PropertyResults({ filters }: { filters: PropertyFilters }) {
  const res = await getProperties(filters);
  const properties = res.data.data || [];
  const meta = res.meta || { page: 1, totalPage: 1, total: 0 };




  if (properties.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-card p-12 text-center">
        <p className="text-sm font-medium text-foreground">
          No properties match your filters
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Try adjusting your search or clearing filters.
        </p>
      </div>
    );
  }

  const buildPageHref = (page: number) => {
    const params = new URLSearchParams(
      Object.entries(filters).filter(([, v]) => v !== undefined && v !== "") as [string, string][]
    );
    params.set("page", String(page));
    return `/properties?${params.toString()}`;
  };

  const currentPage = Number(filters.page) || 1;

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {properties.map((property: any) => (
           <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {meta.totalPage > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          <Link
            href={buildPageHref(currentPage - 1)}
            aria-disabled={currentPage === 1}
            className={`rounded-lg border border-border px-3 py-1.5 text-sm text-foreground ${
              currentPage === 1 ? "pointer-events-none opacity-40" : ""
            }`}
          >
            Previous
          </Link>
          <span className="text-sm text-muted-foreground">
            Page {meta.page} of {meta.totalPage}
          </span>
          <Link
            href={buildPageHref(currentPage + 1)}
            aria-disabled={currentPage === meta.totalPage}
            className={`rounded-lg border border-border px-3 py-1.5 text-sm text-foreground ${
              currentPage === meta.totalPage ? "pointer-events-none opacity-40" : ""
            }`}
          >
            Next
          </Link>
        </div>
      )}
    </>
  );
}

function ResultsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse overflow-hidden rounded-2xl border border-border bg-card">
          <div className="h-48 w-full bg-muted" />
          <div className="space-y-3 p-4">
            <div className="h-4 w-3/4 rounded bg-muted" />
            <div className="h-3 w-1/2 rounded bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function PropertiesPage({ searchParams }: PageProps) {
  const filters = await searchParams;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">
          Explore properties
        </h1>
      </div>

      <div className="mb-6">
        <SearchForm defaultValue={filters.searchTerm} />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-muted" />}>
            <PropertyFiltersPanel filters={filters} />
          </Suspense>
        </aside>

        <div>
          <Suspense fallback={<ResultsSkeleton />}>
            <PropertyResults filters={filters} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}