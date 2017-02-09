
export const initializeStore = ({ commit, state }) => {

    let initialDataEl = document.getElementById("initialData");
    let data = JSON.parse(initialDataEl.getAttribute('data'));
    console.log(data);
    commit('initializeStore', data);
}