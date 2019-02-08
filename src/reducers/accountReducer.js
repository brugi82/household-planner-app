import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState.account, action){
    switch(action.type){
        case actionTypes.REGISTER_USER_BEGIN:
            return {
                ...state,
                loading: true,
                registrationError: null
            };
        case actionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                processing: false,
                registrationError: null
            };
        case actionTypes.REGISTER_USER_FAILURE:
            return{
                ...state,
                processing: false,
                registrationError: {...action.error}
            };
            case actionTypes.LOGIN_USER_BEGIN:
            return {
                ...state,
                loading: true,
                loginError: null
            };
        case actionTypes.LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                loginError: {...action.error}
            }
        case actionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                loginError: null,
                user:{...action.user}
            }
        case actionTypes.CONFIRM_EMAIL_BEGIN:
            return {
                ...state,
                confirmEmail: {
                    confirmed: false,
                    error: null,
                    loading: true
                }
            };
        case actionTypes.CONFIRM_EMAIL_FAILURE:
            return {
                ...state,
                confirmEmail: {
                    confirmed: false,
                    error: action.error,
                    loading: false
                }
            };
        case actionTypes.CONFIRM_EMAIL_SUCCESS:
            return {
                ...state,
                confirmEmail: {
                    confirmed: action.confirmed,
                    error: null,
                    loading: false
                }
            };
        default:
            return state;
    }
}