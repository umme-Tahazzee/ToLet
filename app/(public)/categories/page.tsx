// app/(public)/categories/page.tsx
import Link from "next/link";
import { getCategories } from "../_actions/properties/getProperties";

const Categories = async () => {
  const result = await getCategories();
  const categories = result.data || [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">
        Browse by category
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Find the right property type for you
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat: { id: string; name: string }) => (
          <Link
            key={cat.id}
            href={`/properties?categoryId=${cat.id}`}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-primary/5"
          >
            <span className="text-sm font-semibold text-foreground">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;