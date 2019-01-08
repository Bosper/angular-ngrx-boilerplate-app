import { Action, ActionReducer } from '@ngrx/store';
import { FormGroupState, createFormGroupState, formGroupReducer } from 'ngrx-forms';

import { AppState, GET_MESSAGES, GET_MESSAGES_SUCCESS, UPDATE_FORM, UPDATE_FORM_SINGLE, GET_USERS, GET_USERS_ERROR, FORM_SUBMIT_SUCCESS, GET_USERS_SUCCESS, UPDATE_USER_DATA, BaseData, RegisterFormState, AppStateEXT } from "../models/models";

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
    users: [],
    shared: {
        radio_opt: [
            {
                message: 'Yes, of course',
                value: '0'
            },
            {
                message: 'Doesn\'t matter...',
                value: '1'
            },
            {
                message: 'Hell, no f* way!',
                value: '2'
            }
        ],
        translations: null
    }
}

const userState: BaseData[] = [];

export function mainReducer(state: AppStateEXT = initialState, action) {
    switch (action.type) {

        case GET_MESSAGES:
            return { ...state }

        case GET_MESSAGES_SUCCESS:
            const trans = { ...action.payload };

            return { ...state,  translations: state.shared.translations = trans }

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