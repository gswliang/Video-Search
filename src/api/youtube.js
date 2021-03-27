import axios from 'axios';

const KEY = 'AIzaSyDHP6Xx7SFo2azMkv3uJRahOjwUXfg4Xy8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 10,
        key: KEY
    }
});
