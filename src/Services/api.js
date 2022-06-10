import axios from "axios";
//Base da url: https://api.themoviedb.org/3
//Url da API: /movie/550?api_key=0efcb2a7c6070e601b6440f516ececf8

//parametros da api: sessionkey: api_key=0efcb2a7c6070e601b6440f516ececf8

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;