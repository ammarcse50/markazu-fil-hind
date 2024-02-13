import { NavLink } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">
          Home <RxDividerVertical />
        </NavLink>
      </li>

      <li>
        <NavLink to="/courses">
          {" "}
          Courses <RxDividerVertical />
        </NavLink>
      </li>
      <li>
        <NavLink to="/registration">
          {" "}
          Registration <RxDividerVertical />
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact">
          {" "}
          Contact <RxDividerVertical />
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 text-white flex justify-between ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          <img src="/src/Raw/logo.png" className="w-20 mt-3" alt="ddd" />
          <NavLink to="/" className="text-xl font-bold">
            Markazu Ta'leemil Qira'at
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
