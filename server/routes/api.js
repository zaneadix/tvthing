import koaRouter  from 'koa-router';

import { healthCheckRouter } from './health-check/health-check.routes';
import { demoRouter }        from './demo/demo.routes';
import { tmdbRouter }        from './tmdb/tmdb.routes';

// Entry point for all modules.
const api = koaRouter()
    .use('/health', healthCheckRouter.routes())
    .use('/demo', demoRouter.routes())
    .use('/tmdb', tmdbRouter.routes());

export default api;