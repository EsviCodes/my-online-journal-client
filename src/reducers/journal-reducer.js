import { GET_JOURNAL_SUCCESS } from "../actions/journals-actions";

export default (state = {}, action = {}) => {
  switch (action.type) {
    case GET_JOURNAL_SUCCESS:
      return { ...action.payload };

    case "DELETE_JOURNAL":
      return {};

    default:
      return state;
  }
};
