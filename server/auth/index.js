import passport    from 'koa-passport';
import convert     from 'koa-convert';
import local       from 'passport-local';
import bcrypt      from 'bcrypt';
import createError from 'http-errors';
import co          from 'co';
import User        from '../models/user';

const LocalStrategy = local.Strategy;

function fetchUser () {

    const user = { id: 1, username: 'test', password: 'test' }
    return async function() {
        return user
    }
};

function hashPassword (password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

function validatePassword (username, password) {
    return bcrypt.compareSync(username.password, password);
}

passport.serializeUser((user, done) => {
    done(user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await fetchUser();
        done(null, user);
    } catch (error) {
        done(error);
    }
});

passport.use('sign-up', new LocalStrategy({ passReqToCallback: true }, (request, username, password, done) => {
    
    User.findOne({ $or: [{username}, {email: request.body.email}] }, (error, user) => {
        if (error) {
            return done(error);
        }
        if (user) {
            let error;
            if (user.email === request.body.email) {
                error = createError(409, 'Email is already registered');
            } else {
                error = createError(409, 'Username is already registered');
            }
            return done(error, false);
        } else {
            let user = new User({
                username,
                password: hashPassword(password),
                email: request.body.email
            })
            user.save((error) => {
                if (error) {
                    let error = createError(500, 'User creation failure.');
                    return done(error, false);
                }
                return done(null, user.toJSON());
            });
        }
    });
}));

passport.use('sign-in', new LocalStrategy({ passReqToCallback: true }, (request, username, password, done) => {
    User.findOne({ $or: [{username}, {email: username}] }, (error, user) => {
        if (error) {
            return done(error);
        }
        let failure = false;
        if (!user || !validatePassword(user, password)) {
            let error = createError(403, 'Invalid credentials');
            return done(error, false);
        }
        return done(null, user);
    });
}));

export default (app) => {
    app.use(convert(passport.initialize()));
    app.use(convert(passport.session()));
}