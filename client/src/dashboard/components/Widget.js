import React from "react";
import { Link } from "react-router-dom";

const Widget = ({ title }) => {
  return (
    <Link to="/posts">
      <div className="widget">
        <div className="widget-heading">{title}</div>
      </div>
    </Link>
  );
};

export default Widget;
