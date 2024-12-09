import { useState } from "react";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [activeTab, setActiveTab] = useState();
  const handleClick = (number) => {
    setActiveTab(number);
  };
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg left">
            <ul className="footer-links">
              <li>
                <NavLink
                  to="/listings"
                  onClick={() => {
                    handleClick(2);
                    setMenuOpen(false);
                  }}
                  className={` ${activeTab == 2 ? "active" : ""} `}
                >
                  Listings
                </NavLink>
              </li>
              <p className="removeMobile">||</p>
              <li>
                <NavLink
                  to="/our-story"
                  onClick={() => {
                    handleClick(6);
                    setMenuOpen(false);
                  }}
                  className={` ${activeTab == 6 ? "active" : ""} `}
                >
                  Our Story
                </NavLink>
              </li>
              <p className="removeMobile">||</p>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => {
                    handleClick(4);
                    setMenuOpen(false);
                  }}
                  className={` ${activeTab == 4 ? "active" : ""} `}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg right">
            <li>
              <NavLink
                to="/terms-of-service"
                onClick={() => {
                  handleClick(7);
                  setMenuOpen(false);
                }}
                className={` ${activeTab == 7 ? "active" : ""} `}
              >
                Terms of Service
              </NavLink>
            </li>
            <p className="removeMobile">||</p>
            <p>Copyright 2025 Tinashe</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
