import Vue  from 'vue';
import Vuex from 'vuex';

import { ApplicationState } from '../../shared/data/state';
import coreModule           from './core';
import userModule           from './user';
import discoverModule       from './discover';
import showModule           from './show';

Vue.use(Vuex);

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
    state: new ApplicationState(),
    actions,
    mutations
});

// initialize store
store.dispatch('hydrate');

export default store;