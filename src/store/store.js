import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import reducer from './reducers/rootReducer';

export const store = createStore(
    reducer /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
// export default { store, persistor };
