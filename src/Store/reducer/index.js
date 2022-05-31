const initialState = {
  itemsList: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      return {
        itemsList: [...state.itemsList, action.payload],
      };
    case "DELETE_ITEMS":
      const temp = state.itemsList.filter(
        (list, index) => index !== action.payload
      );
      return {
        itemsList: [...temp],
      };
    default:
      return state;
  }
};

export default itemReducer;
