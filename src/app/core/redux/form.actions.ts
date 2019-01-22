import { FORM_SUBMIT_SUCCESS, GET_USERS, GET_MESSAGES, GET_USERS_ERROR, GET_USERS_SUCCESS, User } from "../models/models";
import { Action } from "@ngrx/store";

export enum ActionTypes {
  GET_USERS_REQUEST = '[Development] Get Users Request',
  GET_USERS_FAILURE = '[Development] Get Users Failure',
  GET_USERS_SUCCESS = '[Development] Get Users Success'
}

export const formSuccessAction = path => ({
  type: FORM_SUBMIT_SUCCESS,
  payload: {
    path
  }
});

export const loadUsersRequest = ({
  type: GET_USERS,
});

export const loadUsersSuccess = path => ({
  type: GET_USERS_SUCCESS,
  payload: {
    path
  }
});

export const loadUsersError = (path, error) => ({
  type: GET_USERS_ERROR,
  payload: {
    path,
    error
  }
});

export function getUsers() {
  return {
    type: GET_USERS
  }
}

export function getMessagesOld() {
  return {
    type: GET_MESSAGES
  }
}

export function getMessages(lang:string) {
  return {
    type: GET_MESSAGES,
    code: lang
  }
}