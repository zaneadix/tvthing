import redis from 'redis';
import { ApplicationState } from '../../shared/data/state';

let redisClient = redis.createClient();

export async function indexLoader (ctx, next) {
    if (!ctx.body) {

        let state = new ApplicationState();

        if (ctx.isAuthenticated()) {
            state.user.account = ctx.state.user;
        }

        await redisClient.getAsync('tmdb:config').then((tmdbConfig) => {
            state.config.tmdb = JSON.parse(tmdbConfig);
        });

        await ctx.render('index', { state });
    }
}