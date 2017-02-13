import koaRouter from 'koa-router';

export const userRouter = koaRouter()

    .post('/account-details', async (ctx, next) => {

        if (ctx.isAuthenticated()) {
            let data = ctx.request.body;
            let user = ctx.state.user;
            console.log(data);
            user.email = data.email || user.email;
            user.givenName = data.givenName || user.givenName;
            user.familyName = data.familyName || user.familyName;
            user.location = data.location || user.location;
            user.website = data.website || user.website;
            user.bio = data.bio || user.bio;
            user.save();
            ctx.body = user.toJSON();
        } else {
            ctx.throw(new Error());
        }

        next();
    })