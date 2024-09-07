import { combineReducers, createStore } from "redux";
import counter from "./counter";
import todo from "./todo";

const rootReducer = combineReducers({
  counter,
  todo,
});

const store = createStore(rootReducer);
export default store;
