import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../Store/action/index";
const TextInput = () => {
  const [additem, SetAdditems] = useState("");

  const dispatch = useDispatch();

  const addItemToList = () => {
    dispatch(addItems(additem));
    SetAdditems("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the item"
        value={additem}
        onChange={(event) => SetAdditems(event.target.value)}
      />
      <button onClick={addItemToList}>Add</button>
    </div>
  );
};

export default TextInput;
