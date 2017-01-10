
export const retrieveShowDetail = (state) => {
    state.show.loading = true;
}

export const recieveShowDetail = (state, show) => {
    let update = {}
    update[show.id] = show;
    state.show.details = Object.assign(update, state.show.details);
    state.show.loading = false;
}