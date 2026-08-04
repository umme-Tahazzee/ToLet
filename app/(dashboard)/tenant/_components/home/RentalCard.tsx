"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, CalendarDays, User } from "lucide-react";
import RentalActions from "../RentalActions";

type TRental = {
  id: string;
  status: string;
  moveInDate: string;
  message: string;
  createdAt: string;
  property: {
    title: string;
    city: string;
    address: string | null;
    price: string;
    landlord: { name: string; email: string };
    category: {
    id: string;
    name: string;
    description: string;
  };
  };
  
  payment: { status: string; amount: string; method: string } | null;
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

const RentalCard = ({ rental }: { rental: TRental }) => {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader className="flex flex-row items-start justify-between gap-2 pb-2">
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-gray-900">
            {rental.property.title}
          </h3>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin size={12} />
            {rental.property.address ? `${rental.property.address}, ` : ""}
            {rental.property.city}
          </p>
        </div>
        <Badge
          className={statusStyles[rental.status] ?? "bg-gray-100 text-gray-700"}
        >
          {rental.status}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-3 pb-2">
        <div className="flex items-center gap-2 text-sm text-primary">
          <User size={14} />
          <p className="font-semibold ">{rental.property?.category?.name ?? "N/A"}</p>
         
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays size={14} />
          Move-in: {formatDate(rental.moveInDate)}
        </div>
        <p className="rounded-md bg-muted/50 p-2 text-xs text-gray-600 line-clamp-2">
          {rental.message}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t pt-3">
        <div>
          <p className="text-lg font-bold text-gray-900">
            ৳{formatPrice(rental.property.price)}
            <span className="text-xs font-normal text-muted-foreground">
              /mo
            </span>
          </p>
          {rental.payment && (
            <Badge
              className={paymentStyles[rental.payment.status] ?? "bg-gray-100"}
            >
              Payment: {rental.payment.status}
            </Badge>
          )}
        </div>
        <RentalActions
          rentalId={rental.id}
          status={rental.status}
          hasPayment={!!rental.payment && rental.payment.status === "PAID"}
        />
      </CardFooter>
    </Card>
  );
};

export default RentalCard;
