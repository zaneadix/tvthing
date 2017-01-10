import koaRouter from 'koa-router';
import qs from 'querystring';
import { tmdb } from './tmdb.controller';
import { TMDB }  from '../../project-env';

function buildURL (url) {
    let endpoint = url.replace('/tmdb', '');
    endpoint = endpoint.indexOf('?') >= 0 ? endpoint+'&' : endpoint+'?';
    endpoint = endpoint.replace(/\/\?/, '?');
    return `${TMDB.HOST}${endpoint}` + qs.stringify({'api_key': TMDB.API_KEY});
}

export const tmdbRouter = koaRouter()

    .use('*', async (ctx, next) => {
        ctx.state.url = buildURL(ctx.request.url);
        console.log(ctx.state.url);
        await next();
    })

    .get('*', tmdb)