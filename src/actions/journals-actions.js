import request from "superagent";

export const ALL_JOURNALS = "ALL_JOURNALS";

const baseUrl = "http://localhost:4000";

function allJournals(payload) {
  return {
    type: ALL_JOURNALS,
    payload
  };
}

export const getJournals = () => (dispatch, getState) => {
  const state = getState();
  const { journals } = state;

  if (!journals.length) {
    request(`${baseUrl}/journals`)
      .then(response => {
        const action = allJournals(response.body);

        dispatch(action);
      })
      .catch(console.error);
  }
};
