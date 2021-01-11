import Vue from 'vue';
import state from '../modules/loginPage/_store/index'

export default async function auth(to, from, next) {
    const token = sessionStorage.getItem('tokenUser');
    if (!token && !state.state.tokenUser) {
        return next('/login');
    }
    else if (token && !state.state.tokenUser) {
        Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else {
        return next();
    }
}