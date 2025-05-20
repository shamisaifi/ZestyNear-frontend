"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ChevronLeft,
  Clock,
  MapPin,
  MessageSquare,
  PhoneIcon,
  Star,
} from "lucide-react";
import Link from "next/link";
import Menu from "./Menu";
import About from "./About";
import Photos from "./Photos";
import SelectTab from "./SelectTab";
import Review from "./Review";
import { useRouter } from "next/navigation";

const RestaurantDetails = ({ id }) => {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("About");

  const router = useRouter();

  const fetchRestaurant = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/restaurant/${id}`
      );
      setRestaurant(response.data);
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurant();
  }, [id]);

  const RenderTabContent = () => {
    switch (selectedTab) {
      case "About":
        return <About restaurant={restaurant?.restaurant} />;
      case "Photos":
        return <Photos images={restaurant.images} />;
      case "Menu":
        return <Menu />;
      case "Reviews":
        return <Review id={restaurant?.restaurant?.fsq_id} />;
      default:
        return <About restaurant={restaurant?.restaurant} />;
    }
  };

  const data = restaurant?.restaurant;
  const defaultImage = "default_thumb.png";

  return (
    <div className="w-full min-h-screen bg-gray-100 overflow-y-auto">
      {loading ? (
        <div className="text-center pt-20 text-lg font-medium">Loading...</div>
      ) : (
        <div className="flex flex-col items-center justify-start">
          <div className="w-full h-64 sm:h-80 md:h-110 relative">
            <button
              className="absolute top-4 left-4 sm:left-10 z-10"
              onClick={() => router.back()}
            >
              <ChevronLeft
                size={36}
                className="rounded-full p-2 bg-gray-400 text-white cursor-pointer"
              />
            </button>
            <img
              src={restaurant?.images[0]?.url || defaultImage}
              alt="Restaurant"
              className="w-full h-full object-cover object-center "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/70 rounded-b-2xl" />
          </div>

          <div className="w-full max-w-7xl -mt-20 px-4 sm:px-6 pb-10 z-10">
            <div className="bg-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-medium border py-0.5 px-2 rounded-full bg-green-50 border-green-200 text-green-700">
                  {data?.categories[0]?.short_name}
                </span>
                <span>
                  <Star
                    className="bg-green-100 border border-green-200 rounded-full p-1 w-8 h-8"
                    color="orange"
                  />
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <h1 className="text-2xl sm:text-3xl dark:text-black font-semibold">
                  {data?.name}
                </h1>
                <Link
                  href={""}
                  className="flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm"
                >
                  <MessageSquare size={18} />
                  <p>Write a Review</p>
                </Link>
              </div>

              <div className="  flex flex-wrap gap-y-2 md:flex-nowrap my-8 justify-between items-start mb-6">
                <div className="flex items-start gap-3 w-full sm:w-[48%]">
                  <MapPin className="bg-green-100 p-3 rounded-full w-12 h-12 text-green-700" />
                  <div className="flex flex-col leading-5">
                    <span className="text-sm font-semibold text-gray-700">
                      Location
                    </span>
                    <span className="text-sm text-gray-600">
                      {data?.location?.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 w-full sm:w-[48%]">
                  <Clock className="bg-blue-100 p-3 rounded-full w-12 h-12 text-blue-700" />
                  <div className="flex flex-col leading-5">
                    <span className="text-sm font-semibold text-gray-700">
                      Hours
                    </span>
                    <span className="text-sm text-gray-600">
                      {data?.closed_bucket === "LikelyOpen"
                        ? "Open now"
                        : "Closed"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 w-full sm:w-[48%]">
                  <PhoneIcon className="bg-pink-100 p-3 rounded-full w-12 h-12 text-pink-700" />
                  <div className="flex flex-col leading-5">
                    <span className="text-sm font-semibold text-gray-700">
                      Phone
                    </span>
                    <span className="text-sm text-gray-600">
                      (212) 555-1234
                    </span>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <SelectTab
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                />
              </div>

              <div className="my-8 dark:text-black ">
                <RenderTabContent />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;
