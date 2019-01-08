import { FORM_SUBMIT_SUCCESS, GET_USERS, GET_MESSAGES, GET_USERS_ERROR, GET_USERS_SUCCESS } from "../models/models";

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

export function getMessages() {
  return {
    type: GET_MESSAGES
  }
}