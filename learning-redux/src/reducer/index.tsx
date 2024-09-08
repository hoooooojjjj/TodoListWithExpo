import { applyMiddleware, combineReducers, createStore } from "redux";
import counter from "./counter";
import todo from "./todo";

const rootReducer = combineReducers({
  counter,
  todo,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("store", store);
  console.log("action", action);
  next(action);
};

const middleware = applyMiddleware(loggerMiddleware);

const store = createStore(rootReducer, undefined, middleware);

export default store;
