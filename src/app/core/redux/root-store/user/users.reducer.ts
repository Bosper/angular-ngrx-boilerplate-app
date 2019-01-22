import { ActionTypes, Actions } from "./users.actions";
import { initialUsersState, userAdapter, State } from "./users.state";

export function usersReducer(state = initialUsersState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.GET_USERS_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case ActionTypes.GET_USERS_SUCCESS: {
            return userAdapter.addAll(action.payload.users, {
                ...state,
                error: null,
                isLoading: false
            });
        };
        case ActionTypes.GET_USERS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };
        default:
            return state;
    }
}