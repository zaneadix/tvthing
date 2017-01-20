import request from 'request';
import Show from '../../models/show';

function requestData (url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            resolve(body);
        });
    });
}

export async function tmdb (ctx, next) {
    let data = await requestData(ctx.state.url);

    let showData = JSON.parse(data);

    let show = new Show({
        name: showData.name,
        overview: showData.overview,
        id: showData.id
    });

    show.save();

    ctx.body = data;
    return next();
};