import axios from 'axios';
import qs from 'querystring';

const AUTH_PATH = '/auth';
const SIGN_UP_PATH   = `${AUTH_PATH}/sign-up`;
const SIGN_IN_PATH   = `${AUTH_PATH}/sign-in`;
const SIGN_OUT_PATH  = `${AUTH_PATH}/sign-out`;

export const signUp = ({commit, state}, details) => {

    commit('authenticate');

    return axios.post(SIGN_UP_PATH, details)
        .then(response => {
            commit('recieveUser', response.data);
            return response;
        })
        .catch(error => {
            console.log(error);
            commit('authenticateFailure');
            return error;
        });
}

export const signIn = ({commit, state}, details) => {

}

export const signOut = ({commit, state}, details) => {

}

export const validate = ({commit, state}, details) => {

}