import React from "react";
import { Link } from "react-router-dom";
import "./component.css";
const New = () => {
  return (
    <div className="new">
      <Link to="/producttypes">
        <h1 className="containerTitle">Check out Our Products</h1>
      </Link>
      <img
        src="https://media.tenor.com/0WkmuOC_W00AAAAi/waving-pikachu.gif"
        alt=""
      />
    </div>
  );
};

export default New;
