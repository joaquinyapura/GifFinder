import React, { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFechgifs } from "../hooks/useFechgifs";

export const GifGrid = ({ categoria }) => {
  const { Images, isLoading } = useFechgifs(categoria);
  return (
    <>
      <h3>{categoria}</h3>
      {isLoading && <h2>...Loading</h2>}

      <div className="card-grid">
        {Images.map((image) => (
          <GifItem {...image} key={image.id} />
        ))}
      </div>
    </>
  );
};
