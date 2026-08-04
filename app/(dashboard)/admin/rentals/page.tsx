import getAllRental from "../_actions/rentalAction";
import RentalTable from "../_components/RantalTable";


const RentalPage = async () => {
  const rental = await getAllRental();
  const rentals = rental?.data?.data ?? [];

  return (
    <div className="space-y-4 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Rental Requests</h1>
        <p className="text-sm text-muted-foreground">
          Review tenant requests, move-in dates, and payment status.
        </p>
      </div>
      <RentalTable rentals={rentals} />
    </div>
  );
};

export default RentalPage;