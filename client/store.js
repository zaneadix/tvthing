import Vue                from 'vue';
import Vuex               from 'vuex';

import * as discoverActions   from './modules/discover/store/actions';
import * as discoverMutations from './modules/discover/store/mutations';

import * as showActions   from './modules/show/store/actions';
import * as showMutations from './modules/show/store/mutations';

Vue.use(Vuex);

const state = {
    count: 0,
    discover: {
        loading: false,
        results: []
    },
    show: {
        current: '',
        details: {}
    },
    history: []
}

const actions = Object.assign({},
    discoverActions,
    showActions
);

const mutations = Object.assign({},
    discoverMutations,
    showMutations
);

const store = new Vuex.Store({
    state,
    actions,
    mutations
})

export default store;