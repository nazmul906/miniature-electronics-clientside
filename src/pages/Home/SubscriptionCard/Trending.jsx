import React from "react";
import "./trending.css";
export default function Trending({ trendings }) {
  return (
    <div className=" bg-img mb">
      <h2 className="text-4xl font-semibold  mb-6 pt-8 text-center">
        Trending
      </h2>
      <p className="text-xl text-center text-cyan-600 text-title pb-5">
        {" "}
        Here is our treding toys
      </p>
      {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-2 mb-2 p-[2.5rem] ">
        {trendings.map((trending) => (
          // card w-96 bg-base-100 shadow-2xl h-full
          <div
            key={trending.id}
            className="card w-96 bg-white h-full shadow-2xl rounded-lg p-4 bg-blue-400"
          >
            <div className="card-body items-center text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-600 ">
                {trending.title}
              </h3>
              <p className="text-gray-600 mb-2">{trending.description}</p>
              <p className="text-xl font-semibold text-gray-600 ">
                ${trending.price}
              </p>
              <div>
                {" "}
                <button className="mt-4 bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
