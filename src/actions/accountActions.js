import * as actionTypes from './actionTypes';
import AccountApi from '../api/accountApi';
import {push} from 'connected-react-router';

export function registerUserBegin(user){
    return {type: actionTypes.REGISTER_USER_BEGIN, user}
}

export function registerUserSuccess(user){
    return {type: actionTypes.REGISTER_USER_SUCCESS, user}
}

export function registerUserFailure(error){
    return {type: actionTypes.REGISTER_USER_FAILURE, error}
}

export const loginUserBegin = () => {
    return {type:actionTypes.LOGIN_USER_BEGIN};
}

export const loginUserSuccess = (user) => {
    return {type:actionTypes.LOGIN_USER_SUCCESS, user};
}

export const loginUserFailure = (error) => {
    return {type:actionTypes.LOGIN_USER_FAILURE, error};
} 

export const confirmEmailBegin = () => {
    return { type:actionTypes.CONFIRM_EMAIL_BEGIN };
}

export const confirmEmailSuccess = (confirmed) => {
    return { type:actionTypes.CONFIRM_EMAIL_SUCCESS, confirmed: confirmed };
}

export const confirmEmailFailure = (error) => {
    return { type:actionTypes.CONFIRM_EMAIL_FAILURE, error };
}

export const loginUser = (loginInfo) => {
    return (dispatch) => {
        dispatch(loginUserBegin());
        return AccountApi.loginUser(loginInfo)
            .then((user) => {
                dispatch(loginUserSuccess(user));
                //store token somewhere

                dispatch(push('/dashboard'));
            }).catch(err => {
                dispatch(loginUserFailure({message: 'Login failed...', description: err.message}));
            });
    }
}

export function registerUser(user){
    return function(dispatch) {
        dispatch(registerUserBegin());
        return AccountApi.registerUser(user)
            .then(() => {
                console.log('Account API register user resolved OK');
                dispatch(registerUserSuccess());

                //Redirect after successful registration
                dispatch(push('/registerconfirm'));
            }).catch(err => {
                console.log('Action error: ' + err);
                dispatch(registerUserFailure({message: 'Registration failed...', description: err.message}));
            })
    }
}

export const confirmEmail = (userId, token) => {
    return (dispatch) => {
        console.log('Confirm email start.');
        dispatch(confirmEmailBegin());
        return AccountApi.confirmEmail(userId, token)
            .then((confirmed) => {
                console.log('Confirm email OK.');
                dispatch(confirmEmailSuccess(confirmed));
            }).catch((error) => {
                console.log('Confirm email Failed.');
                dispatch(confirmEmailFailure(error));
            })
    }
}

