"use client"

import HeroPage from "@/components/HeroPage";
import PopularNear from "@/components/PopularNear";
import TrendingCuisines from "@/components/TrendingCuisines";
import { useLocationStore } from "@/store/locationStore";
import { useEffect } from "react";

export default function Home() {
  const setLocation = useLocationStore((state) => state.setLocation)

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log("location error: ", error);
        }
      );
    }
  }, []);

  return (
    <div>
      <HeroPage />
      <TrendingCuisines />
      <PopularNear />
    </div>
  );
}
