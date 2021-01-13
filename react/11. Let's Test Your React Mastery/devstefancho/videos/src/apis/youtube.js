import axios from 'axios';
import env from 'react-dotenv'

// const KEY = 'AIzaSyBdx8o6HA7021MV-nsQpxbShLhOtHMtxLE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: process.env.REACT_APP_KEY
    }
})