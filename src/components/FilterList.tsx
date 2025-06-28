import FilterButton from "./FilterButton";

export default function FilterList({
  selectedFilter,
  onFilterChange,
}: {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}) {
  const filters = [
    { icon: "material-symbols-light:border-all-rounded", name: "All" },
    { icon: "mdi:meat", name: "Main Course" },
    { icon: "mdi:cupcake", name: "Desserts" },
    { icon: "ic:round-lunch-dining", name: "Lunch" },
    { icon: "mdi:bread-slice", name: "Breakfast" },
    { icon: "tabler:soup-filled", name: "Soup" },
    { icon: "fluent:food-apple-20-filled", name: "Side Dish" },
  ];

  return (
    <div className="flex flex-row gap-4 w-full">
      {filters.map((filter, index) => (
        <FilterButton
          icon={filter.icon}
          name={filter.name}
          key={index}
          onFilterChange={onFilterChange}
          selectedFilter={selectedFilter}
        />
      ))}
    </div>
  );
}
