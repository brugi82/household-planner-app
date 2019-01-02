import * as actionTypes from './actionTypes';
import AccountApi from './../api/accountApi';

export function registerUserBegin(user){
    return {actionType: actionTypes.REGISTER_USER_BEGIN, user}
}

export function registerUserSuccess(user){
    return {actionType: actionTypes.REGISTER_USER_SUCCESS, user}
}

export function registerUserFailure(user, error){
    return {actionType: actionTypes.REGISTER_USER_FAILURE, user, error}
}

export function registerUser(user){
    return dispatch => {
        dispatch(registerUserBegin());

        return AccountApi.registerUser(user)
            .then(dispatch(registerUserSuccess(user)))
            .catch(error => dispatch(registerUserFailure(user, error)));
    }
}

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }