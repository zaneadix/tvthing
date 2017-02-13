import axios from 'axios';
import qs from 'querystring';

const AUTH_PATH = '/auth';
const USER_PATH = '/user';
const SIGN_UP_PATH   = `${AUTH_PATH}/sign-up`;
const SIGN_IN_PATH   = `${AUTH_PATH}/sign-in`;
const SIGN_OUT_PATH  = `${AUTH_PATH}/sign-out`;
const ACCOUNT_PATH   = `${USER_PATH}/account`;

function authenticate (commit, path, data) {

    commit('authenticate');

    return axios.post(path, data)
        .then(response => {
            commit('recieveUser', response.data);
            return response;
        })
        .catch(error => {
            commit('authenticateFailure');
            return error.response;
        });
};

export const signUp = ({commit, state}, data) => {
    return authenticate(commit, SIGN_UP_PATH, data);
};

export const signIn = ({commit, state}, data) => {
    return authenticate(commit, SIGN_IN_PATH, data);
};

export const signOut = ({commit, state}, details) => {

    commit('signOut');

    return axios.post(SIGN_OUT_PATH)
        .then(response => {
            commit('releaseUser', response.data);
            return response;
        })
        .catch(error => {
            commit('signOutFailure');
            return error.response;
        })
};

export const validate = ({commit, state}, details) => {

};

export const updateAccountDetails = ({commit, state}, details) => {

    commit('userUpdating');

    return axios.post(ACCOUNT_PATH)
        .then(response => {
            commit('userUpdateSuccess', response.data);
            return response;
        })
        .catch(error => {
            return error.response;
        })
};