import { create } from "zustand";

type Restaurant = {
  id: string;
    name: string;
    images: string[],
  
};

interface RestaurantStore {
  restaurantData: Restaurant[];
  setRestaurantData: (data: Restaurant[]) => void;
}

export const useRestaurantStore = create<RestaurantStore>((set) => ({
  restaurantData: [],
  setRestaurantData: (data) => set({ restaurantData: data }),
}));
