import { Landmark, Ruler, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ReviewCardProps {
  image?: string;
  name: string;
  type: string;
  distance: number;
  isOpen: boolean;
  address: string;
}

const ReviewCard = ({
  image,
  name,
  type,
  distance,
  isOpen,
  address,
}: ReviewCardProps) => {
  const defaultImage = "default_thumb.png";
  const formattedDistance = (
    Number.parseInt(distance.toString()) / 1000
  ).toFixed(2);

  return (
    <Card className="w-full max-w-full sm:max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="relative">
        <div className="relative aspect-video w-full">
          <img
            src={image || defaultImage}
            alt={name}
            className="h-full w-full object-cover rounded-t-xl"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> */}

          <div className="absolute right-3 top-3">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                isOpen
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                  : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
              }`}
            >
              {isOpen ? "Open Now" : "Closed"}
            </span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold leading-tight tracking-tight text-gray-900 dark:text-white">
          {name}
        </h3>

        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2">
            <Landmark className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {type}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Ruler className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {formattedDistance} km
            </span>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {address}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ReviewCard;
