import { create } from "zustand";

export interface Restaurant {
  fsq_id: string;
  name: string;
  distance: number;
  closed_bucket: boolean;
  images: { url: string }[];
  categories: { short_name: string }[];
  location: {
    formatted_address: string;
  };
}

interface RestaurantState {
  restaurantData: Restaurant[];
  setRestaurantData: (data: Restaurant[]) => void;
}

export const useRestaurantStore = create<RestaurantState>((set) => ({
  restaurantData: [],
  setRestaurantData: (data) => set({ restaurantData: data }),
}));
