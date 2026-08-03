"use client";

import { useActionState } from "react";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchAction, SearchState } from "../../_actions/properties/searchAction";


const initialState: SearchState = { success: false, message: "" };

export function SearchForm({ defaultValue }: { defaultValue?: string }) {
  const [, formAction, isPending] = useActionState(searchAction, initialState);

  return (
    <form action={formAction} className="relative flex-1">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        name="searchTerm"
        placeholder="Search by title, city, address..."
        defaultValue={defaultValue}
        className="pl-9 pr-10"
      />
      <Button
        type="submit"
        size="icon-sm"
        variant="ghost"
        className="absolute right-1.5 top-1/2 -translate-y-1/2"
        disabled={isPending}
      >
        {isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Search className="h-4 w-4" />
        )}
      </Button>
    </form>
  );
}