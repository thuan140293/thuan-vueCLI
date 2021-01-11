import actions from '../_store/actions';
import getters from '../_store/getters';
import mutations from '../_store/mutations';

const state = {
  tokenUser: sessionStorage.getItem("tokenUser") ? sessionStorage.getItem("tokenUser") : null,
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
