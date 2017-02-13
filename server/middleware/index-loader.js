import { ApplicationState } from '../../shared/data/state';

export async function indexLoader (ctx, next) {
    if (!ctx.body) {

        let state = new ApplicationState();

        if (ctx.isAuthenticated()) {
            state.user.account = ctx.state.user;
        }

        await ctx.render('index', { state });
    }
}