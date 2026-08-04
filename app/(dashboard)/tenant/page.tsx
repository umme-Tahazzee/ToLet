import { getMyRentals } from "./_actions/rentalAction";
import { getMyPayments } from "./_actions/paymentAction";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Home,
  Clock,
  CheckCircle2,
  Wallet,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const formatPrice = (price: string | number) =>
  new Intl.NumberFormat("en-BD").format(Number(price));

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const statusStyles: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
  APPROVED: "bg-blue-100 text-blue-700 hover:bg-blue-100",
  ACTIVE: "bg-green-100 text-green-700 hover:bg-green-100",
  COMPLETED: "bg-gray-100 text-gray-700 hover:bg-gray-100",
  REJECTED: "bg-red-100 text-red-700 hover:bg-red-100",
};

const TenantDashboardPage = async () => {
  const [rentalsResult, paymentsResult] = await Promise.all([
    getMyRentals(),
    getMyPayments(),
  ]);

  const rentals = rentalsResult?.data ?? [];
  const payments = paymentsResult?.data ?? [];

  const totalRequests = rentals.length;
  const pendingCount = rentals.filter((r: any) => r.status === "PENDING").length;
  const approvedCount = rentals.filter((r: any) => r.status === "APPROVED").length;
  const activeCount = rentals.filter((r: any) => r.status === "ACTIVE").length;

  const totalPaid = payments
    .filter((p: any) => p.status === "PAID")
    .reduce((sum: number, p: any) => sum + Number(p.amount), 0);

  const pendingPayments = payments.filter((p: any) => p.status === "PENDING").length;

  const recentRentals = [...rentals]
    .sort(
      (a: any, b: any) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 4);

  const stats = [
    {
      label: "Total Requests",
      value: totalRequests,
      icon: Home,
      iconBg: "bg-blue-50 text-blue-600",
    },
    {
      label: "Pending",
      value: pendingCount,
      icon: Clock,
      iconBg: "bg-yellow-50 text-yellow-600",
    },
    {
      label: "Approved / Active",
      value: approvedCount + activeCount,
      icon: CheckCircle2,
      iconBg: "bg-green-50 text-green-600",
    },
    {
      label: "Total Paid",
      value: `৳${formatPrice(totalPaid)}`,
      icon: Wallet,
      iconBg: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Overview of your rental requests and payments.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="mt-1 text-2xl font-bold text-gray-900">
                  {stat.value}
                </p>
              </div>
              <div className={`rounded-lg p-2.5 ${stat.iconBg}`}>
                <stat.icon size={20} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Recent rental requests */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <h2 className="font-semibold text-gray-900">Recent Requests</h2>
            <Link
              href="/tenant/rentals"
              className="flex items-center gap-1 text-xs text-primary hover:underline"
            >
              View all <ArrowRight size={12} />
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentRentals.length === 0 && (
              <p className="py-6 text-center text-sm text-muted-foreground">
                No rental requests yet.
              </p>
            )}
            {recentRentals.map((rental: any) => (
              <div
                key={rental.id}
                className="flex items-center justify-between rounded-md border p-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-gray-900">
                    {rental.property?.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {rental.property?.city} · ৳{formatPrice(rental.property?.price)}/mo
                  </p>
                </div>
                <Badge
                  className={
                    statusStyles[rental.status] ?? "bg-gray-100 text-gray-700"
                  }
                >
                  {rental.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Payment summary */}
        <Card>
          <CardHeader>
            <h2 className="font-semibold text-gray-900">Payment Summary</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-md bg-muted/50 p-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp size={16} className="text-green-600" />
                Total Paid
              </div>
              <p className="text-sm font-semibold text-gray-900">
                ৳{formatPrice(totalPaid)}
              </p>
            </div>
            <div className="flex items-center justify-between rounded-md bg-muted/50 p-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={16} className="text-yellow-600" />
                Pending Payments
              </div>
              <p className="text-sm font-semibold text-gray-900">
                {pendingPayments}
              </p>
            </div>
            <Link
              href="/tenant/payments"
              className="flex items-center justify-center gap-1 text-xs text-primary hover:underline"
            >
              View payment history <ArrowRight size={12} />
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TenantDashboardPage;