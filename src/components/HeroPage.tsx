"use client";

import React from "react";
import Search from "./Search";

const HeroPage = () => {
  return (
    <div className="relative mt-16 w-full py-16 px-4 sm:px-6 flex items-center justify-center bg-gradient-to-br from-[#f4f9f4] via-[#eaf7f0] to-[#fdfcf9] overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#d0f0e0] rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[100px] right-[50px] w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] bg-[#b2e4f6] rounded-full blur-2xl opacity-40"></div>
      <div className="absolute top-[30%] left-[30%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-gradient-to-tr from-[#daf7ef] to-[#ecfaff] rounded-full blur-[100px] opacity-25"></div>
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>

      <div className="relative text-center max-w-2xl w-full mx-auto">
        <h1 className="text-[2rem] sm:text-[3.6rem] leading-tight font-bold text-blue-600">
          Discover Amazing Places to Eat
        </h1>
        <p className="text-md sm:text-lg text-gray-600 dark:text-gray-500 mt-4 mb-6">
          Find the perfect restaurant for any occasion, cuisine, or mood. Read
          reviews, browse menus, and make reservations.
        </p>

        <div className="w-full flex justify-center">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
