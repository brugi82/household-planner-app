import * as actionTypes from './actionTypes';
import AccountApi from '../api/accountApi';

export function registerUserBegin(user){
    return {type: actionTypes.REGISTER_USER_BEGIN, user}
}

export function registerUserSuccess(user){
    return {type: actionTypes.REGISTER_USER_SUCCESS, user}
}

export function registerUserFailure(user, error){
    return {type: actionTypes.REGISTER_USER_FAILURE, user, error}
}

export function registerUser(user){
    return dispatch => {
        dispatch(registerUserBegin());
        return AccountApi.registerUser(user)
            .then(dispatch(registerUserSuccess(user)))
            .catch(error => dispatch(registerUserFailure(user, error)));
    }
}
