import UserActionTypes from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    isUpdating: false
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
                isUpdating: false
            };
        case UserActionTypes.UPDATE_USER_START:
            return {
                ...state,
                isUpdating: true
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null,
                isUpdating: false
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.UPDATE_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                isUpdating: false
            }
        default:
            return state;
    }
}

export default userReducer;