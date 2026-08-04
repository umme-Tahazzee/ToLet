"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, MapPin } from "lucide-react";

type TProperty = {
  id: string;
  title: string;
  description: string;
  address: string | null;
  city: string;
  price: string;
  bedroom: number;
  bathroom: number;
  status: string;
  category: {
    name: string;
  };
  landlord: {
    name: string;
    email: string;
  };
};

const statusBadgeClass = (status: string) => {
  switch (status) {
    case "AVAILABLE":
      return "bg-green-100 text-green-700 hover:bg-green-100";
    case "RENTED":
      return "bg-blue-100 text-blue-700 hover:bg-blue-100";
    case "UNAVAILABLE":
      return "bg-gray-100 text-gray-700 hover:bg-gray-100";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const formatPrice = (price: string) => {
  const num = Number(price);
  return new Intl.NumberFormat("en-BD").format(num);
};

const PropertyGrid = ({ properties }: { properties: TProperty[] }) => {
  if (properties.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-md border text-muted-foreground">
        No properties found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <Card key={property.id} className="overflow-hidden transition-shadow hover:shadow-md">
          <CardHeader className="flex flex-row items-start justify-between gap-2 pb-2">
            <div className="min-w-0">
              <h3 className="truncate font-semibold text-gray-900">{property.title}</h3>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin size={12} />
                {property.address ? `${property.address}, ` : ""}
                {property.city}
              </p>
            </div>
            <Badge className={statusBadgeClass(property.status)}>{property.status}</Badge>
          </CardHeader>

          <CardContent className="space-y-2 pb-2">
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {property.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Bed size={14} /> {property.bedroom}
              </span>
              <span className="flex items-center gap-1">
                <Bath size={14} /> {property.bathroom}
              </span>
              <Badge variant="outline" className="ml-auto">
                {property.category.name}
              </Badge>
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-between border-t pt-3">
            <div>
              <p className="text-lg font-bold text-gray-900">
                ৳{formatPrice(property.price)}
                <span className="text-xs font-normal text-muted-foreground">/mo</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Landlord</p>
              <p className="text-sm font-medium text-gray-700">{property.landlord.name}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PropertyGrid;