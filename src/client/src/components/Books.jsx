import StarIcon from '@mui/icons-material/Star';

const Book = ({ title, author, year, rating, id }) => {

  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(<StarIcon key={i}/>);
    }
    return stars
  }

  return (
    <tr className="text-stone-800 hover:bg-emerald-100 font-semibold">
      <td className="p-4 w-40">
        <a className="hover:text-teal-600" href={`/books/${id}`}>
          {title}
        </a>
      </td>
      <td className="p-4 w-40">{author}</td>
      <td className="p-4 w-40">{year}</td>
      <td className="p-4 w-40 text-yellow-700">{renderStars(rating)}</td>
    </tr>
  );
};

export const Books = ({ books }) => {
  return (
    <div className="w-3/4 shadow-xl">
      <table className="table-auto w-full p-10 bg-emerald-50 border-solid border-8 border-teal-600 shadow-xl">
        <thead>
          <tr className="border-solid border-2 border-teal-600 text-white bg-teal-900">
            <th className="p-4">Title</th>
            <th>Author</th>
            <th>Published</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <Book
              key={b.id}
              title={b.title}
              author={b.author}
              year={b.year}
              rating={b.rating}
              id={b.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
