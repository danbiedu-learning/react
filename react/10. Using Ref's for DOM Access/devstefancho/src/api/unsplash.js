import axios from 'axios';

export const APICaller = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_ACC_KEY}`
    }
})
