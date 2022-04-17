import { createStore, combineReducers } from "redux";
import entriesReducer from "../reducers/entries.reducer";
import modalsReducer from "../reducers/modals.reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
    }),
    composeWithDevTools()
  );
  return store;
};

export default configureStore;
