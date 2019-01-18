import * as actionTypes from './actionTypes';
import AccountApi from '../api/accountApi';
import {push} from 'connected-react-router';
import { registerUserBegin } from './registrationActions';

export const loginUserBegin = () => {
    return {type:actionTypes.LOGIN_USER_BEGIN};
}

export const loginUserSuccess = (user) => {
    return {type:actionTypes.LOGIN_USER_SUCCESS, user};
}

export const loginUserFailure = (error) => {
    return {type:actionTypes.LOGIN_USER_FAILURE, error};
} 

export const loginUser = (loginInfo) => {
    return (dispatch) => {
        dispatch(registerUserBegin());
        return AccountApi.loginUser(loginInfo)
            .then((user) => {
                dispatch(loginUserSuccess(user));
                //store token somewhere

                dispatch(push('/dashboard'));
            }).catch(err => {
                dispatch(loginUserFailure(err));
            });
    }
}