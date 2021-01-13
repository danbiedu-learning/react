import axios from 'axios';
import env from 'react-dotenv'

export const APICaller = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${env.ACC_KEY}`
    }
})
