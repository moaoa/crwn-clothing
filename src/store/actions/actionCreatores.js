import * as actionTypes from './actionTypes';
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
// auth actions
export const setUser = (user) => ({ type: actionTypes.SET_USER, user });

// cart actoins
export const toggleHidden = () => ({ type: actionTypes.TOGGLE_HIDDEN });
export const addItem = (item) => ({ type: actionTypes.ADD_ITEM, item });
export const removeItem = (itemId) => ({
    type: actionTypes.REMOVE_ITEM_FROM_CART,
    itemId,
});

export const decreaseItemQuantity = (itemId) => ({
    type: actionTypes.DECREASE_ITEM_QUANTITY,
    itemId,
});

export const fetchCollectionsStart = () => {
    return { type: actionTypes.FETCH_COLLECTIONS_START };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
    return {
        type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap,
    };
};
export const fetchCollectionsFailure = (errorMessage) => ({
    type: actionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
    return (dispatch) => {
        const collectoinRef = firestore().collection('collections');
        dispatch(fetchCollectionsStart());

        collectoinRef
            .get()
            .then((snapshot) => {
                if (snapshot.empty)
                    return dispatch(
                        fetchCollectionsFailure('failed to fetch data')
                    );
                const collectionsMap = convertCollectionsSnapshotToMap(
                    snapshot
                );
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
    };
};
