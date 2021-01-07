import _ from 'lodash'

const getCurrentUser = (state) => {
  var data = {};
  if (state.currentUser) {
    data = _.cloneDeep(JSON.parse(state.currentUser).username);
  }
  return data;
};

export default {
    getCurrentUser,
};
