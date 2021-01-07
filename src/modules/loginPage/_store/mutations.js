const SET_TOKEN = (state, payload) => {
    state.tokenUser = payload.data.token;
    state.currentUser = payload.config.data;
    sessionStorage.setItem("tokenUser", state.tokenUser);
    sessionStorage.setItem("currentUser", state.currentUser);
}

const REMOVE_TOKEN = (state) => {
    sessionStorage.removeItem("tokenUser");
    sessionStorage.removeItem("currentUser");
    state.token = null;
    state.currentUser = null;
};

export default{
    SET_TOKEN,
    REMOVE_TOKEN
}
