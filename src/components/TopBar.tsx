import Iconify from "./Iconify";

export default function TopBar({
  searchRecipe,
  setSearchRecipe,
}: {
  searchRecipe: string;
  setSearchRecipe: (e: any) => void;
}) {
  return (
    <div className="w-full h-fit px-6 py-3 bg-amber-500 flex flex-row items-center justify-between top-5 sticky rounded-full z-[1000]">
      <p className="text-white font-semibold">
        Muhammad Attharsyah Firdaus Sultan
      </p>
      <div className="flex flex-row border-2 border-white rounded-full items-center p-1 w-fit">
        <Iconify
          icon="flowbite:search-outline"
          size="text-[24px]"
          color="white"
        />
        <input
          value={searchRecipe}
          onChange={(e) => setSearchRecipe(e.target.value)}
          type="text"
          className="px-2 text-white focus:outline-none placeholder-gray-200"
          placeholder="Search here..."
        />
      </div>
    </div>
  );
}
