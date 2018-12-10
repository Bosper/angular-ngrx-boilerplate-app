export interface AppState {
    formGroup: User;
    contact: Contact;
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

export const UPDATE_FORM = 'UPDATE_FORM';
export const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS';
export const FORM_SUBMIT_ERROR = 'FORM_SUBMIT_ERROR';