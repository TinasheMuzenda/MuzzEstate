import "../styles/Navbar.css";
import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [activeTab, setActiveTab] = useState();
  const handleClick = (number) => {
    setActiveTab(number);
  };

  return (
    <nav id="navbar" className="bannerNav">
      <div className="navbar container" ref={menuRef}>
        <div className="header">
          <Link
            to="/"
            className="logo"
            onClick={() => {
              handleClick(1);
              setMenuOpen(false);
            }}
          >
            <h1>
              <span>Muzz</span>Estate
            </h1>
          </Link>
          <div
            className="menu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </div>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                handleClick(1);
                setMenuOpen(false);
              }}
              className={` ${activeTab == 1 ? "active" : ""} `}
            >
              Home
            </NavLink>
          </li>
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
          <li>
            <NavLink
              to="/contact"
              onClick={() => {
                handleClick(4);
                setMenuOpen(false);
              }}
              className={` ${activeTab == 4 ? "active" : ""} `}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              onClick={() => {
                handleClick(5);
                setMenuOpen(false);
              }}
              className={` ${activeTab == 5 ? "active" : ""} `}
            >
              Sign In
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
