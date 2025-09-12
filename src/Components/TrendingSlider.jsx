import { useState, useEffect } from 'react'

function TrendingSlider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchmovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchmovies();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-15 mt-14">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
        Trending Now
      </h1>

      <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-7 scrollbar-hide">
        {movies.length === 0 && (
          <p className="text-white">No movies found.</p>
        )}

        {movies.map((mov) => (
          <img
            key={mov.id}
            className="flex-shrink-0 snap-start rounded-lg 
                       w-24 sm:w-36 md:w-44 lg:w-52 xl:w-60 me-5 
                       hover:scale-110 transition-transform duration-300"
            src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
            alt={mov.title}
          />
        ))}
      </div>
    </div>
  );
}

export default TrendingSlider;
