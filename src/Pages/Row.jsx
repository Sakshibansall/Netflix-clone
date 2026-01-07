import React from 'react'

function Row ({ title, movies }) {


  return (
    <div className='mb-4 md:mb-7 ml-5 md:ml-7 lg:ml-16'>
      <h2 className='text-white md:mb-2 text-sm md:text-xl lg:text-2xl font-bold'>{title}</h2>

      <div className='flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-3'>
        {movies.map(movie => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className='movies
              rounded
              snap-start
              cursor-pointer
            '
          />
        ))}
      </div>
    </div>
  )
}

export default Row
