import getAllProperty from "../_actions/propertiesAction";
import PropertyGrid from "../_components/PropertyGrid";


const PropertiesPage = async () => {
  const property = await getAllProperty();
  const properties = property?.data?.data ?? [];

  return (
    <div className="space-y-4 p-6">
      <div>
        <h1 className="text-2xl font-normal  tracking-tight">Get All Properties</h1>
        <p className="text-sm text-muted-foreground">
          Get all listed properties across the platform.
        </p>
      </div>
      <PropertyGrid properties={properties} />
    </div>
  );
};

export default PropertiesPage;