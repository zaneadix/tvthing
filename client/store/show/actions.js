import axios from 'axios';
import qs from 'querystring';

const SHOW_PATH = '/tmdb/tv/';

export const retrieveShowDetail = ({ commit, state }, id) => {

    if (!state.show.details[id]) {

        commit('retrieveShowDetail', id);

        axios.get(`${SHOW_PATH}${id}?append_to_response=videos,credits,alternative_titles,changes,content_ratings,external_ids,keywords,recommendations`)
            .then(response => {
                commit('recieveShowDetail', response.data);
            });
    }
};

export const retrieveSeasonDetail = ({ commit, state }, payload) => {

    if (state.show.details[payload.showId]) {

        commit('retrieveSeasonDetail', payload);

        axios.get(`${SHOW_PATH}${payload.showId}/season/${payload.season_number}`)
            .then(response => {
                commit('recieveSeasonDetail', { 
                    ...payload, 
                    ...{ data: response.data }
                });
            });
    }
};