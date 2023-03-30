import { combineReducers } from "redux";
import { users } from "./user";
const Reducers = combineReducers({
  userState: users,
});

export default Reducers;
