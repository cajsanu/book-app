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
      <button className="" onClick={handleClick}>
        My own page
      </button>
    </div>
  );
};
