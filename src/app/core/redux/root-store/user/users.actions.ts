import { User } from "../../../models/models";
import { Action } from "@ngrx/store";

export enum ActionTypes {
  GET_USERS_REQUEST = '[Users] Get Users Request',
  GET_USERS_FAILURE = '[Users] Get Users Failure',
  GET_USERS_SUCCESS = '[Users] Get Users Success'
}


export class GetUsersRequestAction implements Action {
    readonly type = ActionTypes.GET_USERS_REQUEST;
    constructor() { }
}

export class GetUsersSuccessAction implements Action {
    readonly type = ActionTypes.GET_USERS_SUCCESS;
    constructor(public payload: { users: User[] }) { }
}

export class GetUsersFailureAction implements Action {
    readonly type = ActionTypes.GET_USERS_FAILURE;
    constructor(public payload: { error: string }) { }
}

export type Actions = GetUsersRequestAction | GetUsersSuccessAction | GetUsersFailureAction;