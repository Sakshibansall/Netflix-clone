import { useState, useEffect } from 'react'
import '../Components/style.css'
import CustomBtn from './CustomBtn'

function TrendingSlider () {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        )
        const data = await res.json()
        setMovies(data.results)
      } catch (error) {
        console.error('Error', error)
      } finally {
        setLoading(false)
      }
    }
    fetchMovies()
  }, [])

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 mt-10 md:mt-14 lg:mt-20'>
      <h1 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-6'>
        Trending Now
      </h1>

      <div className='flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 sm:gap-5 md:gap-6 lg:gap-8 scrollbar-hide pb-4'>
        {movies.length === 0 && <p className='text-white'>No movies found.</p>}

        {loading
          ? [...Array(6)].map((_, i) => (
              <div
                key={i}
                className='skeleton flex-shrink-0 snap-start rounded-lg overflow-hidden
                       w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60  h-60 sm:h-72 md:h-80 lg:h-96 mr-4'
              ></div>
            ))
          : movies.map(mov => (
              <img
                key={mov.id}
                className='flex-shrink-0 snap-start rounded-lg
                       w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60 
                       hover:scale-110 transition-transform duration-300'
                loading='lazy'
                src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
                alt={mov.title}
                onClick={() => setSelectedMovie(mov)}
              />
            ))}

        {/* Modal */}
        {selectedMovie && (
          <div
            className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50'
            onClick={() => setSelectedMovie(null)}
          >
            {/* Modal content box */}
            <div
              className='relative bg-gray-900 rounded-lg p-6 w-[70%] sm:w-[65%] md:w-[50%] lg:w-[26%] max-w-3xl overflow-y-auto max-h-[90vh]'
              onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
            >   
              {/* Fixed close button */}
              <button
                className='absolute top-3 right-4 sm:top-4 sm:right-5 text-white text-5xl sm:text-6xl cursor-pointer font-bold hover:text-gray-400 transition'
                onClick={() => setSelectedMovie(null)}
              >
                ×
              </button>

              <img
                src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
                className='rounded-lg mb-4 w-full'
              />
              <h2 className='text-white text-2xl font-bold mb-2'>
                {selectedMovie.title}
              </h2>
              <p className='text-gray-400 mb-4 text-sm sm:text-base line-clamp-3'>
                {selectedMovie.overview}
              </p>

              <CustomBtn text='Get Started' />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TrendingSlider
