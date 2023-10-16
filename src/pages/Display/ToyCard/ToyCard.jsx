import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const ToyCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  console.log("toycard", user);

  const { _id, description, name, sellerName, subcategory, price, pictureURL } =
    toy;

  return (
    <div className="h-full">
      {" "}
      {/* Set a fixed height for the card */}
      <div className="card w-96 bg-base-100 shadow-2xl h-full">
        <figure className="px-10 pt-10">
          <img
            height="100px"
            width="150px"
            src={pictureURL}
            className="shadow-black"
            alt="Toy"
          ></img>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>$ {price}</p>
          <p>{description}</p>

          <div className="card-actions">
            <Link
              onClick={() => {
                if (!user) {
                  toast.error("You have to log in first to view details");
                }
              }}
              to={`/toydetails/${_id}`}
            >
              <button className="mt-4 bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out">
                View Details button
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
