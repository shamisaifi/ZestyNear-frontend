import React from "react";
import Map from "./Map";

const About = ({ restaurant }) => {
  return (
    <div className="px-1 sm:px-2 md:px-0">
      <h1 className="text-xl sm:text-2xl font-semibold mb-3">About</h1>
      <p className="mt-2 text-gray-600 leading-relaxed text-sm sm:text-base">
        {restaurant?.name} offers authentic{" "}
        {restaurant?.categories[0]?.short_name} cuisine in a warm, inviting
        atmosphere. Our menu features hand-made pasta, wood-fired pizzas, and a
        selection of fine Italian wines. We source the freshest ingredients to
        create traditional dishes with a modern twist.
      </p>

      <div className="mt-6">
        <Map restaurant={restaurant} />
      </div>
    </div>
  );
};

export default About;
