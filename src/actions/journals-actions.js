import request from "superagent";

export const ALL_JOURNALS = "ALL_JOURNALS";

const baseUrl = "http://localhost:4000";

// Get all Journals
function allJournals(payload) {
  return {
    type: ALL_JOURNALS,
    payload
  };
}

export const getJournals = () => (dispatch, getState) => {
  const { journals, auth } = getState();
  // console.log(getState());

  if (!!!journals.length) {
    request(`${baseUrl}/journals`)
      .set("Authorization", `Bearer ${auth}`)
      .then(response => {
        const action = allJournals(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

// Get One Journal
export const GET_JOURNAL_SUCCESS = "GET_JOURNAL_SUCCESS";

const getJournalSuccess = journal => ({
  type: GET_JOURNAL_SUCCESS,
  payload: journal
});

export const loadJournal = id => (dispatch, getState) => {
  const { auth } = getState();
  request(`${baseUrl}/journals/${id}`)
    .set("Authorization", `Bearer ${auth}`)
    .then(response => {
      console.log(response);
      dispatch(getJournalSuccess(response.body));
    });
};

// Create a Journal
export const JOURNAL_CREATE_SUCCESS = "JOURNAL_CREATE_SUCCESS";

const journalCreateSuccess = journal => ({
  type: JOURNAL_CREATE_SUCCESS,
  payload: journal
});

export const createJournal = data => (dispatch, getState) => {
  const { auth } = getState();

  request
    .post(`${baseUrl}/journals`)
    .set("Authorization", `Bearer ${auth}`)
    .send(data)
    .then(response => {
      dispatch(journalCreateSuccess(response.body));
    })
    .catch(console.error);
};
