import * as actions from './actions';
import I from 'immutable';
import { handleActions } from 'redux-actions';

const initialState = I.Map({
  items: I.List(),
  isLoading: false,
});

const handleFetch = (state, { payload }) => {
  return state.setIn(['isLoading'], true);
};

const handleFetchSuccess = (state, { payload }) => {
  return state.setIn(['isLoading'], false).setIn(['items'], I.fromJS(payload));
};

const handleFetchFailure = (state, { payload }) => {
  // TODO: add error message
  return state.setIn(['isLoading'], false);
};

const handleCreate = (state, { payload }) => {
  console.log(state.getIn(['items']).push(I.fromJS(payload)));
  return state.getIn(['items']).push(I.fromJS(payload));
};

export default handleActions(
  {
    [actions.fetch]: handleFetch,
    [actions.fetchSuccess]: handleFetchSuccess,
    [actions.fetchFailure]: handleFetchFailure,
    [actions.create]: handleCreate,
  },
  initialState,
);
