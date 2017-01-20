import Vue  from 'vue';
import Vuex from 'vuex';

import discoverModule from './modules/discover/store';
import showModule from './modules/show/store';

Vue.use(Vuex);

const state = {
    history: [],
    ...discoverModule.state,
    ...showModule.state
}

const actions = {
    ...discoverModule.actions,
    ...showModule.actions
}

const mutations = {
    ...discoverModule.mutations,
    ...showModule.mutations
}

const store = new Vuex.Store({
    state,
    actions,
    mutations
})

export default store;