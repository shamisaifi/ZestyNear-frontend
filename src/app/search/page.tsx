import FilterBar from "@/components/FilterBar";
import Restaurants from "@/components/Restaurants";
import Search from "@/components/Search";

export default function SearchPage() {
  return (
    <div className="w-full mt-16 bg-gray-50 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-5 dark:bg-gray-900 dark:text-black">
      <Search variant="searchPage" />
      <Restaurants />
    </div>
  );
}
