import axios from 'axios';
import redis from 'redis';
import env from './project-env';
import { CronJob } from 'cron';

let redisClient = redis.createClient();

let maintainTMDBConfig = new CronJob({
    cronTime: '0 0 0 */1 * *', // Once every day
    runOnInit: true,
    onTick: () => {
        axios.get(`${env.TMDB.HOST}/configuration?api_key=${env.TMDB.API_KEY}`)
            .then((response) => {
                redisClient.set('tmdb:config', JSON.stringify(response.data));
            })
            .catch((error) => {

            });
    }
});

maintainTMDBConfig.start();