import { takeLatest, call, put, all, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
    firestore,
    convertCollectionsSnapshotToMap,
    auth,
    getUserData,
} from '../../firebase/firebase.utils';
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure,
    clearCartOut,
    fetchCartItemsSuccess,
    fetchCartItemsFailure,
    addItemSuccess,
    addItemFailure,
    decreaseItemQuantity,
} from '../actions/actionCreatores';
import { addItem as addItemUtil } from '../reducers/utils/cartUtils';

export function* fetchCollectionsAsync() {
    try {
        const collectoinRef = yield firestore().collection('collections');
        const snapshot = yield collectoinRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCartItems() {
    const user = yield auth().currentUser;
    if (!user) return;
    try {
        const userId = user.uid;
        const userRef = yield firestore().doc(`/users/${userId}`);
        const snapshot = yield userRef.get();
        yield put(fetchCartItemsSuccess(snapshot.data().cartItems));
    } catch (error) {
        put(fetchCartItemsFailure(error));
    }
}

export function* addItemAsync(action) {
    try {
        const { userData, userRef } = getUserData();
        const userCartItems = userData.cartItems;
        const newCartItems = addItemUtil(
            userCartItems ? userCartItems : [],
            action.item
        );

        yield userRef.update({ ...userData, cartItems: newCartItems });
        // yield usersCollectionRef.add(action.item);
        yield put(addItemSuccess(newCartItems));
    } catch (error) {
        console.log(error);
        yield put(addItemFailure(error.message));
    }
}

export function* decreaseItemQuantityAsync(action) {
    const userRef = yield firestore().doc(`/users/${auth().currentUser.uid}`);
    const snapshot = yield userRef.get();
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        actionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export function* clearCart() {
    yield put(clearCartOut());
}

export function* onSignOut() {
    yield takeLatest(actionTypes.SIGN_OUT_USER_SUCCESS, clearCart);
}
export function* onFetchCartItems() {
    yield takeLatest(actionTypes.FETCH_CART_ITEMS_START, fetchCartItems);
}

export function* onAddItem() {
    yield takeEvery(actionTypes.ADD_ITEM_START, addItemAsync);
}

export function* onDecreaseItemQuantity() {
    yield takeLatest(
        actionTypes.DECREASE_ITEM_QUANTITY_START,
        decreaseItemQuantityAsync
    );
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart),
        call(onSignOut),
        call(onFetchCartItems),
        call(onAddItem),
        call(onDecreaseItemQuantity),
    ]);
}
