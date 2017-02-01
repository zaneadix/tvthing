/*
 * Local Dev Environment - set up for developers to use on their local machines.
 */
module.exports = {
    REQUEST_LOGS: true,
    PUBLIC_DIR: '/../build/public',
    TMDB: {
        API_KEY: '5cd6e5981ac26bf54e287b3840235c1e',
        HOST: 'https://api.themoviedb.org/3',
        CACHE_CONFIG: {
            INTERVAL: false
        }
    },
    MONGO: {
        URL: 'mongodb://zaneadix:013187za@jello.modulusmongo.net:27017/uvyg6yrE'
    },
};
