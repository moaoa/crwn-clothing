import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    user: null,
};
const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return { user: action.user };
        default:
            return state;
    }
};
export default authReducer;
