import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure,
    clearCartOut,
} from '../actions/actionCreatores';

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

export function* shopSagas() {
    yield all([call(fetchCollectionsStart), call(onSignOut)]);
}
