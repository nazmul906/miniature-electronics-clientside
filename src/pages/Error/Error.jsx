import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div>
        <img
          src="https://i.ibb.co/Bfmzz5p/000-http-error-codes.png"
          style={{ width: "100%" }}
          alt="Error Image"
        />
      </div>
      <Link to="/">
        <button className="btn btn-primary">Back to home</button>
      </Link>
    </div>
  );
};

export default Error;
