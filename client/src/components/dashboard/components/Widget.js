import React from "react";
import { Link } from "react-router-dom";

const Widget = ({ name, id }) => {
  return (
    <Link to="/posts">
      <div className="widget">
        <div className="widget-heading">{name}</div>
      </div>
    </Link>
  );
};

export default Widget;