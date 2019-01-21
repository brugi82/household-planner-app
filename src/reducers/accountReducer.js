import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState.account, action){
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
                processing: false,
                error: null
            };
        case actionTypes.REGISTER_USER_FAILURE:
        console.log('REGISTER_USER_FAILURE');
        console.log('Reducer error: ' + action.error);
            return{
                ...state,
                processing: false,
                error: {...action.error}
            };
            case actionTypes.LOGIN_USER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.LOGIN_USER_FAILURE:
            console.log('Login fail');
            console.log('Error:', action.error);
            return {
                ...state,
                loading: false,
                error: {...action.error}
            }
        case actionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user:{...action.user}
            }
        default:
            return state;
    }
}