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
        console.log('BEFORE', ctx.state.user);
        ctx.logout();
        ctx.session = null;
        console.log('AFTER', ctx.state.user);
        ctx.body = { success: true };
        next();
    })

    // .post('/sign-out', async (ctx, next) => {
    //     return passport.authenticate('sign-in', (error, user) => {
    //         if (error) {
    //             ctx.throw(error);
    //         } else {
    //             ctx.body = { success: true };
    //             ctx.login(user);
    //         }
    //     })(ctx, next);
    // })

    // .post('/validate', async () => {

    // })