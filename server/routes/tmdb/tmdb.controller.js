import request from 'request';

function requestData (url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            resolve(body);
        });
    });
}

export async function tmdb (ctx, next) {

    let data = await requestData(ctx.state.url);
    ctx.body = data;
    console.log(ctx.body);
    return next();
};