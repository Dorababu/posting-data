import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
    //baseURL : 'http://demo3174074.mockable.io'
});

export default instance