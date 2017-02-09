
export async function indexLoader (ctx, next) {

    if (!ctx.body) {

        let initialData = {};

        if (ctx.isAuthenticated()) {
            initialData.user = {
                account: ctx.state.user
            };
        }

        console.log(initialData);

        await ctx.render('index', {initialData});
    }
}