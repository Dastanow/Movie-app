import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import movieSlaise from '../../srore/slices/movieSlaise';
import MovieCart from '../MovieCart';
import './movielising.scss'

const MovieLising = () => {
  const {movies, shows, anime} = useSelector((state) => state.movie)
  useEffect(() => {
    setTimeout(() => {
      console.log(movies);
    }, 1000)
  }, []);

  let renderMovies = "";
  let renderShows = "";
  let renderAnime = "";

  renderMovies =
  movies?.Response === "True" ? (
    movies?.Search.map((movie, index, ) => <MovieCart key={index} data={movie}/>)
  ) : (
    <div>
      <h3>{movies?.Error}</h3>
    </div>
  );
  renderShows =
  shows?.Response === "True" ? (
    shows?.Search.map((movie, index, ) => <MovieCart key={index} data={movie}/>)
  ) : (
    <div>
      <h3>{shows?.Error}</h3>
    </div>
  );
  renderAnime =
  anime?.Response === "True" ? (
    anime?.Search.map((anime, index, ) => <MovieCart key={index} data={anime}/>)
  ) : (
    <div>
      <h3>{anime?.Error}</h3>
    </div>
  );
  return (
    <div>  <div className='cart'>
      {renderMovies}  
    </div>
    <h1 style={{color: "#fff"}}>Shows</h1>
    <div className='cart'>{renderShows}</div>
    <div className='cart'>{renderAnime}</div>

    </div>
  
  )
}

export default MovieLising