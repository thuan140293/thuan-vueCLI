import { createStore } from 'vuex'
import loginModule from '../modules/loginPage/_store';

const store = createStore({
  modules: {
    $_loginPage: loginModule,
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})

export default store;