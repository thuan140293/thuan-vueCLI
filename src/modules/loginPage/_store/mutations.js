const SET_TOKEN = (state, payload) => {
    state.tokenUser = payload.data.token;
    sessionStorage.setItem("tokenUser", state.tokenUser);
}

const REMOVE_TOKEN = (state) => {
    sessionStorage.removeItem("tokenUser");
    state.token = null;
};

export default{
    SET_TOKEN,
    REMOVE_TOKEN
}
