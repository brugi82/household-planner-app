import * as actionTypes from './actionTypes';
import AccountApi from '../api/accountApi';

export function registerUserBegin(user){
    return {type: actionTypes.REGISTER_USER_BEGIN, user}
}

export function registerUserSuccess(user){
    return {type: actionTypes.REGISTER_USER_SUCCESS, user}
}

export function registerUserFailure(error){
    return {type: actionTypes.REGISTER_USER_FAILURE, error}
}

export function registerUser(user){
    return function(dispatch){
        dispatch(registerUserBegin());
        return AccountApi.registerUser(user)
            .then(() => {
                console.log('Account API register user resolved OK');
                dispatch(registerUserSuccess());
            }).catch(err => {
                console.log('Action error: ' + err);
                dispatch(registerUserFailure({message: 'Registration failed...', description: err.message}));
            })
    }
    // return dispatch => {
    //     dispatch(registerUserBegin());
    //     return AccountApi.registerUserTest(user)
    //         .then(dispatch(registerUserSuccess(user)))
    //         .catch(error => dispatch(registerUserFailure(user, error)));
    // }
}

