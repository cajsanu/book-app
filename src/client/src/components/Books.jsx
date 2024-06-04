const Book = ({ title, author, year, id }) => {
  return (
    <tr className="border-solid border-2 border-white text-white">
      <td className="p-4 w-40">
        <a className="hover:text-teal-200" href={`/books/${id}`}>
          {title}
        </a>
      </td>
      <td className="p-4 w-40">{author}</td>
      <td className="p-4 w-40">{year}</td>
    </tr>
  );
};

export const Books = ({ books }) => {
  return (
    <div className="w-3/4 bg-gradient-to-r from-teal-600 to-teal-600">
      <table className="table-fixed w-full p-10">
        <thead>
          <tr className="border-solid border-2 border-white text-teal-900 bg-teal-100">
            <th className="p-4">Title</th>
            <th>Author</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <Book
              key={b.id}
              title={b.title}
              author={b.author}
              year={b.year}
              id={b.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
