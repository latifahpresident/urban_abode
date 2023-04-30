import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8081/",
    // baseURL:"https://urban-abode.herokuapp.com/"
});


export default instance;