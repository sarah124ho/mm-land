import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { profileReducer, ProfileState } from './profile.reducer';

export type ActionStatus = 'loading' | 'loaded' | 'error';

export interface AppState {
  profile: ProfileState,
}

export const reducers: ActionReducerMap<AppState> = {
  profile: profileReducer,
};

export const selectProfile = (state: AppState) => state.profile.data;

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {

    if (!environment.production) {
      console.log('action', action);
      console.log('state', state);
    }

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [
  debug
] : [];
