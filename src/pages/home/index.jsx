import React from 'react'
import './home.scss'
import Heder from '../../components/Heder'
import Footer from '../../components/Footer'
import MovieCart from '../../components/MovieCart'


const Home = () => {
  return (
    <div>
        <Heder/>
        <div className='cart_item'>
           <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        </div>
          <h1 style={{color: '#fff'}}>show</h1>
        <div className='item_cart'>
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
          
        </div>
       
        <Footer/>
    </div>
  )
}


export default Home