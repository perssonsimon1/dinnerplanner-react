import {
    FETCHED_DISHES,
    FETCHED_DISH,
    REQUEST_DISH,
    REQUEST_DISHES
} from '../actions/types';

const initialState = {
    isFetching: false,
    error: '',
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    if (action.status === 'success') {
        switch (action.type) {
            case FETCHED_DISHES:
                return {
                    ...state,
                    items: action.payload,
                    isFetching: false
                }

            case FETCHED_DISH:
                return {
                    ...state,
                    item: action.payload,
                    isFetching: false
                }

            case REQUEST_DISH:
                return {
                    ...state,
                    isFetching: true
                }

            case REQUEST_DISHES:
                return {
                    ...state,
                    isFetching: true
                }

            default:
                return state;
        }
    } else {
        return {
            ...state,
            error: action.error,
            isFetching: false,
        }
    }
}