import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";
  const handleClick = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.name.value;
    const password = form.password.value;
    console.log(username, password);
  };
  return (
    <div>
      <div className="flex bg-slate-400 justify-center items-center h-screen">
        <div className="w-full max-w-md">
          <form
            className="bg-white shadow-md rounded px-8 py-6"
            onSubmit={handleClick}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md "
                name="name"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md "
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              {/* <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button> */}
              <input
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                value="submit"
              />
            </div>

            <div className="flex items-center justify-center mt-8">
              {" "}
              <p className=" mr-4">Dont you have an account? </p>
              <Link to="/register">
                <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Regitser
                </div>
              </Link>
            </div>
          </form>
          <div>
            <p className="">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
