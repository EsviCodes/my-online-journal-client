import {
  GET_JOURNAL_SUCCESS,
  JOURNAL_UPDATE_SUCCESS,
  JOURNAL_DELETE_SUCCESS
} from "../actions/journals-actions";

export default (state = {}, action = {}) => {
  switch (action.type) {
    case GET_JOURNAL_SUCCESS:
      return { ...action.payload };
    case JOURNAL_UPDATE_SUCCESS:
      return action.payload;
    case JOURNAL_DELETE_SUCCESS:
      return {};

    default:
      return state;
  }
};
