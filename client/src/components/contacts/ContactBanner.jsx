import "../../styles/ContactBanner.css";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <section className="contact-banner">
      <h1>Contact Us</h1>
      <span className="links">
        <Link to="/">Home</Link> / <Link to="/contact">Contact</Link>
      </span>
    </section>
  );
};

export default ContactBanner;
