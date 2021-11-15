import axios from 'axios';

const instance = axios.create({
    baseURL: ' https://hookup-backend.herokuapp.com/'
})


export default instance;