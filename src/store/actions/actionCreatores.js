import * as actionTypes from './actionTypes';
// auth actions
export const setUser = (user) => ({ type: actionTypes.SET_USER, user });

// cart actoins
export const toggleHidden = () => ({ type: actionTypes.TOGGLE_HIDDEN });
