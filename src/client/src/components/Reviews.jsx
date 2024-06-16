import { useEffect, useState } from "react";
import userRequests from "../requests/users";

export const Reviews = ({ reviews }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
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
      const response = window.localStorage.getItem("user");
      const loggedUser = JSON.parse(response);
      if (!loggedUser) {
        setLoggedInUser(null);
      }
      if (loggedUser) {
        setLoggedInUser(loggedUser);
      }
    };
    getAverageRating();
  }, []);

  return (
    <div className="">
      {avRating ? <p className="py-10 font-semibold text-white flex justify-content-left">
        Average rating for this book is {avRating.toFixed(1)}
      </p> : null}
      {reviews.map((review) => (
        <div className="text-white" key={review.id}>
          {loggedInUser ? (
            loggedInUser.userId === review.user.id ? (
              <p className="flex justify-content-left pb-1">Comment by you</p>
            ) : (
              <p className="flex justify-content-left">Comment by {review.user.name}</p>
            )
          ) : (
            <p className="flex justify-content-left">Comment by {review.user.name}</p>
          )}

          <p className="transition duration-150 place-content-center w-96 p-5 rounded-md border-double border-4 border-teal-600 hover:border-emerald-300 bg-white text-sm text-black">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};
