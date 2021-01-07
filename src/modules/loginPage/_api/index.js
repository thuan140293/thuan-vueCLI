import axios from 'axios';

const login = async (request) => {
    return axios.post(`${process.env.VUE_APP_API_ROOT}/api/login`, request);
}
  
export default {
    login
}