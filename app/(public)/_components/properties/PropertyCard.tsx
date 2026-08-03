import Link from "next/link";
import { MapPin, BedDouble, Bath } from "lucide-react";

export function PropertyCard({ property }: { property: any }) {
  const image = property.images?.[0] || "/placeholder-property.jpg";

  return (
    <Link
      href={`/properties/${property.id}`}
      className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
    >
      <div className="relative">
        <div
          className="h-48 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        {property.category?.name && (
          <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur">
            {property.category.name}
          </span>
        )}
        {property.status === "RENTED" && (
          <span className="absolute right-3 top-3 rounded-full bg-destructive px-2.5 py-1 text-xs font-semibold text-white">
            Rented
          </span>
        )}
      </div>
      <div className="space-y-3 p-4">
        <div>
          <h3 className="line-clamp-1 font-semibold text-foreground">{property.title}</h3>
          <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {property.city}
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <BedDouble className="h-3.5 w-3.5" />
            {property.bedroom} bed
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-3.5 w-3.5" />
            {property.bathroom} bath
          </span>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-3">
          <span className="text-lg font-extrabold text-foreground">
            ৳{property.price.toLocaleString()}
            <span className="text-xs font-normal text-muted-foreground">/mo</span>
          </span>
        </div>
      </div>
    </Link>
  );
}