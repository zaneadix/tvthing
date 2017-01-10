import axios from 'axios';
import qs from 'querystring';

const SHOW_PATH = '/tmdb/tv/';

export const retrieveShowDetail = ({ commit, state }, id) => {

    commit('retrieveShowDetail');

    console.log(state);

    axios.get(`${SHOW_PATH}${id}`)
        .then(response => {
            console.log(response);
            commit('recieveShowDetail', response.data);
        });
}