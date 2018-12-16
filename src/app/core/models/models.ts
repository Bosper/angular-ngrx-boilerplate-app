import { Action } from "@ngrx/store";

export interface AppState {
    formGroup: User;
    contact: Contact;
    users: User[];
}

export interface User {
    name: string;
    displayName: string;
    email: string;
    adult: boolean;
}

export interface Contact {
    email: string;
    message: string;
}

export interface ActionExt extends Action {
    type: string;
    payload?: any;
}

export const UPDATE_FORM = 'UPDATE_FORM';
export const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS';
export const FORM_SUBMIT_ERROR = 'FORM_SUBMIT_ERROR';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const UPDATE_USER = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR'; 