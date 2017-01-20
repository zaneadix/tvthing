
import Vue from 'vue';
import { Show, Season } from './models';


export const retrieveShowDetail = (state, id) => {

    Vue.set( state.show.details, id, {
        ...new Show(id),
        ...{ loading: true }
    });
}


export const recieveShowDetail = (state, show) => {

    let seasons = show.seasons.filter(season => {
        let include = true;
        if (season.season_number === 0) include = false; 
        return include;
    });

    seasons = seasons.map(season => {
        return { ...new Season(), ...season }
    });

    Vue.set( state.show.details, show.id, {
        ...state.show.details[show.id],
        ...show,
        ...{ loading: false, seasons }
    });
}


export const failShowDetail = (state, id) => {
    Vue.set( state.show.details[id], 'loading', false );
    Vue.set( state.show.details[id], 'failed', true );
}


export const retrieveSeasonDetail = (state, payload) => {

    let seasons = state.show.details[payload.showId].seasons;
    for (let i=0; i < seasons.length; i++) {
        if (seasons[i].season_number === payload.season_number) {
            Vue.set( seasons[i], 'loading', true );
            break;
        }
    }
}


export const recieveSeasonDetail = (state, payload) => {

    let seasons = state.show.details[payload.showId].seasons;
    let seasonIndex = 0;
    for (let i=0; i < seasons.length; i++) {
        seasonIndex = i;
        if (seasons[i].season_number === payload.season_number) break;
    }

    Vue.set(state.show.details[payload.showId], 'seasons', [
        ...seasons.slice(0, seasonIndex),
        {
            ...seasons[seasonIndex],
            ...payload.data,
            ...{ loading: false, detailed: true }
        },
        ...seasons.slice(seasonIndex+1)
    ]);
}