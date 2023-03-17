import React from 'react'
import Main from '../components/Main';
import Row from '../components/Row';
import useMovies from '../hooks/useMovies';

const Home = () => {

  const {upComing, popular, nowPlaying, topRated} = useMovies()
  return (
    <>
    <Main/>
    <Row  rowID='1'title='UpComing' movies={upComing} />
    <Row  rowID='2'title='Popular' movies={popular} />
    <Row  rowID='3'title='NowPlaying' movies={nowPlaying} />
    <Row  rowID='4'title='Top Rated' movies={topRated} /> 
    </>
  )
}

export default Home;

