import axios from 'axios';
import qs from 'querystring';

const AUTH_PATH = '/auth';
const SIGN_UP_PATH   = `${AUTH_PATH}/sign-up`;
const SIGN_IN_PATH   = `${AUTH_PATH}/sign-in`;
const SIGN_OUT_PATH  = `${AUTH_PATH}/sign-out`;

function authenticate (commit, path, data) {

    commit('authenticate');

    return axios.post(path, data)
        .then(response => {
            commit('recieveUser', response.data);
            return response;
        })
        .catch(error => {
            console.log(error.response);
            commit('authenticateFailure');
            return error.response;
        });
}

export const signUp = ({commit, state}, data) => {

    return authenticate(commit, SIGN_UP_PATH, data);
}

export const signIn = ({commit, state}, data) => {

    return authenticate(commit, SIGN_IN_PATH, data);
}

export const signOut = ({commit, state}, details) => {

}

export const validate = ({commit, state}, details) => {

}