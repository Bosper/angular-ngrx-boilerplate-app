import { Action, ActionReducer } from '@ngrx/store';
import { FormGroupState, createFormGroupState, formGroupReducer } from 'ngrx-forms';

import { AppState, UPDATE_FORM, UPDATE_FORM_SINGLE, GET_USERS, GET_USERS_ERROR, FORM_SUBMIT_SUCCESS, GET_USERS_SUCCESS, UPDATE_USER_DATA, BaseData, RegisterFormState, AppStateEXT } from "../models/models";

const initialState: AppStateEXT = {
    formGroupNested: {
        formGroup1: {
            name: 'husky999',
            displayName: 'Uland Nimblehoof',
            email: '',
            adult: true
            },
        formGroup2: {
            firstName: 'Uland', 
            lastName: 'Nimblehoof'
        } 
    },
    formGroup: {
        name: 'husky999',
        displayName: 'Malcom Nimblehoof',
        email: '',
        adult: false
    },
    formGroupExtended: {
        firstName: 'Malcom',
        lastName: 'Nimblehoof',
    },
    contact: {
        email: '',
        message: ''
    },
    users: []
}

const formState: AppState = {
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

const userState: BaseData[] = [];

export function mainReducer(state: AppStateEXT = initialState, action) {
    switch (action.type) {

        case UPDATE_FORM:
            return { ...state, [action.payload.path.formGroupNested]: action.payload.value} 

        case UPDATE_FORM_SINGLE:
            return { ...state, [action.payload.path]: action.payload.value }

        case GET_USERS:
            return { ...state }

        case GET_USERS_SUCCESS:
            return { ...state, users: action.payload }

        case UPDATE_USER_DATA:
            const updatedUser = {...action.payload.value, adult: action.payload.option};

            return { ...state, users: state.users.map((user) => user.id === updatedUser.id ? updatedUser : {...user})}

        default:
            return state;
    }
}