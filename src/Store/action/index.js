export const addItems = (item) => {
  return {
    type: "ADD_ITEMS",
    payload: item,
  };
};

export const deleteItems = (id) => {
  return {
    type: "DELETE_ITEMS",
    payload: id,
  };
};
