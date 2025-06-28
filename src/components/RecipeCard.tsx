import { Recipe } from "@/types";
import Iconify from "./Iconify";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="flex flex-col rounded-lg h-[380px]">
      <div
        className="h-[320px] w-full bg-no-repeat bg-cover rounded-t-lg bg-center"
        style={{ backgroundImage: recipe.url ? `url(${recipe.photoUrl})` : 'url(/images/no-image.jpg)'}}
      >
        <div className="flex flex-col justify-between h-full w-full bg-linear-to-t from-black to-transparent p-4">
          <div className="flex flex-row gap-2 w-full items-center justify-start">
            {recipe.calories && (
              <div className="flex flex-row rounded-full bg-white items-center justify-center px-2 py-1 gap-1">
                <Iconify
                  icon="emojione-monotone:fork-and-knife-with-plate"
                  size="text-[20]"
                  color="#F79009"
                />
                <p className="text-black text-xs font-medium">
                  {recipe.calories.toString()} cal
                </p>
              </div>
            )}
            <div className="flex flex-row rounded-full bg-white items-center justify-center px-2 py-1 gap-1">
              <Iconify icon="picon:serving" size="text-[20]" color="#F79009" />
              <p className="text-black text-xs font-medium">
                {recipe.servings.toString()} people
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            {recipe.course && (
              <div className="bg-amber-500 rounded-full px-2 py-1 w-fit">
                <p className="text-xs text-white font-medium">
                  {recipe.course}
                </p>
              </div>
            )}
            <p className="text-xl font-semibold text-white line-clamp-2 transition-all hover:underline">
              {recipe.title}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-200 h-[calc(380px-320px)] rounded-b-lg flex flex-row justify-between items-center px-4">
        <div className="flex flex-row gap-2 items-center justify-center">
          <div className="flex flex-row">
            <Iconify
              icon="material-symbols:star-rate-rounded"
              size="text-[20px]"
              color="#FFD32D"
            />
            <Iconify
              icon="material-symbols:star-rate-rounded"
              size="text-[20px]"
              color="#FFD32D"
            />
            <Iconify
              icon="material-symbols:star-rate-rounded"
              size="text-[20px]"
              color="#FFD32D"
            />
            <Iconify
              icon="material-symbols:star-rate-rounded"
              size="text-[20px]"
              color="#FFD32D"
            />
            <Iconify
              icon="material-symbols:star-half-rounded"
              size="text-[20px]"
              color="#FFD32D"
            />
          </div>
          <p className="text-black font-medium text-md">4.5</p>
          <p className="text-gray-500 font-normal text-xs">(56 reviews)</p>
        </div>
        <Iconify icon="tabler:bookmark" size="text-[30px]" color="#F79009" />
      </div>
    </div>
  );
}
