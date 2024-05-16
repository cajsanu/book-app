const Book = ({ title, author }) => {
  return (
    <div>
        <ul>
            <li>{title} by {author}</li>
        </ul>
    </div>
  );
};

export const Books = ({ books }) => {
  return (
    <div>
      {books.map((b) => (
        <Book key={b.id} title={b.title} author={b.author} />
      ))}
    </div>
  );
};
