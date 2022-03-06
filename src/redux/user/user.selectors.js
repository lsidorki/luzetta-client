import { createSelector } from 'reselect'

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) =>  user.currentUser
)

export const selectIsUpdating = createSelector(
    [selectUser],
    (user) => user.isUpdating
)

export const selectRole = createSelector(
    [selectUser],
    (user) => user.role
)