import { createReducer, on } from '@ngrx/store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { loadCurrentPath } from './data-actions';

export interface State {
  path: string;
}

export const initialState: State = { path: '/' };

export const DataReducer = createReducer(
  initialState,
  on(loadCurrentPath, (state, action): State => ({ ...state, path: action.path }))
);

export const selectDataState = createFeatureSelector<State>('data');

// Selectors
export const selectCurrentPath = createSelector(selectDataState, (state: State) => state.path);
