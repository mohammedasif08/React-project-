import { INCREMENT } from "./actionItems";
import { DECREMENT } from "./actionItems";

const initialstate = {
  count: 0,
};
const CounterReducers = (state = initialstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
export default CounterReducers;
