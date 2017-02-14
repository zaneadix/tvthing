import koaRouter from 'koa-router';
import createError from 'http-errors';
import User from '../../models/user';

export const userRouter = koaRouter()

    .post('/account-details', async (ctx, next) => {

        if (ctx.isAuthenticated()) {

            let data = ctx.request.body;
            let user = ctx.state.user;

            await User.findOne({email: data.email}, async (error, userDoc) => {
                if (error) {
                    ctx.throw(createError(500, 'Email comparison failure'));
                    return next();
                }
                if (userDoc && userDoc.id !== user.id) {
                    console.log('EMAIL IN USER BY OTHER');
                    ctx.throw(createError(403, 'Email is already registered '));
                    return next();
                } else {
                    console.log('GOOD TO EDIT');
                    user.email = data.email || user.email;
                    user.givenName = data.givenName || user.givenName;
                    user.familyName = data.familyName || user.familyName;
                    user.location = data.location || user.location;
                    user.website = data.website || user.website;
                    user.bio = data.bio || user.bio;
                    await user.save((error, userDoc) => {
                        console.log('SAVE FUNCTION');
                        if (error) {
                            ctx.throw(createError(500, 'DB write failure'));
                            return next();
                        }
                        ctx.body = userDoc.toJSON();
                        console.log(ctx.body);
                        return next();
                    });
                }
            });

        } else {
            ctx.throw(createError(403));
            return next();
        }
    })