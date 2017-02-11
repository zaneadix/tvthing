
export const hydrate = ({ commit, state }) => {
    let dehydrated = document.getElementById("dehydrated");
    let data = JSON.parse(dehydrated.getAttribute('data'));
    commit('hydrate', data);
}