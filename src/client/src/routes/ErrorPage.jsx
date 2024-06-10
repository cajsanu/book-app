import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>404 not found</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ErrorPage;
