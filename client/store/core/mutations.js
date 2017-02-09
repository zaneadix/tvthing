import Vue from 'vue';

export const initializeStore = (state, payload) => {

    state = Object.assign({}, state, payload);

    console.log(payload);

    Vue.set(state, 'user', payload.user);
}