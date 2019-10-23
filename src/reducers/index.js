import { combineReducers } from "redux";
import journals from "./journals-reducer";
import journal from "./journal-reducer";
import auth from "./auth-reducer";

export default combineReducers({
  journals,
  journal,
  auth
});
