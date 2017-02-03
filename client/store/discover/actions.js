import axios from 'axios';
import qs from 'querystring';

const DISCOVER_SHOWS = '/tmdb/discover/tv';

const DISCOVER_FILTERS = {

}

export const discoverShows = ({ commit, state }, queries) => {

    commit('retrieveShows');

    let query = qs.stringify({
        'page': 1,
        'sort_by': 'popularity.desc',
        'include_null_first_air_dates': false
    })

    axios.get(`${DISCOVER_SHOWS}?${query}`)
        .then(response => {
            commit('recieveShows', response.data.results);
        });
}