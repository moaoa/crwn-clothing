// import SHOP_DATA from '../../../Pages/ShopPage/shopData';
import * as actionTypes from '../../actions/actionTypes';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
            };
        case actionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false,
            };

        case actionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            };

        default:
            return state;
    }
};

export default shopReducer;
