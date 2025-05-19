import { restaurantDetailOptions } from "@/constants/filterOptions";
import React from "react";

const SelectTab = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 w-full rounded-lg">
      {restaurantDetailOptions.map((option, index) => (
        <button
          className={`flex justify-center items-center py-2 m-0.5 w-full cursor-pointer text-gray-500 font-medium rounded-sm hover:text-black transition-colors duration-200 ${
            selectedTab === option ? "bg-white text-black" : ""
          }`}
          key={index}
          onClick={() => setSelectedTab(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SelectTab;
