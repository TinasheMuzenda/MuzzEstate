import "../styles/NotFound.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="error-page">
      <h1 className="error-heading">404</h1>
      <Link to="/" className="home-link">
        <p>Go to Homepage</p>
        <span className="arrow">
          <FaArrowRight />
        </span>
      </Link>
    </main>
  );
};

export default NotFound;
