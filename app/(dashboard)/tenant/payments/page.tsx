import { getMyPayments } from "../_actions/paymentAction";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Calendar } from "lucide-react";

type TPayment = {
  id: string;
  amount: string;
  method: string;
  status: string;
  transactionId: string;
  paidAt: string | null;
  createdAt: string;
  rentalRequest?: {
    property?: {
      title: string;
      city: string;
    };
  };
};

const paymentStyles: Record<string, string> = {
  PAID: "bg-green-100 text-green-700 hover:bg-green-100",
  PENDING: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
  FAILED: "bg-red-100 text-red-700 hover:bg-red-100",
};

const formatPrice = (price: string) =>
  new Intl.NumberFormat("en-BD").format(Number(price));

const formatDate = (date: string | null) =>
  date
    ? new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "—";

const TenantPaymentsPage = async () => {
  const result = await getMyPayments();
  const payments: TPayment[] = result?.data ?? [];

  return (
    <div className="space-y-4 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Payments</h1>
        <p className="text-sm text-muted-foreground">
          History of all your rental payments.
        </p>
      </div>

      {payments.length === 0 ? (
        <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-md border text-center text-muted-foreground">
          <CreditCard size={28} className="text-gray-300" />
          <p>No payments found yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {payments.map((payment) => (
            <Card key={payment.id}>
              <CardContent className="flex items-center justify-between gap-4 p-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-gray-900">
                    {payment.rentalRequest?.property?.title ?? "Property"}
                  </p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    Paid on: {formatDate(payment.paidAt)}
                  </p>
                  <p className="mt-1 truncate text-[11px] text-gray-400">
                    Txn ID: {payment.transactionId}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <p className="text-base font-bold text-gray-900">
                    ৳{formatPrice(payment.amount)}
                  </p>
                  <Badge
                    className={
                      paymentStyles[payment.status] ?? "bg-gray-100 text-gray-700"
                    }
                  >
                    {payment.status}
                  </Badge>
                  <span className="text-[11px] text-gray-400">{payment.method}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default TenantPaymentsPage;