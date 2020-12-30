import axios from 'axios';

const api = axios.create(({
    baseURL: 'https://one-start-product-suit.ue.r.appspot.com/api/'
}));

export default api;
