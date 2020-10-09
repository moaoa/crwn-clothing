import { createStore, applyMiddleware, compose } from 'redux';
// import { persistStore } from 'redux-persist';
import reducer from './reducers/rootReducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddeware = createSagaMiddleware();

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const middleware = [sagaMiddeware];

export const store = createStore(
    reducer /* preloadedState, */,
    composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddeware.run(rootSaga);

// export const persistor = persistStore(store);
// export default { store, persistor };
