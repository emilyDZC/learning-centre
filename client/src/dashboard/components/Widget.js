import React from "react";

const Widget = ({ title }) => {
  return (
    <div className="widget">
      <div className="widget-heading">{title}</div>
    </div>
  );
};

export default Widget;
