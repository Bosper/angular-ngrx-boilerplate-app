import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { User } from "../../../models/models";
import { userAdapter, State } from './users.state';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectUsersFeatureState: MemoizedSelector<
    object,
    State
    > = createFeatureSelector<State>('usersFeature');

export const selectAllUsersFeatureItems: (
    state: object
) => User[] = userAdapter.getSelectors(selectUsersFeatureState).selectAll;

export const selectUsersFeatureById = (id: string) =>
    createSelector(this.selectAllMyFeatureItems, (allUsersFeature: User[]) => {
        if (allUsersFeature) {
            return allUsersFeature.find(p => p.id === id);
        } else {
            return null;
        }
    });

export const selectUsersFeatureError: MemoizedSelector<object, any> = createSelector(
    selectUsersFeatureState,
    getError
);

export const selectUsersFeatureIsLoading: MemoizedSelector<
    object,
    boolean
    > = createSelector(selectUsersFeatureState, getIsLoading);
