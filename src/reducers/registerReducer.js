import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function registerReducer(state = initialState.registrationRequest, action){
    switch(action.type){
        case actionTypes.REGISTER_USER_BEGIN:
        console.log('REGISTER_USER_BEGIN');
            return {
                ...state,
                userInfo: Object.assign({}, action.userInfo),
                loading: true,
                error: null
            };
        case actionTypes.REGISTER_USER_SUCCESS:
        console.log('REGISTER_USER_SUCCESS');
            return {
                ...state,
                user: Object.assign({}, action.userInfo),
                loading: false,
                error: null
            };
        case actionTypes.REGISTER_USER_FAILURE:
        console.log('REGISTER_USER_FAILURE');
            return{
                ...state,
                userInfo: {},
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}