import React from "react";
import { useEffect, useState } from "react";
// import AllToyCard from "../../Display/AllToyCard/AllToyCard";
import "./alltoys.css";
const AllToys = () => {
  const [alltoys, setAlltoys] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    fetch(
      "https://miniature-electronics-serverside-iw1dgtwpn-nazmul906.vercel.app/alltoys",
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setAlltoys(data);
      });
  }, []);

  // console.log(alltoys);

  // search will be implemnt by backend indexing in db
  const handleSearchByToyName = () => {
    console.log(search);
    fetch(
      `https://miniature-electronics-serverside-iw1dgtwpn-nazmul906.vercel.app/searchbytoyname/${search}`,
      {}
    )
      .then((res) => res.json())
      .then((data) => {
        setAlltoys(data);
      });
  };
  return (
    <div>
      <div className="p-3 text-center">
        <input
          className="border border-blue-500 rounded-md"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button
          className="ms-5 mt-4 bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
          onClick={handleSearchByToyName}
        >
          Search
        </button>
      </div>
      <div>
        {" "}
        {/* {alltoys.map((item) => (
          <AllToyCard key={item._id} alltoy={item}></AllToyCard>
        ))} */}
        <div>
          <table className="table w-full text-2xl p-4">
            <thead>
              <tr className="text-2xl">
                <th> </th>
                <th>Toy </th>
                <th>Seller name</th>
                <th>Price</th>
                <th>Subcategory</th>
                <th>Available quantity</th>
                <th>Detail description</th>
              </tr>
            </thead>
            <tbody>
              {alltoys?.map((item, index) => (
                <tr>
                  <td>
                    <img
                      src={item.pictureURL}
                      alt="Shoes"
                      className="rounded-xl h-20 w-30 "
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.sellerName}</td>
                  <td>{item.price}</td>
                  <td>{item.subcategory}</td>
                  <td>{item.quantity}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
