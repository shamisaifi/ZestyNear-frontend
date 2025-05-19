"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { trendingCuisines } from "@/constants/filterOptions";

const cuisines = trendingCuisines;

const TrendingCuisines = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 md:mx-10 lg:mx-20 ">
      <h1 className="mb-7 text-2xl text-blue-700 font-bold text-left">
        Trending Cuisines
      </h1>

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="flex gap-2 md:gap-4">
            {cuisines.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <Link href="/search">
                  <div
                    className={`flex flex-col items-center justify-center py-5 space-y-2 rounded-xl transition-all duration-300 ${item.cardColor}`}
                  >
                    <item.icon size={44} className={`${item.iconColor}`} />
                    <span
                      className={`text-sm font-medium ${item.iconColor} dark:${item.iconColor}`}
                    >
                      {item.name}
                    </span>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingCuisines;
