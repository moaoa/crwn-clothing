import * as actionTypes from "./actionTypes";

export const googleSignInStart = () => ({
  type: actionTypes.GOOGLE_SIGN_IN_START,
});
export const SignInSuccess = (currentUser) => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: currentUser,
});
export const SignInFailure = (error) => ({
  type: actionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (email, password) => ({
  type: actionTypes.EMAIL_SIGN_IN_START,
  payload: { email, password },
});
export const checkUserSesion = () => ({ type: actionTypes.CHECK_USER_SESION });

export const signUpStart = (email, password, displayName) => ({
  type: actionTypes.SIGN_UP_START,
  email,
  password,
  displayName,
});
export const signUpFailure = (e) => ({
  type: actionTypes.SIGN_UP_FAILURE,
  payload: e,
});

export const signOutUserStart = () => ({
  type: actionTypes.SIGN_OUT_USER_START,
});
export const signOutUserSuccess = () => ({
  type: actionTypes.SIGN_OUT_USER_SUCCESS,
});
export const signOutUserFailure = (err) => ({
  type: actionTypes.SIGN_OUT_USER_FAILURE,
  payload: err,
});

// cart actoins
export const fetchCartItems = () => ({
  type: actionTypes.FETCH_CART_ITEMS_START,
});
export const fetchCartItemsSuccess = (cartItems) => ({
  type: actionTypes.FETCH_CART_ITEMS_SUCCESS,
  payload: cartItems,
});
export const fetchCartItemsFailure = (err) => ({
  type: actionTypes.FETCH_CART_ITEMS_FAILURE,
  payload: err,
});
export const toggleHidden = () => ({ type: actionTypes.TOGGLE_HIDDEN });
export const addItem = (item) => ({ type: actionTypes.ADD_ITEM_START, item });
export const addItemSuccess = (cartItems) => ({
  type: actionTypes.ADD_ITEM_SUCCESS,
  cartItems,
});
export const addItemFailure = (err) => ({
  type: actionTypes.ADD_ITEM_FAILURE,
  payload: err,
});
export const removeItem = (itemId) => ({
  type: actionTypes.REMOVE_ITEM_FROM_CART,
  itemId,
});

export const decreaseItemQuantityStart = (itemId) => ({
  type: actionTypes.DECREASE_ITEM_QUANTITY_START,
  itemId,
});
export const decreaseItemQuantitySuccess = (cartItems) => ({
  type: actionTypes.DECREASE_ITEM_QUANTITY_SUCCESS,
  payload: cartItems,
});
export const decreaseItemQuantityFailure = (err) => ({
  type: actionTypes.DECREASE_ITEM_QUANTITY_FAILURE,
  payload: err,
});

export const clearCartOut = () => ({ type: actionTypes.CLEAR_CART });

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

// export const fetchCollectionsStartAsync = () => {
//     return (dispatch) => {
//         const collectoinRef = firestore().collection('collections');
//         dispatch(fetchCollectionsStart());

//         collectoinRef
//             .get()
//             .then((snapshot) => {
//                 if (snapshot.empty)
//                     return dispatch(
//                         fetchCollectionsFailure('failed to fetch data')
//                     );
//                 const collectionsMap = convertCollectionsSnapshotToMap(
//                     snapshot
//                 );
//                 dispatch(fetchCollectionsSuccess(collectionsMap));
//             })
//             .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
//     };
// };
