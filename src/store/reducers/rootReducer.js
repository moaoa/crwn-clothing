import { combineReducers } from 'redux';

import authReducer from '../reducers/auth';
import cartReducer from '../reducers/cart';

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
});

export default rootReducer;
