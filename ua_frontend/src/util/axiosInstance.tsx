import axios from 'axios';
const instance = axios.create({
    baseURL: "http://localhost:8900/",
    // baseURL:"https://home-furniture-store.herokuapp.com/"
}); 

export default instance;