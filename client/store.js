import Vue  from 'vue';
import Vuex from 'vuex';

import authModule     from './modules/auth/store';
import discoverModule from './modules/discover/store';
import showModule     from './modules/show/store';

Vue.use(Vuex);

const state = {
    history: [],
    ...authModule.state,
    ...discoverModule.state,
    ...showModule.state
}

const actions = {
    ...authModule.actions,
    ...discoverModule.actions,
    ...showModule.actions
}

const mutations = {
    ...authModule.mutations,
    ...discoverModule.mutations,
    ...showModule.mutations
}

const store = new Vuex.Store({
    state,
    actions,
    mutations
})

export default store;