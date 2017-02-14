// libraries
import Koa        from 'koa';
import bodyParser from 'koa-body';
import convert    from 'koa-convert';
import koaStatic  from 'koa-static';
import helmet     from 'koa-helmet';
import render     from 'koa-ejs';
import morgan     from 'koa-morgan';
import passport   from 'koa-passport';
import session    from 'koa-generic-session';
import mongoose   from 'mongoose';
import redis      from 'redis';
import bluebird   from 'bluebird';
import winston    from 'winston';
import path       from 'path';
import co         from 'co';
import axios from 'axios';

// utilities
import api        from './api';
import middleware from './middleware';
import env        from './project-env';

mongoose.connect(env.MONGO.URL);
bluebird.promisifyAll(redis.RedisClient.prototype);

//scripts
import './auth';
import './cronJobs';

// server
export const app = new Koa();
app.keys = ['secret', 'keys', 'keyskeys'];

// Use ejs for rendering
render(app, {
    root: path.join(__dirname, 'templates'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: true
});

app.context.render = co.wrap(app.context.render);

app.use(helmet());
app.use(convert(session()));
app.use(convert(passport.initialize()));
app.use(convert(passport.session()));

// redis for caching
// app.use(co.wrap(session({
//     store: redisStore({})
// })));

/* istanbul ignore if */
if (env.REQUEST_LOGS) {
    app.use(morgan('combined'));
}

app.use(koaStatic(__dirname + env.PUBLIC_DIR));
app.use(convert(bodyParser()));
app.use(api.routes());
app.use(api.allowedMethods());
app.use(middleware.indexLoader);

/* istanbul ignore if */
if (require.main === module) {
    const PORT = process.env.PORT || 2222;
    winston.info(`Starting server on port ${PORT}`);
    app.listen(PORT);
}