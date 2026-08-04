import { getMyRentals } from "../_actions/rentalAction";
import RentalList from "../_components/home/RentalList";


const TenantRentalsPage = async () => {
  const result = await getMyRentals();
  const rentals = result?.data ?? [];
  // console.log("rental-request", result);
  

  return (
    <div className="space-y-4 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Rental Requests</h1>
        <p className="text-sm text-muted-foreground">
          Track the status of properties you've applied for.
        </p>
      </div>

      <RentalList rentals={rentals} />
    </div>
  );
};

export default TenantRentalsPage;