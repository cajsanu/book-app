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

  const userReview = loggedInUser
    ? bookReviews.reviews.find((r) => r.userId === loggedInUser.userId)
    : null;
  const bookOfUser = userReview ? true : false;

  return (
    <div className="flex flex-col">
      <ToLoggedIn />
      <Notification />
      <div className="w-full bg-gradient-to-r from-teal-800 via-teal-600 to-teal-400 flex flex-row justify-center text-white">
        <div className="py-24 px-48 flex flex-col">
          <div className="flex flex-col">
            <h1 className="">{bookReviews.book.title}</h1>
            <p className="text-stone-900 font-semibold text-xl">
              By {bookReviews.book.author}
            </p>
          </div>

          <div className="p-20 flex flex-row justify-between flex-wrap ">
            <div>
              <div>
                <Reviews reviews={bookReviews.reviews} />
              </div>

              <div>
                {bookOfUser ? (
                  <div className="flex justify-content-left pt-6">
                    <DeleteButton
                      userId={loggedInUser.userId}
                      reviewId={userReview.id}
                    />
                  </div>
                ) : (
                  <div className="flex justify-content-left">
                    {!loggedInUser ? null : (
                      <AddToReadingList
                        userId={loggedInUser.userId}
                        bookId={bookReviews.book.id}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>

            <div>
              {bookOfUser ? (
                <div>
                  <UpdateComment
                    review={userReview}
                    onCommentUpdate={handleCommentUpdate}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
