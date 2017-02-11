import state from '../../shared/data/state';

export async function indexLoader (ctx, next) {

    if (!ctx.body) {

        if (ctx.isAuthenticated()) {
            state.user.account = ctx.state.user;
        }

        await ctx.render('index', { state });
    }
}