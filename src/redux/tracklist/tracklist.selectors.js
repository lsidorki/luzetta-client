import { createSelector } from "reselect";

const selectTracklist = state => state.tracklist;

export const selectUserTracklist = createSelector(
    [selectTracklist],
    (tracklist) => tracklist ? tracklist.userTracklist : []
)

export const selectIsUserTracklistLoaded = createSelector(
    [selectTracklist],
    (tracklist) => !!tracklist.userTracklist
)