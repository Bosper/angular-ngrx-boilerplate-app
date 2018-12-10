import { Action, ActionReducer } from '@ngrx/store';
import { FormGroupState, createFormGroupState, formGroupReducer } from 'ngrx-forms';

import { AppState, UPDATE_FORM } from "../models/models";

const initialState: AppState = {
    formGroup: {
        name: '',
        displayName: 'Uland',
        email: '',
        adult: true
    },
    contact: {
        email: '',
        message: ''
    }
}

export function formReducer(state: AppState = initialState, action) {

    switch (action.type) {
        case UPDATE_FORM:
            return { ...state, [action.payload.path]: action.payload.value }
        default:
            return state; 
    }
}