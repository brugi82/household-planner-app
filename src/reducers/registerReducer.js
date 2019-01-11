import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function registerReducer(state = initialState.registrationRequest, action){
    switch(action.type){
        case actionTypes.REGISTER_USER_BEGIN:
        console.log('REGISTER_USER_BEGIN');
            return {
                ...state,
                userInfo: Object.assign({}, action.userInfo),
                processing: true,
                error: null
            };
        case actionTypes.REGISTER_USER_SUCCESS:
        console.log('REGISTER_USER_SUCCESS');
            return {
                ...state,
                user: Object.assign({}, action.userInfo),
                processing: false,
                error: null
            };
        case actionTypes.REGISTER_USER_FAILURE:
        console.log('REGISTER_USER_FAILURE');
        console.log('Reducer error: ' + action.error);
            return{
                ...state,
                processing: false,
                error: Object.assign({}, action.error)
            };
        default:
            return state;
    }
}