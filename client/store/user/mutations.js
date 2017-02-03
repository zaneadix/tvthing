
import Vue from 'vue';
import { User } from './models';

export const authenticate = (state) => {

    Vue.set(state.user, 'authenticating', true);
}

export const authenticateFailure = (state) => {

    Vue.set(state.user, 'authenticating', false);
}

export const recieveUser = (state, user) => {

    Vue.set(state.user, 'account', user);
    Vue.set(state.user, 'authenticating', false);
}

export const signOut = (state, user) => {

    Vue.set(state.user, 'account', false);
}