import { Users, Building2, ClipboardList, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllUsers } from "./_actions/userAction";
import getAllProperty from "./_actions/propertiesAction";
import getAllRental from "./_actions/rentalAction";
import StatCard from "./_components/StateCard";
import RecentRentals from "./_components/RecentRental";


const AdminDashboardPage = async () => {
  const [usersRes, propertiesRes, rentalsRes] = await Promise.all([
    getAllUsers(),
    getAllProperty(),
    getAllRental(),
  ]);

  const totalUsers = usersRes?.data?.meta?.total ?? 0;
  const totalProperties = propertiesRes?.data?.meta?.total ?? 0;
  const rentals = rentalsRes?.data?.data ?? [];
  const totalRentals = rentalsRes?.data?.meta?.total ?? 0;

  const totalRevenue = rentals.reduce((sum: number, r: any) => {
    return r.payment?.status === "PAID" ? sum + Number(r.payment.amount) : sum;
  }, 0);

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Overview of your platform's activity.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total Users"
          value={totalUsers}
          icon={Users}
          iconColor="text-blue-600"
          iconBg="bg-blue-100"
        />
        <StatCard
          label="Total Properties"
          value={totalProperties}
          icon={Building2}
          iconColor="text-purple-600"
          iconBg="bg-purple-100"
        />
        <StatCard
          label="Rental Requests"
          value={totalRentals}
          icon={ClipboardList}
          iconColor="text-orange-600"
          iconBg="bg-orange-100"
        />
        <StatCard
          label="Total Revenue"
          value={`৳${new Intl.NumberFormat("en-BD").format(totalRevenue)}`}
          icon={Wallet}
          iconColor="text-green-600"
          iconBg="bg-green-100"
        />
      </div>

      {/* Recent activity */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Recent Rental Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentRentals rentals={rentals} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Quick Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Pending Requests</span>
              <span className="font-medium">
                {rentals.filter((r: any) => r.status === "PENDING").length}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Paid Payments</span>
              <span className="font-medium">
                {rentals.filter((r: any) => r.payment?.status === "PAID").length}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Pending Payments</span>
              <span className="font-medium">
                {rentals.filter((r: any) => r.payment?.status === "PENDING").length}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboardPage;