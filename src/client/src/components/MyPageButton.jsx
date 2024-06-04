import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MyPageButton = () => {
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const response = window.localStorage.getItem("user");
    if (response) {
      const user = JSON.parse(response);
      setUserId(user.userId);
    }
  }, []);

  const handleClick = () => {
    navigate(`/user/${userId}`);
  };

  return (
    <div>
      <button
        className="transition duration-150 rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200"
        onClick={handleClick}
      >
        My own page
      </button>
    </div>
  );
};
