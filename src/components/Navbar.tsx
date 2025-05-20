"use client";
import React from "react";
import { Utensils, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const isVerified = false;
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-0 bg-white dark:bg-gray-800 z-50 w-full border-b shadow-sm px-4 sm:px-6 py-3 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <Utensils className="h-6 w-6 text-green-600 dark:text-green-400" />
        <span className="text-lg font-bold">ZestyNear</span>
      </Link>

      <div className="flex items-center gap-3 sm:gap-5">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>

        {isVerified ? (
          <div className="w-8 h-8 rounded-full border"></div>
        ) : (
          <button className="px-4 py-1.5 text-sm bg-gradient-to-tr from-blue-400 to-green-300 text-white rounded-full hover:scale-95 transition-all shadow-md">
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
