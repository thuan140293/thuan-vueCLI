import axios from 'axios';

const getData = async (search, page, limit, sortBy, sortDirection) => {
    console.log(process.env.VUE_APP_API_ROOT)
    return axios.get(`${process.env.VUE_APP_API_ROOT}/listUser?search=${search}&page=${page}&limit=${limit}&sortBy=${sortBy}&order=${sortDirection}`);
}

const getDataNoPaging = async (search) => {
    return axios.get(`${process.env.VUE_APP_API_ROOT}/listUser?search=${search}`);
}

const deleteData = async (request) => {
    return axios.delete(`${process.env.VUE_APP_API_ROOT}/listUser/${request}`);
}
  
export default {
    getData,
    deleteData,
    getDataNoPaging
}