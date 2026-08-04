import RentalCard from "./RentalCard";

type TRental = Parameters<typeof RentalCard>[0]["rental"];

const RentalList = ({ rentals }: { rentals: TRental[] }) => {
  if (rentals.length === 0) {
    return (
      <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-md border text-center text-muted-foreground">
        <p>You haven't submitted any rental requests yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {rentals.map((rental) => (
        <RentalCard key={rental.id} rental={rental} />
      ))}
    </div>
  );
};

export default RentalList;