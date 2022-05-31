import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItems } from "../Store/action/index";

const ListItems = () => {
  //   const items = ["list1", "list2", "list3"];
  const List_items_data = useSelector((state) => {
    return state.itemsList;
  });

  const dispatch = useDispatch();

  const deleteListItems = (index) => {
    console.log("deleteing");
    dispatch(deleteItems(index));
  };

  return (
    <>
      <div className="list">
        {List_items_data?.map((el, index) => {
          return (
            <div key={index}>
              <h3>{el}</h3>
              <button onClick={() => deleteListItems(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListItems;
