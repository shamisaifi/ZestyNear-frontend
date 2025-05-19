import { Funnel } from "lucide-react";
import React from "react";
import { DropdownMenuCheckboxes } from "./DropDownMenuCheckbox";
import {
  cuisineOptions,
  dietaryOptions,
  sortByOptions,
} from "@/constants/filterOptions";

const FilterBar = ({
  cuisine,
  setCuisine,
  dietary,
  setDietary,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Left Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm">
          <span className="flex items-center gap-1 font-medium text-gray-700 dark:text-gray-200">
            <Funnel className="h-4 w-4" /> Filters:
          </span>

          <DropdownMenuCheckboxes
            heading={cuisineOptions.heading}
            options={cuisineOptions.options}
            selected={cuisine}
            setSelected={setCuisine}
          />

          <DropdownMenuCheckboxes
            heading={dietaryOptions.heading}
            options={dietaryOptions.options}
            selected={dietary}
            setSelected={setDietary}
          />
        </div>

        {/* Right Sort Option */}
        <div className="flex items-center justify-start sm:justify-end">
          <DropdownMenuCheckboxes
            heading={sortByOptions.heading}
            options={sortByOptions.options}
            selected={sortBy}
            setSelected={setSortBy}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
