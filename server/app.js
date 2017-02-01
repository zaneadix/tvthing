import Koa        from 'koa';
import bodyParser from 'koa-body';
import convert    from 'koa-convert';
import koaStatic  from 'koa-static';
import helmet     from 'koa-helmet';
import render     from 'koa-ejs';
import redisStore from 'koa-redis';
import session    from 'koa-generic-session';
import mongoose   from 'mongoose';
import winston    from 'winston';
import path       from 'path';
import co         from 'co';

import api                from './routes/api';
import setupAuth          from './auth';
import { errorResponder } from './middleware/error-responder';
import { REQUEST_LOGS,
         PUBLIC_DIR,
         MONGO }     from './project-env';

export const app = new Koa();
const PORT = process.env.PORT || 1233;


/* istanbul ignore if */
if (REQUEST_LOGS) {
    app.use(require('koa-morgan')('combined'));
}

mongoose.connect(MONGO.URL);

app.keys = ['secret'];

// Use ejs for rendering
render(app, {
    root: path.join(__dirname, 'templates'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: true
});

app.context.render = co.wrap(app.context.render);

// Caching system
// app.keys = ['keys', 'keyskeys'];
// app.use(co.wrap(session({
//     store: redisStore({})
// })));

setupAuth(app);

// put it all together
app.use(convert(session()))
    .use(helmet())
    .use(koaStatic(__dirname + PUBLIC_DIR))
    .use(convert(bodyParser()))
    .use(errorResponder)
    .use(api.routes())
    .use(api.allowedMethods())
    .use(async (ctx, next) => {
        if (!ctx.body) {
            await ctx.render('index');
        }
    });

/* istanbul ignore if */
if (require.main === module) {
    winston.info(`Starting server on port ${PORT}`);
    app.listen(PORT);
}