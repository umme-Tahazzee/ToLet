// app/(dashboard)/tenant/payments/success/page.tsx

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { confirmPayment } from "../../_actions/paymentAction";

const PaymentSuccessPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) => {
  const { session_id } = await searchParams;

  const result = session_id
    ? await confirmPayment(session_id)
    : { success: false, message: "No session found" };

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-6 text-center">
      {result?.success !== false ? (
        <>
          <CheckCircle2 size={48} className="text-green-600" />
          <h1 className="text-xl font-bold">Payment Successful!</h1>
          <p className="text-sm text-muted-foreground">
            Your rent payment has been confirmed.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-xl font-bold text-red-600">Payment verification failed</h1>
          <p className="text-sm text-muted-foreground">{result?.message}</p>
        </>
      )}
      <Link href="/tenant/rentals">
        <Button>Back to My Requests</Button>
      </Link>
    </div>
  );
};

export default PaymentSuccessPage;