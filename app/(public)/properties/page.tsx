import { Suspense } from "react";


type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function PropertiesPage({ searchParams }: Props) {
  const params = await searchParams;
//   const categoriesResult = await getCategories();
//   const categories = categoriesResult.data || [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">
          Explore properties
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Browse verified listings across Bangladesh
        </p>
      </div>

      {/* <PropertySearchBar categories={categories} /> */}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-20">
            {/* <PropertyFiltersPanel categories={categories} /> */}
          </div>
        </aside>

        {/* <Suspense key={JSON.stringify(params)} fallback={<PropertyGridSkeleton />}>
          <PropertyGrid searchParams={params} />
        </Suspense> */}
      </div>
    </div>
  );
}