import * as actionTypes from './../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.REGISTER_USER_BEGIN:
        console.log('REGISTER_USER_BEGIN');
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.REGISTER_USER_SUCCESS:
        console.log('REGISTER_USER_SUCCESS');
            return {
                ...state,
                user: Object.assign({}, action.user),
                loading: false,
                error: null
            };
        case actionTypes.REGISTER_USER_FAILURE:
        console.log('REGISTER_USER_FAILURE');
            return{
                ...state,
                user: {},
                loading: false,
                error: action.error
            };
        default:
        console.log('REGISTER_USER_DEFAULT');
            console.log('Called account reducer with undefined type. State is ' + state);
                console.log('State username is ' + state.user.username);
    console.log('State loading is ' + state.loading);
    console.log('State error is ' + state.error);
            return state;
    }
}