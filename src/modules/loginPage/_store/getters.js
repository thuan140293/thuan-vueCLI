import _ from 'lodash'

const getCurrentUser = (state) => {
  var data = {};
  if (state.currentUser) {
    data = _.cloneDeep(state.currentUser);
  }
  return data;
};

export default {
    getCurrentUser,
};
