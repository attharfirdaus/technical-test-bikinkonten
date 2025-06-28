import Iconify from "./Iconify";

export default function FilterButton({
  icon,
  name,
  onFilterChange,
  selectedFilter,
}: {
  icon: string;
  name: string;
  onFilterChange: (filter: string) => void;
  selectedFilter: string;
}) {
  return (
    <div
      onClick={() => onFilterChange(name)}
      className={`flex flex-row gap-1 px-4 py-2 border-2 border-amber-500 ${
        selectedFilter === name ? "bg-amber-500" : "bg-amber-200"
      } rounded-lg items-center justify-center cursor-pointer transition-all hover:scale-105 duration-200 ease-in-out`}
    >
      <Iconify
        icon={icon}
        size="text-[20px]"
        color={selectedFilter === name ? "white" : "oklch(76.9% 0.188 70.08)"}
      />
      <p
        className={`text-xs ${
          selectedFilter === name ? "text-white" : "text-black"
        } font-medium`}
      >
        {name}
      </p>
    </div>
  );
}
