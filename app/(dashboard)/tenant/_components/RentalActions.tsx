"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createCheckoutSession } from "../_actions/paymentAction";


type Props = {
  rentalId: string;
  status: string;
  hasPayment: boolean;
};

const RentalActions = ({ rentalId, status, hasPayment }: Props) => {
  const [isPending, startTransition] = useTransition();

  if (status !== "APPROVED" || hasPayment) return null;

  const handlePay = () => {
    startTransition(async () => {
      const result = await createCheckoutSession(rentalId);
      if (result?.data?.checkoutUrl) {
        window.location.href = result?.data?.checkoutUrl;
      } else {
        toast.error(result?.message || "Could not start payment");
      }
    });
  };

  return (
    <Button size="sm" onClick={handlePay} disabled={isPending}>
      {isPending ? "Redirecting..." : "Pay Now"}
    </Button>
  );
};

export default RentalActions;