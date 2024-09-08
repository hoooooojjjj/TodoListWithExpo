import { combineReducers, createStore } from "redux";
import counter from "./counter";
import todo from "./todo";

const rootReducer = combineReducers({
  counter,
  todo,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export default store;
