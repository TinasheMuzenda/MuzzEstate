import "../styles/Header.css";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarPosition, setNavbarPosition] = useState(0);
  const menuRef = useRef(null);
  const [activeTab, setActiveTab] = useState();
  const handleClick = (number) => {
    setActiveTab(number);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (!menuOpen) {
        if (currentScrollTop > lastScrollTop) {
          setNavbarPosition(-5);
        } else {
          setNavbarPosition(0);
        }
      }

      setLastScrollTop(currentScrollTop);
    };

    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollTop, menuOpen]);

  return (
    <nav id="navbar" style={{ top: `${navbarPosition}rem` }}>
      <div className="navbar container" ref={menuRef}>
        {" "}
        <div className="header">
          <Link
            to="/"
            className="logo"
            onClick={() => {
              handleClick(1);
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
              }}
              className={` ${activeTab == 2 ? "active" : ""} `}
            >
              Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              onClick={() => {
                handleClick(3);
              }}
              className={` ${activeTab == 3 ? "active" : ""} `}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => {
                handleClick(4);
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
