
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from "../../../models/models";

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: model => model.id,
    sortComparer: (a: User, b: User): number =>
        b.id.toString().localeCompare(a.id.toString())
});

export interface State extends EntityState<User> {
    isLoading?: boolean;
    error?: string;
}

export const initialUsersState: State = userAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
)