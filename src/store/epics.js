import { BehaviorSubject } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { epics as listEpics } from './modules/list/epics';
import { mergeMap } from 'rxjs/operators';

/** Set of epics to include in the initial application bundle. */
const initialEpics = [...listEpics];

const epic$ = new BehaviorSubject(combineEpics(...initialEpics));

/**
 * Root epic consisting of the initial set of epics.
 *
 * @param  {Rx.Observable} action$ Redux action stream observable.
 * @param  {Object}        store   Redux store
 * @returns {Rx.Observable}         Observable of new actions.
 */
export const rootEpic = (action$, store) =>
  epic$.pipe(mergeMap(epic => epic(action$, store)));

/**
 * Injects a new epic in the store.
 *
 * The most common use case is to inject epics that have been lazy-loaded into
 * the application by accessing a particular route.
 *
 * Note! Unlike the similar function injectReducer() this function is additive
 * so calling it will register the epic every time. Application level should
 * take measures on calling it only once per any given epic.
 *
 * @param  {Function} epic The new epic to inject.
 */
export const injectEpic = epic => epic$.next(epic);
