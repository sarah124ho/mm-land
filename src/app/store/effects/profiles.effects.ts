import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';


import { ProfileService } from 'src/app/api/profile.service';
import { LoadProfileError, LoadProfileSuccess, ProfileActionTypes } from '../actions/profile.actions';


@Injectable()
export class ProfileEffects {

  constructor(
    private actions$: Actions,
    private _service: ProfileService) { }

  loadProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActionTypes.LoadProfile, ProfileActionTypes.LoadProfileSuccess),
      exhaustMap(() => this._service.getProfile().pipe(
        map((response) => (new LoadProfileSuccess({ data: response.result }))),
        catchError((message) => of(new LoadProfileError(message)))
      ))
    );
  });
}
