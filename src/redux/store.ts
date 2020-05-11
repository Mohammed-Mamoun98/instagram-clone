import { createStore, combineReducers } from "redux";
import { sharedReducer } from "./reducers/shared";

const rootReducer = combineReducers({
  shared: sharedReducer,
});

export const store = createStore(rootReducer);
