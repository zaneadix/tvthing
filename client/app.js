import Vue         from 'vue';
import VeeValidate from 'vee-validate';

import Core      from './components/core/Core';
import store     from './store';
import router    from './router';

Vue.use(VeeValidate);

new Vue({
    el: '#app',
    router,
    store,
    template: `<Core></Core>`,
    components: { Core }
});