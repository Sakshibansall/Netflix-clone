import { useState, useEffect } from "react";

function TrendingSlider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 mt-10 md:mt-14 lg:mt-20">
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-6">
        Trending Now
      </h1>

      <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 sm:gap-5 md:gap-6 lg:gap-8 scrollbar-hide pb-4">
        {movies.length === 0 && (
          <p className="text-white">No movies found.</p>
        )}

        {movies.map((mov) => (
          <img
            key={mov.id}
            className="flex-shrink-0 snap-start rounded-lg
                       w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60 
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
