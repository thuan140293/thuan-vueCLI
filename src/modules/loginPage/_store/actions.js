import api from '../_api/index';

const login = async (context, request) => {
  let response = await api.login(request);
  context.commit('SET_TOKEN', response.data);
};

const logout = async (context) => {
  await context.commit('REMOVE_TOKEN');
};

export default {
  login,
  logout
}