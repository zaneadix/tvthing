import koaRouter  from 'koa-router';

import { authRouter } from './auth/auth.routes';
import { userRouter } from './user/user.routes';
import { tmdbRouter } from './tmdb/tmdb.routes';

// Entry point for all modules.
const api = koaRouter()
    .use('/auth', authRouter.routes())
    .use('/user', userRouter.routes())
    .use('/tmdb', tmdbRouter.routes());

export default api;