import koaRouter from 'koa-router';
import createError from 'http-errors';
import User from '../../models/user';

export const userRouter = koaRouter()

    .put('/account-details', async (ctx, next) => {

        if (ctx.isAuthenticated()) {

            let data = ctx.request.body;
            let user = ctx.state.user;

            try {
                let existingUser = await User.findOne({email: data.email});
                if (existingUser && existingUser.id !== user.id) {
                    ctx.throw(createError(403, 'Email is already registered '));
                    return next();
                } else {
                    user.email = data.email || user.email;
                    user.givenName = data.givenName || user.givenName;
                    user.familyName = data.familyName || user.familyName;
                    user.location = data.location || user.location;
                    user.website = data.website || user.website;
                    user.bio = data.bio || user.bio;

                    try {
                        await user.save();
                        ctx.body = user.toJSON();
                        return next();
                    } catch (error) {
                        ctx.throw(error);
                        return next();
                    }
                }
            } catch (error) {
                ctx.throw(error);
                return next();
            }

        } else {
            ctx.throw(createError(403));
            return next();
        }
    });