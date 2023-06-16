import React, { useState } from "react";
import { AddCategorie, GifGrid } from "../components";

export const GifApp = () => {
  const [categorias, setCategorias] = useState([""]);

  const agregarCategoria = (categoria) => {
    if (categorias.includes(categoria)) return;
    setCategorias([categoria, ...categorias]);
  };

  return (
    <>
      <h1>GIF APP</h1>
      <AddCategorie onNewCategorie={(value) => agregarCategoria(value)} />
      <ol>
        {categorias.map((e) => (
          <GifGrid key={e} categoria={e} />
        ))}
      </ol>
    </>
  );
};
