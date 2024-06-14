import { useNavigate } from "react-router";

export const ToBooks = () => {
  const navigate = useNavigate();

  const handleClickBooks = () => {
    navigate("/books");
  };

  return (
    <button
      className="transition delay-150 duration-300 rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 hover:text-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
      onClick={handleClickBooks}
    >
      All books
    </button>
  );
};
