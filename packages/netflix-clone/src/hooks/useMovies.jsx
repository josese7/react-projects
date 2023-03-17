import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"



const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie ] = useState({})
    const [ moviesState, setMoviesState ] = useState({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComing: [],

    })
    const getMovies = async () =>{

        const nowPlayingPromise = await movieDB.get('/now_playing')
        const popularPromise = await movieDB.get('/popular')
        const topRatedPromise= await movieDB.get('/top_rated')
        const upCominPromise = await movieDB.get('/upcoming')
        

        const res = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upCominPromise])
      
        
        setMoviesState({
            nowPlaying: res[0].data.results,
            popular: res[1].data.results,
            topRated: res[2].data.results,
            upComing: res[3].data.results,
        })

        movieDB.get('/popular').then((response) =>{
            setMovie(response.data.results[Math.floor(Math.random() * 20)])
        })
      
       
       
       
        setIsLoading(false)
    }
    useEffect(() => {
       getMovies();
    }, [])
    return {
        ...moviesState,
        isLoading,
        movie
    }
}

export default useMovies