"use client";

import { Recipe } from "@/types";
import RecipeCard from "./RecipeCard";
import Link from "next/link";
import FilterList from "./FilterList";
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

export default function RecipeList({ recipes }: { recipes: Recipe[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedFilter = searchParams.get("filter") || "All";

  const setSelectedFilter = useCallback(
    (filter: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (filter === "All") {
        params.delete("filter");
      } else {
        params.set("filter", filter);
      }

      router.push(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  const filterRecipes = useMemo(() => {
    return selectedFilter === "All"
      ? recipes
      : recipes.filter((recipe) =>
          recipe.course?.toLowerCase().includes(selectedFilter.toLowerCase())
        );
  }, [recipes, selectedFilter]);

  return (
    <div className="flex flex-col gap-4">
      <FilterList
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      <div className="grid grid-cols-3 gap-10 justify-center w-full">
        {filterRecipes.map((recipe) => (
          <Link
            href={recipe.url}
            target="_blank"
            key={recipe.id}
            className="transition-all hover:scale-103 ease-in-out duration-200"
          >
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
}
