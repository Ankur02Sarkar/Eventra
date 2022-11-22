import React from "react";
import { Link } from "react-router-dom";
import "./component.css";
const Services = () => {
  return (
    <div className="new">
      <Link to="/servicetypes">
        <h1 className="containerTitle">Check out Our Services</h1>
      </Link>
    </div>
  );
};

export default Services;
