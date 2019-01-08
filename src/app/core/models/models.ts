import { Action } from "@ngrx/store";
import { Type } from '@angular/core';

export interface AppState {
    formGroup: BaseData;
    contact: Contact;
    users: BaseData[];
}


export interface NestedForm {
    formGroup1: BaseData;
    formGroup2: {
        firstName: string;
        lastName: string;
    }
}

export interface ExtendedForm {
    firstName: string,
    lastName: string,
}

export interface AppStateEXT {
    formGroupNested: NestedForm;
    formGroup: BaseData;
    formGroupExtended: ExtendedForm;
    contact: Contact;
    users: User[];
    shared: Shared;
}

export interface RegisterFormState {
    baseData: BaseData;
    personalData: PersonalData;
}

export interface BaseData {
    name: string;
    displayName: string;
    email: string;
    adult: boolean;
}

export interface Shared {
    translations: Object;
    radio_opt: any[];
    
}

export interface PersonalData {
    firstName: string;
    lastName: string;
    gender: string;

}

export interface Contact {
    email: string;
    message: string;
}

export interface User {
    id: number;
    name: string;
    displayName: string;
    email: string;
    adult: boolean;
}

export interface ActionExt extends Action {
    type: string;
    payload?: any;
}

export interface OperationModel<T> {
    param1: T;
    param2: T;
    param3: T;
}

export class AdItem {
    constructor(public component: Type<any>, public data: any) { }
}

export interface DynamicComponentManifest {
    componentId: string;
    path: string;
    loadChildren: string;
}


export const UPDATE_FORM = 'UPDATE_FORM';
export const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS';
export const FORM_SUBMIT_ERROR = 'FORM_SUBMIT_ERROR';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';
export const GET_MESSAGES = 'GET_MESSAGES';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const GET_MESSAGES_ERROR = 'GET_MESSAGES_ERROR';
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
export const UPDATE_FORM_SINGLE = 'UPDATE_FORM_SINGLE'; 