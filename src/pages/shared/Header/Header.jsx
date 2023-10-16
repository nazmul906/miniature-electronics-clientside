import React, { useState, useContext } from "react";

import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { AuthContext } from "../../../providers/AuthProvider";
function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-400 text-white p-6 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <p className=" text-2xl  text-title">Electronic Miniature</p>

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
          className={`lg:flex gap-1 flex justify-between items-center ${
            isMobileMenuOpen ? "hidden" : ""
          }`}
        >
          <a href="/" className="text-white hover:text-gray-300 ">
            Home
          </a>
          <Link to="/alltoy" className="text-white hover:text-gray-300">
            All Toys
          </Link>
          <Link to="/addtoy" className="text-white hover:text-gray-300">
            Add Toy
          </Link>

          <Link to="/mytoy" className="text-white hover:text-gray-300">
            My Toy
          </Link>

          <div className="navbar-end">
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
                className="bg-indigo-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className={`lg:hidden ${isMobileMenuOpen ? "" : "hidden"}`}>
        <div className="bg-blue-500 p-4">
          <a href="#" className="block text-white hover:text-gray-300 py-2">
            Home
          </a>
          <NavLink to="/alltoy" className="text-white hover:text-gray-300">
            Alltoy
          </NavLink>
          <NavLink to="/mytoy" className="text-white hover:text-gray-300">
            My Toy
          </NavLink>

          <div className="navbar-end">
            {user ? (
              <>
                <h4 className="text-white mr-4">{user.email}</h4>
                <button
                  onClick={handleLogout}
                  className=" bg-indigo-500 font-bold py-2 px-4 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-indigo-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
