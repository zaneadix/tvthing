import koaRouter from 'koa-router';
import passport  from 'koa-passport';

export const authRouter = koaRouter()

    .post('/sign-up', async (ctx, next) => {
        return passport.authenticate('sign-up', (error, user) => {
            if (error) {
                ctx.throw(error);
            } else {
                ctx.body = user;
                ctx.login(user);
            }
        })(ctx, next);
    })

    .post('/sign-in', async (ctx, next) => {
        return passport.authenticate('sign-in', (error, user) => {
            if (error) {
                ctx.throw(error);
            } else {
                ctx.body = user;
                ctx.login(user, (error) => {
                    if (error) ctx.throw(error);
                    ctx.body = user;
                });
            }
        })(ctx, next);
    })

    .post('/sign-out', (ctx, next) => {
        ctx.logout();
        ctx.session = null;
        ctx.body = { success: true };
        next();
    })