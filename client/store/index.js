import Vue  from 'vue';
import Vuex from 'vuex';

import userModule     from './user';
import discoverModule from './discover';
import showModule     from './show';

Vue.use(Vuex);

const state = {
    history: [],
    ...userModule.state,
    ...discoverModule.state,
    ...showModule.state
}

const actions = {
    ...userModule.actions,
    ...discoverModule.actions,
    ...showModule.actions
}

const mutations = {
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