import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="get-started-button ">
      <button className="">
        <Link
          to="/login"
          className=" px-16 md:ml-12 py-4 bg-amber-800 capitalize rounded-lg "
        >
          get started
        </Link>
      </button>
    </div>
  );
};

export { GetStarted };
