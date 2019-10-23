import {
  ALL_JOURNALS,
  JOURNAL_CREATE_SUCCESS
} from "../actions/journals-actions";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ALL_JOURNALS:
      return action.payload;
    case JOURNAL_CREATE_SUCCESS:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
}
