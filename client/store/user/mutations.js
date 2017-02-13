
import Vue from 'vue';
import { User } from './models';

export const authenticate = (state) => {

    Vue.set(state.user, 'authenticating', true);
}

export const authenticateFailure = (state) => {

    Vue.set(state.user, 'authenticating', false);
}

export const recieveUser = (state, user) => {

    Vue.set(state.user, 'account', Object.assign(new User(), user));
    Vue.set(state.user, 'authenticating', false);
}

export const signOut = (state) => {

    Vue.set(state.user, 'signingOut', true);
}

export const releaseUser = (state) => {

    Vue.set(state.user, 'signingOut', false);
    Vue.set(state.user, 'account', false);
}

export const userUpdating = (state, user) => {
    Vue.set(state.user, 'updating', true);
}

export const userUpdateSuccess = (state, user) => {
    Vue.set(state.user, 'updating', true);
    Vue.set(state.user, 'account', Object.assign(new User(), state.user.account, user));
}

export const userUpdateFailure = (state, user) => {
    Vue.set(state.user, 'updating', false);
    Vue.set(state.user, 'updateFailure', true);
}