import Link from "next/link";
import { getCategories, PropertyFilters } 
from "../../_actions/properties/getProperties";


const bedroomOptions = ["1", "2", "3", "4"];
const bathroomOptions = ["1", "2", "3"];
const statusOptions = [
  { value: "AVAILABLE", label: "Available" },
  { value: "RENTED", label: "Rented" },
];

// Existing filters rekhe ekta field toggle/update kore notun query string banay
function buildHref(filters: PropertyFilters, patch: Partial<PropertyFilters>) {
  const merged = { ...filters, ...patch, page: undefined };
  const params = new URLSearchParams(
    Object.entries(merged).filter(([, v]) => v !== undefined && v !== "") as [string, string][]
  );
  return `/properties?${params.toString()}`;
}

export async function PropertyFiltersPanel({ filters }: { filters: PropertyFilters }) {
  const categoriesRes = await getCategories();
  const categories = categoriesRes.data || [];

  const activeCount = [
    filters.city,
    filters.minPrice,
    filters.maxPrice,
    filters.bedroom,
    filters.bathroom,
    filters.categoryId,
    filters.status,
  ].filter(Boolean).length;

  return (
    <div className="space-y-6 rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Filters</h3>
        {activeCount > 0 && (
          <Link
            href={`/properties${filters.searchTerm ? `?searchTerm=${filters.searchTerm}` : ""}`}
            className="text-xs text-muted-foreground hover:text-primary"
          >
            Clear ({activeCount})
          </Link>
        )}
      </div>

      {/* Bedroom */}
      <div>
        <label className="text-xs font-medium text-muted-foreground">Bedrooms</label>
        <div className="mt-1.5 flex flex-wrap gap-2">
          {bedroomOptions.map((n) => (
            <Link
              key={n}
              href={buildHref(filters, { bedroom: filters.bedroom === n ? undefined : n })}
              className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                filters.bedroom === n
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-foreground hover:border-primary/40"
              }`}
            >
              {n}+
            </Link>
          ))}
        </div>
      </div>

      {/* Bathroom */}
      <div>
        <label className="text-xs font-medium text-muted-foreground">Bathrooms</label>
        <div className="mt-1.5 flex flex-wrap gap-2">
          {bathroomOptions.map((n) => (
            <Link
              key={n}
              href={buildHref(filters, { bathroom: filters.bathroom === n ? undefined : n })}
              className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                filters.bathroom === n
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-foreground hover:border-primary/40"
              }`}
            >
              {n}+
            </Link>
          ))}
        </div>
      </div>

      {/* Status */}
      <div>
        <label className="text-xs font-medium text-muted-foreground">Availability</label>
        <div className="mt-1.5 flex flex-wrap gap-2">
          {statusOptions.map((opt) => (
            <Link
              key={opt.value}
              href={buildHref(filters, {
                status: filters.status === opt.value ? undefined : opt.value,
              })}
              className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                filters.status === opt.value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-foreground hover:border-primary/40"
              }`}
            >
              {opt.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="text-xs font-medium text-muted-foreground">Property type</label>
        <div className="mt-1.5 space-y-1.5">
          {categories.map((cat: { id: string; name: string }) => (
            <Link
              key={cat.id}
              href={buildHref(filters, {
                categoryId: filters.categoryId === cat.id ? undefined : cat.id,
              })}
              className={`block rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                filters.categoryId === cat.id
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-foreground hover:border-primary/40"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Price range — plain GET form, JS lagena */}
      <div>
        <label className="text-xs font-medium text-muted-foreground">
          Price range (৳/mo)
        </label>
        <form action="/properties" method="get" className="mt-1.5 flex items-center gap-2">
          {filters.searchTerm && (
            <input type="hidden" name="searchTerm" value={filters.searchTerm} />
          )}
          {filters.categoryId && (
            <input type="hidden" name="categoryId" value={filters.categoryId} />
          )}
          {filters.bedroom && <input type="hidden" name="bedroom" value={filters.bedroom} />}
          {filters.bathroom && <input type="hidden" name="bathroom" value={filters.bathroom} />}
          {filters.status && <input type="hidden" name="status" value={filters.status} />}
          <input
            type="number"
            name="minPrice"
            placeholder="Min"
            defaultValue={filters.minPrice}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <span className="text-muted-foreground">–</span>
          <input
            type="number"
            name="maxPrice"
            placeholder="Max"
            defaultValue={filters.maxPrice}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground"
          >
            Go
          </button>
        </form>
      </div>
    </div>
  );
}