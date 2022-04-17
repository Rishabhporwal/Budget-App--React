import typeEntries from "../actions/entries.action";

let initialEntries = [];

const entriesReducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case typeEntries.POPULATE_ENTRIES:
      return action.payload;
    case typeEntries.ADD_ENTRY:
      newEntries = state.concat({ ...action.payload });
      return newEntries;
    case typeEntries.REMOVE_ENTRY:
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    case typeEntries.UPDATE_ENTRY: 
      newEntries = [...state];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = { ...action.payload.entry };
      return newEntries;
    default:
      return state;
  }
};

export default entriesReducer;
