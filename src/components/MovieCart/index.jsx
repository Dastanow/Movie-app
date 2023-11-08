import React from 'react'
import './movieCart.scss'

const MovieCart = ({ data }) => {
  return (
  <div className='movie_'>
      <div className='movie'>
      <div className='img_muvie'>
        <img src={data?.Poster} alt="" />
      </div>
      <h1>{data?.Title}</h1>
      <p>{data?.Year}</p>
    </div>
  </div>
  )
}

export default MovieCart