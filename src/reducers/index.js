import { combineReducers } from "redux";
import journals from "./journals-reducer";
import journal from "./journal-reducer";

export default combineReducers({
  journals,
  journal
});
