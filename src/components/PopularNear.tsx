import { useLocationStore } from "@/store/locationStore";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Link from "next/link";

const PopularNear = () => {
  const location = useLocationStore((state) => state.location);
  const [reviewCard, setReviewCard] = useState([]);

  if (location?.latitude === null || location?.longitude === null) {
    return <div>loading...</div>;
  }

  const getPopularRestaurants = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/restaurant", {
        lat: location?.latitude,
        lon: location?.longitude,
        limit: 12,
      });

      setReviewCard(res.data);
    } catch (error) {
      console.log("error fething popular restorants: ", error);
    }
  };

  useEffect(() => {
    getPopularRestaurants();
  }, [location]);

  return (
    <div className="px-4 sm:px-6 lg:px-26 mx-auto my-10 lg:my-10  ">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        Popular Near You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reviewCard?.map((res) => (
          <Link href={`/restaurant/${res.fsq_id}`} key={res.fsq_id}>
            <ReviewCard
              image={res.images?.[0]}
              name={res.name}
              type={res.categories?.[0]?.short_name || "Unknown"}
              isOpen={res.closed_bucket}
              distance={res.distance}
              address={res.location?.formatted_address}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularNear;
