import React from "react";
import { Link } from "react-router-dom";

const Widget = ({ name, id, colour }) => {
  return (
    <Link to={`/subjects/${id}/${name}`}>
      <div className="widget" style={{ backgroundColor: colour }}>
        <div className="widget-heading">{name}</div>
      </div>
    </Link>
  );
};

export default Widget;
