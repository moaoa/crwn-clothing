import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import reducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const middleware = [thunk];

export const store = createStore(
    reducer /* preloadedState, */,
    composeEnhancers(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
// export default { store, persistor };
