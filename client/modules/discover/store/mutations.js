
export const retrieveShows = (state, payload) => {
    state.discover.loading = true;
}

export const recieveShows = (state, payload) => {
    state.discover.loading = false;
    state.discover.results = payload;
}