"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPin, User, Home, CreditCard } from "lucide-react";

type TPayment = {
  amount: string;
  method: string;
  status: string;
  paidAt: string | null;
  transactionId: string;
} | null;

type TRental = {
  id: string;
  status: string;
  moveInDate: string;
  message: string;
  createdAt: string;
  tenant: { name: string; email: string };
  property: {
    title: string;
    city: string;
    address: string | null;
    price: string;
    landlord: { name: string; email: string };
  };
  payment: TPayment;
};

const statusStyles: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
  APPROVED: "bg-blue-100 text-blue-700 hover:bg-blue-100",
  ACTIVE: "bg-green-100 text-green-700 hover:bg-green-100",
  COMPLETED: "bg-gray-100 text-gray-700 hover:bg-gray-100",
  REJECTED: "bg-red-100 text-red-700 hover:bg-red-100",
};

const paymentStyles: Record<string, string> = {
  PAID: "bg-green-100 text-green-700 hover:bg-green-100",
  PENDING: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
  FAILED: "bg-red-100 text-red-700 hover:bg-red-100",
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const formatPrice = (price: string) =>
  new Intl.NumberFormat("en-BD").format(Number(price));

const RentalTable = ({ rentals }: { rentals: TRental[] }) => {
  const [selected, setSelected] = useState<TRental | null>(null);

  if (rentals.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-md border text-muted-foreground">
        No rental requests found.
      </div>
    );
  }

  return (
    <>
      <div className="rounded-md border shadow-sm">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead>Tenant</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Move-in</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead className="text-right">Requested</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rentals.map((rental) => (
              <TableRow
                key={rental.id}
                className="cursor-pointer"
                onClick={() => setSelected(rental)}
              >
                <TableCell>
                  <div className="font-medium text-gray-900">{rental.tenant.name}</div>
                  <div className="text-xs text-muted-foreground">{rental.tenant.email}</div>
                </TableCell>
                <TableCell>
                  <div className="max-w-[220px] truncate font-medium">
                    {rental.property.title}
                  </div>
                  <div className="text-xs text-muted-foreground">{rental.property.city}</div>
                </TableCell>
                <TableCell className="text-sm">{formatDate(rental.moveInDate)}</TableCell>
                <TableCell>
                  <Badge className={statusStyles[rental.status] ?? "bg-gray-100 text-gray-700"}>
                    {rental.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {rental.payment ? (
                    <Badge className={paymentStyles[rental.payment.status] ?? "bg-gray-100"}>
                      {rental.payment.status}
                    </Badge>
                  ) : (
                    <span className="text-xs text-muted-foreground">—</span>
                  )}
                </TableCell>
                <TableCell className="text-right text-sm text-muted-foreground">
                  {formatDate(rental.createdAt)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Detail dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Home size={18} />
                  {selected.property.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className={statusStyles[selected.status]}>{selected.status}</Badge>
                  {selected.payment && (
                    <Badge className={paymentStyles[selected.payment.status]}>
                      Payment: {selected.payment.status}
                    </Badge>
                  )}
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <User size={16} className="mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{selected.tenant.name}</p>
                      <p className="text-xs text-muted-foreground">{selected.tenant.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{selected.property.city}</p>
                      <p className="text-xs text-muted-foreground">
                        {selected.property.address ?? "No address given"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CalendarDays size={16} className="mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Move-in</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(selected.moveInDate)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CreditCard size={16} className="mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">
                        ৳{formatPrice(selected.property.price)}
                        <span className="text-xs font-normal text-muted-foreground">/mo</span>
                      </p>
                      {selected.payment && (
                        <p className="text-xs text-muted-foreground">
                          via {selected.payment.method}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="mb-1 text-xs font-medium text-muted-foreground">
                    Tenant's message
                  </p>
                  <p className="rounded-md bg-muted/50 p-3 text-sm text-gray-700">
                    {selected.message}
                  </p>
                </div>

                <div className="text-xs text-muted-foreground">
                  Landlord: {selected.property.landlord.name} ({selected.property.landlord.email})
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RentalTable;