import Vue from 'vue';
import VueRouter from 'vue-router';

import homeRoutes from './modules/home/routes';
import discoverRoutes from './modules/discover/routes';
import showRoutes from './modules/show/routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        ...homeRoutes,
        ...discoverRoutes,
        ...showRoutes
    ]
});

export default router;