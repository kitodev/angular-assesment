import { createAction, props } from '@ngrx/store';

export const LOAD_CURRENT_PATH = '[string] load current path';
export const loadCurrentPath = createAction(LOAD_CURRENT_PATH, props<{ path: string }>());
