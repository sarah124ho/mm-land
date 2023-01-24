import { Action } from '@ngrx/store';

import { ProfileDTO } from 'src/app/domain/profile.dto';

import { ActionStatus } from '../reducers';

export enum ProfileActionTypes {
  LoadProfile = '[Profile] Load Profile',
  LoadProfileSuccess = '[Profile] Load Profile Success',
  LoadProfileError = '[Profile] Load Profile Error'
}

export interface ProfileActionPayload {
  data: ProfileDTO | undefined;
  error: string;
}

export class ProfileAction implements Action {
  type!: string;
  payload?: ProfileActionPayload;
}

export class LoadProfile implements Action {
  readonly type = ProfileActionTypes.LoadProfile;
  readonly status: ActionStatus = 'loading';
  constructor() { }
}

export class LoadProfileError implements Action {
  readonly type = ProfileActionTypes.LoadProfileError;
  readonly status = 'error';
  constructor(readonly payload: { error: string }) { }
}

export class LoadProfileSuccess implements Action {
  readonly type = ProfileActionTypes.LoadProfileSuccess;
  readonly status = 'loaded';
  constructor(readonly payload: { data: ProfileDTO }) { }
}

export type ActionsUnion = LoadProfile | LoadProfileError;
