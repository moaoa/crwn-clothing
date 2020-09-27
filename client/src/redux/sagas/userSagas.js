import { takeLatest, put, all, call } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
    SignInSuccess,
    SignInFailure,
    signOutUserSuccess,
    signOutUserFailure,
    signUpFailure,
} from '../actions/actionCreatores';

import {
    auth,
    createUser,
    signInWithGoogle as signInWithGoogleFunc,
    checkUserAuthState,
} from '../../firebase/firebase.utils';

export function* getUserSnapshot(user) {
    const userRef = yield call(createUser, user);
    const snapShot = yield userRef.get();
    yield put(SignInSuccess({ id: snapShot.id, ...snapShot.data() }));
}

export function* checkUserSesion() {
    try {
        const user = yield checkUserAuthState();
        if (!user) return;
        yield getUserSnapshot(user);
    } catch (error) {
        yield put(SignInFailure(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield signInWithGoogleFunc();
        yield getUserSnapshot(user);
    } catch (error) {
        yield put(SignInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth().signInWithEmailAndPassword(
            email,
            password
        );
        yield getUserSnapshot(user);
    } catch (err) {
        yield put(SignInFailure(err));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(actionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSesion() {
    yield takeLatest(actionTypes.CHECK_USER_SESION, checkUserSesion);
}

export function* signUserOut(action) {
    try {
        yield auth().signOut();
        yield put(signOutUserSuccess());
    } catch (error) {
        yield put(signOutUserFailure(error));
    }
}

export function* onSignOutUser() {
    yield takeLatest(actionTypes.SIGN_OUT_USER_START, signUserOut);
}

export function* signUpUser({ email, password, displayName }) {
    try {
        const { user } = yield auth().createUserWithEmailAndPassword(
            email,
            password
        );

        yield getUserSnapshot({ ...user, displayName });
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* onSignUpStart() {
    yield takeLatest(actionTypes.SIGN_UP_START, signUpUser);
}

export function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSesion),
        call(onSignOutUser),
        call(onSignUpStart),
    ]);
}
