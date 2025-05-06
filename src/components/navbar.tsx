import { NavLink } from "react-router-dom";
import Logout from "./logout";
import { useState } from "react";
import ecofyLogo from "../assets/ecofyLogo.jpg";


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const navLinks = [
    { title: "Home", link: "/", isProtected: true },
    { title: "Cart", link: "/cart", isProtected: true },
    { title: "Login", link: "/login", isProtected: false },
    { title: "Sign Up", link: "/signup", isProtected: false },
  ];

  return (
    <nav className="bg-gray-800 h-12 lg:h-16 lg:py-5 relative">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-start px-4">
        <a
          href="/"
          className="flex items-center gap-3"
        >
          <img
            src={ecofyLogo}
            className="h-8 w-auto mx-5 sm:h-10 md:h-12 lg:h-12"
            alt="Logo"
          />
        </a>
        <button
          onClick={handleShowNavbar}
          className="block text-white sm:hidden focus:outline-none cursor-pointer absolute right-28"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div
          className={`nav-elements fixed right-0 top-0 z-40 h-screen w-64 transform bg-gray-600 text-white transition-transform duration-300 ease-in-out 
            ${
              showNavbar ? "translate-x-0" : "translate-x-full"
            } sm:translate-x-0 sm:relative sm:right-auto sm:top-auto sm:h-auto sm:w-auto sm:bg-transparent`}
        >
          <button
            onClick={handleShowNavbar}
            className="absolute top-4 right-4 text-white focus:outline-none sm:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="mt-16 flex flex-col space-y-8 px-6 py-6 sm:mt-0 sm:flex-row sm:space-x-8 sm:space-y-0 sm:px-0">
            {navLinks.map(({ title, link }, index) => (
              <li key={index} className="group">
                <NavLink
                  to={link}
                  className="relative p-2 text-lg font-medium text-white transition-all duration-300 ease-in-out hover:text-blue-400 sm:text-base"
                  onClick={() => setShowNavbar(false)}
                >
                  {title}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Logout />
      </div>
    </nav>
  );
};

export default Navbar;
