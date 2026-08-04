"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { confirmPayment } from "@/app/(dashboard)/tenant/_actions/paymentAction";

const PaymentSuccessPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      setMessage("No session ID found.");
      return;
    }

    const confirm = async () => {
      const result = await confirmPayment(sessionId);
      if (result?.success) {
        setStatus("success");
        setMessage(result?.message || "Payment confirmed successfully!");
      } else {
        setStatus("error");
        setMessage(result?.message || "Payment confirmation failed.");
      }
    };

    confirm();
  }, [sessionId]);

  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-4 text-center">
      {status === "loading" && (
        <>
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="text-muted-foreground">Confirming your payment...</p>
        </>
      )}

      {status === "success" && (
        <>
          <CheckCircle2 className="h-14 w-14 text-green-600" />
          <h2 className="text-xl font-semibold">Payment Successful</h2>
          <p className="text-sm text-muted-foreground">{message}</p>
          <Button onClick={() => router.push("/tenant/rentals")}>
            View My Rentals
          </Button>
        </>
      )}

      {status === "error" && (
        <>
          <XCircle className="h-14 w-14 text-red-600" />
          <h2 className="text-xl font-semibold">Payment Confirmation Failed</h2>
          <p className="text-sm text-muted-foreground">{message}</p>
          <Button variant="outline" onClick={() => router.push("/tenant/rentals")}>
            Back to Rentals
          </Button>
        </>
      )}
    </div>
  );
};

export default PaymentSuccessPage;