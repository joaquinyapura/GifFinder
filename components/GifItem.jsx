import React from "react";

export const GifItem = ({ key, title, url }) => {
  return (
    <div className="card" key={key}>
      <h5>{title}</h5>
      <img src={url} alt="" srcset="" />
    </div>
  );
};
