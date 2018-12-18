import list from './modules/list/reducers';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

export const makeRootReducer = asyncReducers => {
  let combined = combineReducers({
    form,
    list,
    ...asyncReducers,
  });

  return (prevState, action) => {
    let state = prevState;

    return combined(state, action);
  };
};

// export const injectReducer = (store, { key, reducer }) => {
//   store.asyncReducers[key] = reducer;
//   store.replaceReducer(makeRootReducer(store.asyncReducers));
// };

export default makeRootReducer;
