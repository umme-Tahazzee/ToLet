import { Badge } from "@/components/ui/badge";

type TRental = {
  id: string;
  status: string;
  createdAt: string;
  tenant: { name: string };
  property: { title: string };
};

const statusStyles: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
  APPROVED: "bg-blue-100 text-blue-700 hover:bg-blue-100",
  ACTIVE: "bg-green-100 text-green-700 hover:bg-green-100",
  COMPLETED: "bg-gray-100 text-gray-700 hover:bg-gray-100",
  REJECTED: "bg-red-100 text-red-700 hover:bg-red-100",
};

const RecentRentals = ({ rentals }: { rentals: TRental[] }) => {
  if (rentals.length === 0) {
    return <p className="py-6 text-center text-sm text-muted-foreground">No recent requests.</p>;
  }

  return (
    <div className="divide-y">
      {rentals.slice(0, 5).map((rental) => (
        <div key={rental.id} className="flex items-center justify-between py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-gray-900">
              {rental.property.title}
            </p>
            <p className="text-xs text-muted-foreground">
              {rental.tenant.name} • {new Date(rental.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
              })}
            </p>
          </div>
          <Badge className={statusStyles[rental.status] ?? "bg-gray-100 text-gray-700"}>
            {rental.status}
          </Badge>
        </div>
      ))}
    </div>
  );
};

export default RecentRentals;