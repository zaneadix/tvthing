import Koa        from 'koa';
import bodyParser from 'koa-body';
import koaConvert from 'koa-convert';
import koaStatic  from 'koa-static';
import helmet     from 'koa-helmet';
import mongoose   from 'koa-mongoose';
import render     from 'koa-ejs';
import redisStore from 'koa-redis';
import session    from 'koa-generic-session';
import winston    from 'winston';
import co         from 'co';
import path       from 'path';

import api                from './routes/api';
import { errorResponder } from './middleware/error-responder';
import { REQUEST_LOGS,
         PUBLIC_DIR,
         MONGO }     from './project-env';

export const app = new Koa();


/* istanbul ignore if */
if (REQUEST_LOGS) {
    app.use(require('koa-morgan')('combined'));
}


// Use ejs for rendering
render(app, {
    root: path.join(__dirname, 'templates'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: true
});

app.context.render = co.wrap(app.context.render);


app.keys = ['keys', 'keyskeys'];
app.use(session({
    store: redisStore({})
}));

app.use(mongoose(MONGO));


// put it all together
app.use(helmet())
    .use(koaStatic(__dirname + PUBLIC_DIR))
    .use(koaConvert(bodyParser()))
    .use(errorResponder)
    .use(api.routes())
    .use(api.allowedMethods())
    .use(async (ctx, next) => {
        if (!ctx.body) {
            await ctx.render('index');
        }
    });


const PORT = process.env.PORT || 1111;


/* istanbul ignore if */
if (require.main === module) {
    winston.info(`Starting server on port ${PORT}`);
    app.listen(PORT);
}