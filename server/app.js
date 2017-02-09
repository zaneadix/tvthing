import Koa        from 'koa';
import bodyParser from 'koa-body';
import convert    from 'koa-convert';
import koaStatic  from 'koa-static';
import helmet     from 'koa-helmet';
import render     from 'koa-ejs';
import redisStore from 'koa-redis';
import mongoose   from 'mongoose';
import winston    from 'winston';
import path       from 'path';
import co         from 'co';

import api                from './routes/api';
import setupAuth          from './auth';
import { errorResponder } from './middleware/error-responder';
import { indexLoader }    from './middleware/index-loader';
import { REQUEST_LOGS,
         PUBLIC_DIR,
         MONGO }     from './project-env';

export const app = new Koa();
const PORT = process.env.PORT || 1111;


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

// put it all together
setupAuth(app);
app.use(helmet());
app.use(koaStatic(__dirname + PUBLIC_DIR));
app.use(convert(bodyParser()));
app.use(errorResponder);
app.use(api.routes());
app.use(api.allowedMethods());
app.use(indexLoader);

/* istanbul ignore if */
if (require.main === module) {
    winston.info(`Starting server on port ${PORT}`);
    app.listen(PORT);
}