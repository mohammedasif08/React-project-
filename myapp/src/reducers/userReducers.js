import { GETUSER, UPDATEUSER } from "./actionItems";

const initialstate = {
  user: null,
  age: null,
  email: null,
};
const UserReducers = (state = initialstate, action) => {
  switch (action.type) {
    case GETUSER:
      return {
        ...state,
        user: "Messi",
        age: 34,
        email: "messi@barca.com",
      };
    case UPDATEUSER:
      return {
        ...state,
        user: "Ronaldo",
        age: 36,
        email: "ronaldo@barca.com",
      };
    default:
      return state;
  }
};
export default UserReducers;
