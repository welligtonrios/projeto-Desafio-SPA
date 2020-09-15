import axios from 'axios'

const api = axios.create({
    PUBLIC_KEY: 'f395721c8a9678197e445dc3da092879',
    HASH : 'c873e15a8ca807d3232075d42403fd09',    
    baseURL: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f395721c8a9678197e445dc3da092879&hash=c873e15a8ca807d3232075d42403fd09'
});

export default api