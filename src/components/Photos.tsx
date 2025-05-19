import React from "react";

const Photos = ({ images }) => {
  return (
    <div className="w-full mt-6">
      {images.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-80 bg-gray-200 rounded-2xl overflow-hidden"
            >
              <img
                src={image.url}
                alt={`Restaurant Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-40 bg-gray-100 rounded-2xl">
          <p className="text-gray-500">No images available</p>
        </div>
      )}
    </div>
  );
};

export default Photos;
