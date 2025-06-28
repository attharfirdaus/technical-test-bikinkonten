"use client";

import RecipeList from "@/components/RecipeList";
import TopBar from "@/components/TopBar";
import { Recipe } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

async function fetchRecipe(): Promise<Recipe[]> {
  const response = await axios.get(
    "https://api.sampleapis.com/recipes/recipes"
  );
  return response.data;
}

export default function Home() {
  const [searchRecipe, setSearchRecipe] = useState('')
  const { data, error, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchRecipe,
  });

  const searchedData = data?.filter((filter) => filter.title.toLowerCase().includes(searchRecipe.toLowerCase())) as Recipe[]

  if (error)
    return <div className="p-10 text-red-500">Failed to load recipes</div>;
  if (!data || data.length === 0)
    return <div className="p-10">No recipes found</div>;

  return (
    <div className="flex flex-col gap-5">
      <TopBar searchRecipe={searchRecipe} setSearchRecipe={setSearchRecipe} />
      <div className="w-full">
        {isLoading ? (
          <div
            role="status"
            className="animate-pulse grid grid-cols-3 gap-10 justify-center w-full"
          >
            <div className="rounded-lg h-[380px] bg-gray-500"></div>
            <div className="rounded-lg h-[380px] bg-gray-500"></div>
            <div className="rounded-lg h-[380px] bg-gray-500"></div>
          </div>
        ) : (
          <RecipeList recipes={searchedData} />
        )}
      </div>
    </div>
  );
}
