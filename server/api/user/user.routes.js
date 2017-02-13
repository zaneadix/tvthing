import koaRouter from 'koa-router';
import passport  from 'koa-passport';

export const userRouter = koaRouter()

    .post('/account-details', async (ctx, next) => {

        if (ctx.isAuthenticated()) {
            console.log(ctx.user);
        }

        next();
    })