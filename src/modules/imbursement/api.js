import axios from 'axios';

const api = axios.create(({
    baseURL: 'https://prod-api.bookzpro.com/api/'
}));

export default api;
