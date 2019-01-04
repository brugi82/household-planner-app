import * as actionTypes from './../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.REGISTER_USER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                user: Object.assign({}, action.user),
                loading: false,
                error: null
            };
        case actionTypes.REGISTER_USER_FAILURE:
            return{
                ...state,
                user: {},
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}