import { NavLink } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";
import { useEffect, useState } from "react";
import { LuSunMoon } from "react-icons/lu";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const activeStyle = {
    
    color: "green",
    fontWeight: "bold",
  };
  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const currentScrollPos = window.pageYOffset;

      // Determine scroll direction
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Update state based on scroll direction and scroll position
      setIsNavVisible(isScrollingDown || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  const links = (
    <>
      <li>
        <NavLink to="/" activeStyle={activeStyle}>
          Home <RxDividerVertical />
        </NavLink>
      </li>

      <li>
        <NavLink to="/courses" activeStyle={activeStyle}>
          {" "}
          Courses <RxDividerVertical />
        </NavLink>
      </li>
      <li>
        <NavLink to="/registration" activeStyle={activeStyle}>
          {" "}
          Registration <RxDividerVertical />
        </NavLink>
      </li>
      <li>
        <NavLink to="/contactuspage" activeStyle={activeStyle}>
          {" "}
          Contact <RxDividerVertical />
        </NavLink>
      </li>
      <li>
        <NavLink to="/books" activeStyle={activeStyle}>
          {" "}
          Books <RxDividerVertical />
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 z-10 w-full transition-all duration-500 ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar  font-bold bg-[#1a103d] text-white flex justify-between ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 md:h-12 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          <img
            src="https://i.ibb.co/JQ3VWbs/logo.png"
            className="w-20 mt-3"
            alt="ddd"
          />
          <NavLink to="/" className="text-xl font-bold">
            Markazu Ta'leemil Qira'at
          </NavLink>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
