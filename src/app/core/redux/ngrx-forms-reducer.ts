import { Action } from '@ngrx/store';
import { FormGroupState, createFormGroupState, formGroupReducer } from 'ngrx-forms';

import { RegisterBaseData } from "../models/base-data";
import { User } from "../models/user";

export const ACTIONS = {
    FORM_LOADED: 'FORM_LOADED',
}
const FORM_ID = 'formGroup';

export const initialFormState = createFormGroupState<RegisterBaseData>(FORM_ID, {
    name: 'Name',
    // email: '',
    // password: '',
    // agreement: false
});

export interface AppState {
    baseDataForm: FormGroupState<RegisterBaseData>;
}

const initialState: AppState = {
    baseDataForm: initialFormState
};

export function appReducer(state = initialState, action: Action): AppState {
    const baseDataForm = formGroupReducer(state.baseDataForm, action);
    
    if (baseDataForm !== state.baseDataForm) {
        state = { ...state, baseDataForm };
    }

    switch (action.type) {
        case 'some action type':
            // modify state
            return state;

        default: {
            console.log("DEFAULT: ", state);
            return state;
        }
    }
}