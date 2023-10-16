import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ToyDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [detailsToy, setDetailsToy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {
    _id,
    pictureURL,
    name,
    sellerName,
    subcategory,
    price,
    rating,
    quantity,
    description,
    email,
  } = detailsToy || [];
  console.log(detailsToy);
  useEffect(() => {
    fetch(
      `https://miniature-electronics-serverside-iw1dgtwpn-nazmul906.vercel.app/singletoy/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetailsToy(data);

        console.log(detailsToy);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching toy details:", error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!detailsToy) {
    return <div>Toy details not found.</div>;
  }

  console.log(detailsToy);
  return (
    <div className="p-9 ">
      {/* {detailsToy._id} */}

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={pictureURL} alt="photo" className="rounded-xl h-20 " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2>
            <span>Seller : </span>
            {sellerName}
          </h2>
          <p>
            <span>Subcategory: </span> {subcategory}{" "}
            <p>
              <span>Price: </span>$ {price}
            </p>
          </p>
          <p>
            <span>Rating: </span>
            {rating}
          </p>
          <p>
            <span>Quantity: </span>
            {quantity}
          </p>
          <p>{description}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
