"use client";

import { useRestaurantStore } from "@/store/restaurantsStore";
import React from "react";
import ReviewCard from "./ReviewCard";
import Link from "next/link";

const Restaurants = () => {
  const restaurantData = useRestaurantStore((state) => state.restaurantData);

  return (
    <div className="grid gap-6 my-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {restaurantData?.map((restaurant) => (
        <Link
          href={`/restaurant/${restaurant?.fsq_id}`}
          key={restaurant?.fsq_id}
        >
          <ReviewCard
            image={restaurant?.images?.[0]}
            name={restaurant?.name}
            type={restaurant?.categories?.[0]?.short_name || "Unknown"}
            isOpen={restaurant?.closed_bucket}
            distance={`${restaurant?.distance} meters`}
            address={restaurant?.location?.formatted_address}
          />
        </Link>
      ))}
    </div>
  );
};

export default Restaurants;
