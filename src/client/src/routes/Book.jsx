import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import reviewRequests from "../requests/reviews";
import {
  DeleteButton,
  Notification,
  AddToReadingList,
  ToLoggedIn,
  UpdateComment,
  Reviews,
} from "../components";

export const Book = () => {
  const [bookReviews, setBookReviews] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getBookAndUser = async () => {
      const bookReviews = await reviewRequests.getById(id);
      setBookReviews(bookReviews);
      const response = window.localStorage.getItem("user");
      const loggedUser = JSON.parse(response);
      if (!loggedUser) {
        setLoggedInUser(null);
      }
      if (loggedUser) {
        setLoggedInUser(loggedUser);
      }
    };
    getBookAndUser();
  }, []);

  const handleCommentUpdate = async () => {
    try {
      const updatedComment = await reviewRequests.getById(id);
      setBookReviews(updatedComment);
    } catch (err) {
      console.error(err);
    }
  };

  if (!bookReviews.book) {
    return <div>Unable to find book</div>;
  }

  if (!loggedInUser) {
    return <div>no logged in user</div>;
  }

  const userReview = bookReviews.reviews.find(
    (r) => r.userId === loggedInUser.userId
  );
  const bookOfUser = userReview ? true : false;

  return (
    <div>
      <Notification />
      <ToLoggedIn />
      <div className="bg-gradient-to-r from-teal-800 via-teal-600 to-teal-400 flex flex-row">
        <div className="py-24 ps-48 flex flex-col items-start ">
          <h1 className="pt-10">{bookReviews.book.title}</h1>
          <p className="text-stone-900 font-semibold text-xl">
            By {bookReviews.book.author}
          </p>

          <Reviews reviews={bookReviews.reviews} loggedInUser={loggedInUser} />

          <a
            className="pt-10 hover:text-teal-200 underline text-white"
            target="_blank"
            rel="noreferrer"
            href={bookReviews.book.url}
          >
            See on the internet
          </a>

          {bookOfUser ? (
            <div className="py-10">
              <DeleteButton
                userId={loggedInUser.userId}
                reviewId={userReview.id}
              />
            </div>
          ) : (
            <div className="pt-10">
              <AddToReadingList
                userId={loggedInUser.userId}
                bookId={bookReviews.book.id}
              />
            </div>
          )}
        </div>
        {bookOfUser ? (
          <div className="ps-36 pt-80 pb-32">
            <UpdateComment
              review={userReview}
              onCommentUpdate={handleCommentUpdate}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
