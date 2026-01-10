import { createStore, } from "redux";
import { combineReducers } from "redux";
import CounterReducers from "./reducers/Counterreducers";
import UserReducers from "./reducers/userReducers";

const rootReducer = combineReducers({
  counter: CounterReducers,
  user: UserReducers, 
});
const store = createStore(rootReducer);
export default store;
