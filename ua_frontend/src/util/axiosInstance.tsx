import axios from 'axios';
const instance = axios.create({
    baseURL: "http://localhost:8080/",
    // baseURL:"https://home-furniture-store.herokuapp.com/"
}); 

export default instance;