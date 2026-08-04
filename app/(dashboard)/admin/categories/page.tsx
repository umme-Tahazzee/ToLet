import getCategories from "../_actions/categoriesAction";
import CategoryGrid from "../_components/CategoryGrid";
import CreateCategoryDialog from "../_components/CreateCategoryDialog";

const CategoriesPage = async () => {
  const result = await getCategories();
  const categories = result?.data || [];

  return (
    <div className="space-y-4 p-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">All Categories</h1>
          <p className="text-sm text-muted-foreground">
            Manage property categories used across listings.
          </p>
        </div>
        <CreateCategoryDialog />
      </div>

      <CategoryGrid categories={categories} />
    </div>
  );
};

export default CategoriesPage;