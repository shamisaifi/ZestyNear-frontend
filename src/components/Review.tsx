import axios from "axios";
import React, { useEffect, useState } from "react";

const Review = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/restaurant/${id}/tips`
      );
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching restaurant reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [id]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Customer Reviews
      </h2>

      {loading ? (
        <div className="text-center text-lg font-medium">Loading...</div>
      ) : reviews.length === 0 ? (
        <div className="text-center text-gray-500">No reviews available.</div>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-full max-w-2xl bg-white rounded-xl shadow-md p-4"
            >
              <p className="text-gray-700 text-base mb-2">{review?.text}</p>
              <p className="text-sm text-gray-400 text-right">
                {new Date(review.created_At).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
