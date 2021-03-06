import { createEntityAdapter } from '@ngrx/entity';

import { User, GET_MESSAGES, GET_MESSAGES_SUCCESS, UPDATE_FORM, UPDATE_FORM_NEST, GET_USERS, GET_USERS_ERROR, FORM_SUBMIT_SUCCESS, GET_USERS_SUCCESS, UPDATE_USER_DATA, BaseData, RegisterFormState, AppStateEXT, UPDATE_USER_DATA_SUCCESS, UPDATE_CONFIG } from "../models/models";
import { ActionTypes } from './form.actions';

const initialState: AppStateEXT = {
    // config: {
        language: {
            defaultLanguage: 'en',
            useLanguage: 'en'
        },
        // role: 'GUEST_ROLE',
        // permissions: [''],
        // token: '',
    // },
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
        ]
    },
    translations: {},
    users_entity: null
};

export function formReducer(state: AppStateEXT = initialState, action) {
    switch (action.type) {

        case GET_MESSAGES:
            return { ...state }

        case GET_MESSAGES_SUCCESS:
            const translations = { ...action.payload };

            return { ...state,  translations: translations };

        case UPDATE_FORM_NEST:
            return { ...state, [action.payload.path.formGroupNested]: action.payload.value} 

        case UPDATE_FORM:
            return { ...state, [action.payload.path]: {...action.payload.value} }

        case GET_USERS:
            return { ...state }

        case GET_USERS_SUCCESS:
            return { ...state, users: action.payload }

        case UPDATE_USER_DATA:

            return { ...state }

        case UPDATE_USER_DATA_SUCCESS:
            const updatedUser = { ...action.payload };

            return { ...state, users: state.users.map((user) => user.id === updatedUser.id ? updatedUser : {...user})}

        default:
            return state;
    }
}