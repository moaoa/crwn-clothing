import * as actionTypes from '../../actions/actionTypes';

const INITIAL_STATE = {
    user: null,
    error: null,
};
const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN_SUCCESS:
            return { user: action.payload, error: null };
        case actionTypes.SIGN_IN_FAILURE:
        case actionTypes.SIGN_OUT_USER_FAILURE:
        case actionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case actionTypes.SIGN_OUT_USER_SUCCESS:
            return {
                ...state,
                user: null,
                error: null,
            };

        default:
            return state;
    }
};
export default authReducer;
