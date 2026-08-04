import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tag } from "lucide-react";

type TCategory = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
};

const CategoryGrid = ({ categories }: { categories: TCategory[] }) => {
  if (categories.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-md border text-muted-foreground">
        No categories found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Card key={category.id} className="transition-shadow hover:shadow-md">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Tag size={16} />
            </div>
            <h3 className="font-semibold text-gray-900">{category.name}</h3>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {category.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CategoryGrid;