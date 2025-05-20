"use client";

import { useRestaurantStore } from "@/store/restaurantsStore";
import axios from "axios";
import { SearchIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import FilterBar from "./FilterBar";
import { useRouter } from "next/navigation";

type SearchProps = {
  variant?: "searchPage";
};

const Search: React.FC<SearchProps> = ({ variant }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [dietary, setDietary] = useState("");
  const [sortBy, setSortBy] = useState("");

  const setRestaurantData = useRestaurantStore(
    (state) => state.setRestaurantData
  );
  const router = useRouter();

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const buildQuery = () => {
    const baseQuery = searchQuery.trim();
    const filters = [cuisine, dietary].filter(Boolean);
    if (baseQuery && filters.length > 0) {
      return `${baseQuery}, ${filters.join(", ")}`;
    } else if (baseQuery) {
      return baseQuery;
    } else if (filters.length > 0) {
      return filters.join(", ");
    }
    return "";
  };

  const searchRestaurant = async () => {
    const query = buildQuery();
    if (!query) {
      return;
    }

    router.push("/search");

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/restaurant/search`,
        {
          params: {
            lat: 28.4595,
            lon: 77.0266,
            q: query,
            limit: 50,
            sort: sortBy || "relevance",
          },
        }
      );

      if (response.data.length <= 0) {
        console.log("no data found");
        return;
      }

      setRestaurantData(response.data);
    } catch (error) {
      console.log("error searching restaurants: ", error);
    }
  };

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      searchRestaurant();
    }, 500);
  }, [cuisine, dietary, sortBy]);

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      searchRestaurant();
    }, 700);
  }, [searchQuery]);

  return (
    <form
      className=" w-full "
      onSubmit={(e) => {
        e.preventDefault();
        searchRestaurant();
      }}
    >
      <div
        className={
          variant === "searchPage"
            ? "flex flex-row gap-5 mb-6"
            : "bg-white w-full shadow-xl flex gap-2 flex-col md:flex-row md:gap-5 items-center p-3  md:p-6 rounded-sm md:rounded-xl"
        }
      >
        <div className="relative flex-1 w-full ">
          <SearchIcon className="absolute left-3 md:left-4 top-3 md:top-4 z-10 h-6 w-6 text-gray-400" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
            placeholder="Search for restaurants"
            className={
              variant === "searchPage"
                ? " pl-10 md:pl-14 w-full h-12 md:h-14 rounded-sm md:rounded-md bg-white text-base dark:text-gray-700 border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
                : "pl-14 w-full h-12 md:h-14 rounded-sm md:rounded-md bg-white text-base dark:text-gray-700 border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
            }
          />
        </div>

        <button
          type="submit"
          className={
            variant === "searchPage"
              ? "bg-gradient-to-tr from-blue-500 to-green-400 text-white h-12 md:h-14 px-8 rounded-sm md:rounded-md shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200"
              : "bg-gradient-to-tr from-blue-500 to-green-400 text-white w-full md:w-auto h-12 md:h-14 px-7 rounded-sm md:rounded-md shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200"
          }
        >
          Search
        </button>
      </div>

      {variant === "searchPage" && (
        <FilterBar
          cuisine={cuisine}
          setCuisine={setCuisine}
          dietary={dietary}
          setDietary={setDietary}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      )}
    </form>
  );
};

export default Search;
