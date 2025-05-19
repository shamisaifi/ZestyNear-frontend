import {
  Pizza,
  Drumstick,
  Salad,
  IceCream,
  Coffee,
  CupSoda,
  CakeSlice,
  Fish,
  Soup,
  UtensilsCrossed,
} from "lucide-react";

export const cuisineOptions = {
  heading: "Cuisine",
  options: ["North Indian", "South Indian", "Chinese", "Italian"],
};

export const dietaryOptions = {
  heading: "Dietary",
  options: ["Vegetarian", "Vegan", "Nonveg", "Halal"],
};

export const sortByOptions = {
  heading: "Sort",
  options: ["rating", "distance"],
};

export const trendingCuisines = [
  {
    name: "Pizza",
    icon: Pizza,
    iconColor: "text-red-500",
    cardColor: "bg-red-100",
  },
  {
    name: "Chicken",
    icon: Drumstick,
    iconColor: "text-orange-500",
    cardColor: "bg-orange-100",
  },
  {
    name: "Salad",
    icon: Salad,
    iconColor: "text-green-500",
    cardColor: "bg-green-100",
  },
  {
    name: "Dessert",
    icon: CakeSlice,
    iconColor: "text-pink-500",
    cardColor: "bg-pink-100",
  },
  {
    name: "Ice Cream",
    icon: IceCream,
    iconColor: "text-purple-500",
    cardColor: "bg-purple-100",
  },
  {
    name: "Coffee",
    icon: Coffee,
    iconColor: "text-amber-600",
    cardColor: "bg-amber-100",
  },
  {
    name: "Drinks",
    icon: CupSoda,
    iconColor: "text-cyan-500",
    cardColor: "bg-cyan-100",
  },
  {
    name: "Seafood",
    icon: Fish,
    iconColor: "text-blue-500",
    cardColor: "bg-blue-100",
  },
  {
    name: "Soups",
    icon: Soup,
    iconColor: "text-teal-500",
    cardColor: "bg-teal-100",
  },
  {
    name: "Multi-cuisine",
    icon: UtensilsCrossed,
    iconColor: "text-gray-700",
    cardColor: "bg-gray-100",
  },
];

export const restaurantDetailOptions = ["About", "Menu", "Reviews", "Photos"];
