import React from "react";

import { useContext, useEffect, useState } from "react";
const Register = () => {
  const [error, setError] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const username = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photo.value;
    console.log(username, password);
  };

  return (
    <div className="bg-slate-400 flex justify-center items-center h-screen ">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleRegister}
          className="bg-white shadow-md rounded px-8 py-6"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Photo
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="photo"
              type="text"
              placeholder="your photo"
              required
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
        </form>
        <div>
          <p className="">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
