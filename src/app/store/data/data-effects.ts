import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable } from 'rxjs';

import * as fromActions from './data-actions';

@Injectable()
export class DataEffects {
  constructor(private actions$: Actions) {}

  loadCurrentPath$ = createEffect(
    (): Observable<Action> => {
      return this.actions$.pipe(ofType(fromActions.loadCurrentPath));
    },
    { dispatch: false }
  );
}
