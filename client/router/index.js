import Vue       from 'vue';
import VueRouter from 'vue-router';
import store     from '../store';

import baseRoutes     from './routes/base';
import authRoutes     from './routes/auth';
import userRoutes     from './routes/user';
import discoverRoutes from './routes/discover';
import showRoutes     from './routes/show';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        ...baseRoutes,
        ...authRoutes,
        ...userRoutes,
        ...discoverRoutes,
        ...showRoutes
    ]
});

// global route guarding
// make sure users are signed in 
// if necessary 
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (store.state && store.state.user.account) {
            next();
        } else {
            next('/sign-in');
        }
    } else {
        next();
    }
});

export default router;