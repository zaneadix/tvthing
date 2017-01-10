import Vue         from 'vue';

import Core      from './modules/core/Core';
import store     from './store';
import router    from './router';

new Vue({
    el: '#app',
    router,
    store,
    template: `<Core></Core>`,
    components: { Core }
});