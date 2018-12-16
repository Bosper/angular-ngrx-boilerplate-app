import { Action, ActionReducer } from '@ngrx/store';
import { FormGroupState, createFormGroupState, formGroupReducer } from 'ngrx-forms';

import { AppState, UPDATE_FORM, GET_USERS, GET_USERS_ERROR, FORM_SUBMIT_SUCCESS, GET_USERS_SUCCESS, UPDATE_USER, User } from "../models/models";

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
    },
    users: []
}

const userState: User[] = [];

export function formReducer(state: AppState = initialState, action) {
    switch (action.type) {

        case UPDATE_FORM:
            return { ...state, [action.payload.path]: action.payload.value }
        case GET_USERS:
            return { ...state }
        case GET_USERS_SUCCESS:
            return { ...state, users: action.payload }
        // case UPDATE_USER:
        //     return { ...state, users: action.payload }
        default:
            return state;
    }
}