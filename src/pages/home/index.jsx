import React, { useEffect } from 'react'
import './home.scss'
import Heder from '../../components/Heder'
import Footer from '../../components/Footer'
import { useDispatch } from 'react-redux'
import { fetchAsyncAnime, fetchAsyncMovies, fetchAsyncShows } from '../../srore/slices/movieSlaise'
import MovieLising from '../../components/MovieLising'



const Home = () => {
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchAsyncMovies("star wars"));
        dispatch(fetchAsyncShows("shows"));
        // dispatch(fetchAsyncAnime("anime"))
      }, [dispatch]);
  return (
    <div>
        <Heder/>
        <h1 style={{color: '#fff'}}>Movie</h1>
        {/* <div className='item_cart'> */}
    <MovieLising />
          
        {/* </div> */}
       
        <Footer/>
    </div>
  )
}


export default Home