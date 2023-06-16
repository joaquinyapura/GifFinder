import { useState } from "react";

export const AddCategorie = ({ onNewCategorie }) => {
  const [inputValue, setinputValue] = useState("one Punch");

  const onChange = ({ value }) => {
    setinputValue(value);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategorie(inputValue.trim());
    setinputValue("");

    //setCategorias((categorias) => [...categorias, inputValue]);
  };

  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={({ target }) => onChange(target)}
      />
    </form>
  );
};
