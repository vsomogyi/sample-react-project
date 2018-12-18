import { createAction } from 'redux-actions';

// ------------------------------------
// Action creators
// ------------------------------------

export const fetch = createAction('LIST_FETCH');
export const fetchSuccess = createAction('LIST_FETCH_SUCCESS');
export const fetchFailure = createAction('LIST_FETCH_FAILURE');

export const create = createAction('LIST_CREATE');
