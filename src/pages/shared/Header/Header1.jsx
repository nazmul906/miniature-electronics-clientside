import React, { useState, useContext } from "react";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

function Header1() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => console.log(error));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-400 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <a href="#" className="text-white text-xl font-semibold">
          Electronic Miniature
        </a>

        {/* Mobile Menu Toggle (hidden on larger screens) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu (hidden on smaller screens) */}
        <div
          className={`lg:flex space-x-4 ${isMobileMenuOpen ? "hidden" : ""}`}
        >
          {/* Only show Home and Dashboard links on larger screens */}
          <a href="/" className="text-white hover:text-gray-300 ">
            Home
          </a>

          <NavLink to="/alltoy" className="text-white hover:text-gray-300">
            Alltoy
          </NavLink>
          <NavLink to="/addtoy" className="text-white hover:text-gray-300">
            Add Toy
          </NavLink>
          <NavLink to="/mytoy" className="text-white hover:text-gray-300">
            My Toy
          </NavLink>
        </div>

        {/* the root of the problem is navbar-end default tkae 50% , so uneed to specify fixed width */}
        <div className=" navbar-end w-[12.75rem]">
          {user ? (
            <>
              <h4 className="text-white mr-4">{user.email}</h4>
              <button
                onClick={handleLogout}
                className="bg-indigo-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-indigo-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header1;
