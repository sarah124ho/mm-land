import { StoredProfileKey } from 'src/app/consts';

import { ActionStatus } from '.';
import { ProfileDTO } from 'src/app/domain/profile.dto';
import { ProfileAction, ProfileActionTypes } from '../actions/profile.actions';

export interface ProfileState {
    data: ProfileDTO | undefined;
    status: ActionStatus;
    error?: string;
}

const getStoredProfile = (): ProfileDTO | undefined => {
    const data = localStorage.getItem(StoredProfileKey);
    if (!data) return undefined;
    return JSON.parse(data) as ProfileDTO;
}

const initialProfileState: ProfileState = {
    status: 'loading',
    data: getStoredProfile(),
}

export function profileReducer(state: ProfileState = initialProfileState, action: ProfileAction): ProfileState {
    switch (action.type) {
        case ProfileActionTypes.LoadProfile:
            return { status: 'loading', data: action.payload ? action.payload.data : getStoredProfile() };
        case ProfileActionTypes.LoadProfileSuccess:
            if (action.payload) {
                localStorage.setItem(StoredProfileKey, JSON.stringify(action.payload.data));
                return {
                    data: action.payload.data,
                    status: 'loaded'
                }
            } else {
                return {
                    data: undefined,
                    status: 'loaded'
                }
            }
        case ProfileActionTypes.LoadProfileError:
            return {
                data: undefined,
                status: 'error'
            }
        default:
            return state;
    }
}