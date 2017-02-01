import koaRouter  from 'koa-router';

import { authRouter }        from './auth/auth.routes';
import { healthCheckRouter } from './health-check/health-check.routes';
import { demoRouter }        from './demo/demo.routes';
import { tmdbRouter }        from './tmdb/tmdb.routes';

// Entry point for all modules.
const api = koaRouter()
    .use('/auth', authRouter.routes())
    .use('/health', healthCheckRouter.routes())
    .use('/demo', demoRouter.routes())
    .use('/tmdb', tmdbRouter.routes());

export default api;