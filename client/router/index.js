import Vue       from 'vue';
import VueRouter from 'vue-router';

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

export default router;