const Book = ({ title, author, year, id }) => {
  return (
    <tr className="border-solid border-2 border-teal-600 text-stone-800 hover:bg-emerald-100 font-semibold">
      <td className="p-4 w-40">
        <a className="hover:text-teal-600" href={`/books/${id}`}>
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
    <div className="w-3/4 shadow-xl">
      <table className="table-auto w-full p-10 bg-emerald-50 border-solid border-8 border-teal-600 shadow-xl">
        <thead>
          <tr className="border-solid border-2 border-teal-600 text-white bg-teal-900">
            <th className="p-4">Title</th>
            <th>Author</th>
            <th>Published</th>
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
