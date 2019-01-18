import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default loginReducer = (state = initialstate.user, action) => {
    switch(action.type){
        case actionTypes.LOGIN_USER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
               ...action.user
            }
        default:
            return state;
    }
}