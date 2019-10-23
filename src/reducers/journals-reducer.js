import { ALL_JOURNALS } from "../actions/journals-actions";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ALL_JOURNALS:
      return action.payload;
    default:
      return state;
  }
}
