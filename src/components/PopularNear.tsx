import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import Link from "next/link";
import { useLocationStore } from "@/store/locationStore";

const PopularNear = () => {
  const location = useLocationStore((state) => state.location);
  const [reviewCard, setReviewCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPopularRestaurants = async () => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/restaurant`,
          {
            lat: location?.latitude,
            lon: location?.longitude,
            limit: 12,
          }
        );

        setReviewCard(res.data);
        setLoading(false);
      } catch (error) {
        console.log("error fetching popular restaurants: ", error);
        setLoading(false);
      }
    };

    if (location?.latitude && location?.longitude) {
      getPopularRestaurants();
    }
  }, [location]);

  return (
    <div className="px-4 sm:px-6 lg:px-26 mx-auto my-10 lg:my-10  ">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        Popular Near You
      </h2>

      {loading ? (
        <div className=" text-2xl text-red-500 flex justify-center items-center-safe h-30">
          Loading...
        </div>
      ) : reviewCard.length === 0 ? (
        <div>No popular restaurants found near your location.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {reviewCard.map((res) => (
            <Link href={`/restaurant/${res.fsq_id}`} key={res.fsq_id}>
              <ReviewCard
                image={res.images?.[0]?.url}
                name={res.name}
                type={res.categories?.[0]?.short_name || "Unknown"}
                isOpen={res.closed_bucket}
                distance={res.distance}
                address={res.location?.formatted_address}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularNear;
