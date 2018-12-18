import * as actions from './actions';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { from } from 'rxjs';

const fetchSuccess = json => [actions.fetchSuccess(json)];

const fetchEpic = (action$, store) => {
  return action$.pipe(
    ofType(actions.fetch),
    mergeMap(action => {
      return from(
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(json => fetchSuccess(json)),
      );
    }),
    mergeMap(action => action),
  );
};

export const epics = [fetchEpic];
