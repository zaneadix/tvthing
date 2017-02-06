import Vue         from 'vue';
import VeeValidate from 'vee-validate';

import Core      from './components/core/Core';
import store     from './store';
import router    from './router';

Vue.use(VeeValidate);

// Define event bus for 
// VERY SIMPLE COMMUNICATIONS ONLY
const bus = new Vue({});
Object.defineProperty(Vue.prototype, '$bus', {
    get () {
        return this.$root.bus;
    }
});

new Vue({
    el: '#app',
    router,
    store,
    template: `<Core></Core>`,
    components: { Core },
    data: { bus }
});