import Vue  from 'vue';
import Vuex from 'vuex';

import coreModule     from './core';
import userModule     from './user';
import discoverModule from './discover';
import showModule     from './show';

Vue.use(Vuex);

const state = {
    history: [],
    ...coreModule.state,
    ...userModule.state,
    ...discoverModule.state,
    ...showModule.state
}

const actions = {
    ...coreModule.actions,
    ...userModule.actions,
    ...discoverModule.actions,
    ...showModule.actions
}

const mutations = {
    ...coreModule.mutations,
    ...userModule.mutations,
    ...discoverModule.mutations,
    ...showModule.mutations
}

const store = new Vuex.Store({
    state,
    actions,
    mutations
})

export default store;