import StarIcon from "@mui/icons-material/Star";

const Book = ({ title, author, year, rating, id }) => {
  const renderStars = (rating) => {
    if (rating === null || rating === undefined) return null

    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<StarIcon key={i} />);
    }
    return stars;
  };

  return (
    <tr className="text-stone-800 hover:bg-teal-700 hover:text-white font-medium text-start shadow-sm">
      <td className="p-4 ps-20 w-40 ">
        <a
          className="flex justify-start hover:text-teal-300"
          href={`/books/${id}`}
        >
          {title}
        </a>
      </td>
      <td className="p-4 w-40 ps-20">
        <p className="flex justify-start">{author}</p>
      </td>
      <td className="p-4 w-40 ps-20">{year}</td>
      <td className="p-4 w-40 ps-20 text-yellow-600">{renderStars(rating)}</td>
    </tr>
  );
};

export const Books = ({ books }) => {
  return (
    <div className="w-5/6 shadow-xl">
      <table className="w-full p-10 bg-emerald-50">
        <thead>
          <tr className="text-white bg-teal-900 shadow-sm">
            <th className="text-start p-4 ps-20">Title</th>
            <th className="text-start ps-20">Author</th>
            <th className="text-start ps-20">Published</th>
            <th className="text-start ps-20">Rating</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            const ratings = book.reviewed_books?.map((review) => review.rating);
            const average =
              ratings?.length > 0
                ? ratings?.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                  ) / ratings?.length
                : null;

            return (
              <Book
                key={book.id}
                title={book.title}
                author={book.author}
                year={book.year}
                rating={book.read_books_list ? book.read_books_list.rating : average}
                id={book.id}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  );
};
