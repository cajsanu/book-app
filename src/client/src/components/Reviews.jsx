import { useEffect, useState } from "react";
import userRequests from "../requests/users";

export const Reviews = ({ reviews, loggedInUser }) => {
  const [avRating, setAvRating] = useState(null);

  useEffect(() => {
    const getAverageRating = () => {
      const ratings = reviews.map((r) => r.rating);
      const average =
        ratings.length > 0
          ? ratings.reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0
            ) / ratings.length
          : 0;
      setAvRating(average);
    };
    getAverageRating();
  }, []);

  return (
    <div className="pt-10">
      <p className="p-10 font-semibold">
        Average rating for this book is {avRating}
      </p>
      {reviews.map((review) => (
        <div className="pb-8" key={review.id}>
          {loggedInUser.userId === review.user.id ? (
            <p>Comment by you</p>
          ) : (
            <p>Comment by {review.user.name}</p>
          )}

          <p className="transition duration-150 place-content-center w-96 p-5 rounded-md border-double border-4 border-teal-600 hover:border-emerald-300 bg-white text-sm text-black">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};
