import axios from 'axios';

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '51661d25f7e094672dd12de1b5639570',
        language:'es-Es'
    }

})

export default movieDB;