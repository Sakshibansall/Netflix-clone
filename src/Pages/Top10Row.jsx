import React, { useState } from 'react'
import "../index.css"
const TMDB_IMG = import.meta.env.VITE_IMG_URL

function Top10Row ({ title, movies }) {

  return (
    <section className='mb-4 md:mb-15 ml-5 md:ml-7 lg:ml-16'>
      <h2 className='text-white md:mb-4 text-sm md:text-xl lg:text-2xl font-bold'>
        {title}
      </h2>
      <div className="top10-row ">
        {movies.slice(0,10).map((movie,index)=>(
          <div className="top10-Card" key={movie.id}>
            <span className='top10-rank'>{index+1}</span>

            <img src={`${TMDB_IMG}${movie.poster_path}`} alt={movie.title}
            className='top10-poster' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Top10Row
