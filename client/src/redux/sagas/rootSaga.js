import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shopSaga';
import { userSaga } from './userSagas';

export default function* rootSaga() {
    yield all([call(shopSagas), call(userSaga)]);
}
