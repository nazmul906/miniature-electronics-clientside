import React, { useEffect, useState } from "react";
import ToyCard from "../../Display/ToyCard/ToyCard";
import "./category.css";
const Category = () => {
  const [toy, setToy] = useState([]);
  const [active, setActive] = useState("robotic");
  const handleclick = (categoryname) => {
    setActive(categoryname);

    // ei active ar useeffect er por er active difference ache
    // console.log(active);
  };

  useEffect(() => {
    console.log(active);
    fetch(
      `https://miniature-electronics-serverside-ixx9nhk9m-nazmul906.vercel.app/alltoys/${active}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToy(data);
      });
  }, [active]);

  return (
    <div className="cat-bg-img ">
      <h2 className="text-4xl font-semibold mt-6 mb-10 text-center pt-4">
        Category
      </h2>
      <p className=" text-xl text-center text-cyan-600 text-title">
        Pick toy by your favourite category
      </p>
      <div className="tab-content p-4 text-center">
        <li
          className="tab text-2xl "
          data-tab="robotic"
          onClick={() => handleclick("robotic")}
        >
          Robotic
        </li>
        <li
          className="tab text-2xl"
          data-tab="minicars"
          onClick={() => handleclick("minicar")}
        >
          Mini Cars
        </li>
        <li
          className="tab text-2xl"
          data-tab="drone"
          onClick={() => handleclick("minidrone")}
        >
          Mini Drone
        </li>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-2 p-[2.5rem]">
        {toy.map((item) => (
          <ToyCard key={item._id} toy={item}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
