import React, { useEffect, useState } from 'react'
import Row from '../Pages/Row'
import Top10 from '../Pages/Top10Row'

function HomeRow () {
  const [categories, setCategories] = useState({
    allMovies: [],
    trending: [],
    japanese: [],
    korean: [],
    thrillers: []
  })

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [allRes, trendingRes, jpRes, krRes, thrilRes] = await Promise.all(
          [
            // all movies
            fetch(
              `https://api.themoviedb.org/3/discover/tv?api_key=${
                import.meta.env.VITE_TMDB_API_KEY
              }`
            ),
            // trending movies
            fetch(
              `https://api.themoviedb.org/3/trending/tv/day?api_key=${
                import.meta.env.VITE_TMDB_API_KEY
              }`
            ),
            // japense movie
            fetch(
              `https://api.themoviedb.org/3/discover/movie?api_key=${
                import.meta.env.VITE_TMDB_API_KEY
              }&with_genres=14,18&with_original_language=ja&region=JP`
            ),
            // korean
            fetch(
              `https://api.themoviedb.org/3/discover/movie?api_key=${
                import.meta.env.VITE_TMDB_API_KEY
              }&with_original_language=ko&region=KR&with_genres=18,12,28`
            ),
            // thriller
            fetch(
              `https://api.themoviedb.org/3/discover/movie?api_key=${
                import.meta.env.VITE_TMDB_API_KEY
              }&with_genres=53`
            )
          ]
        )

        const [allMovies, trending, japanese, korean, thrillers] =
          await Promise.all([
            allRes.json(),
            trendingRes.json(),
            jpRes.json(),
            krRes.json(),
            thrilRes.json()
          ])

        setCategories({
          allMovies: allMovies.results,
          trending: trending.results,
          japanese: japanese.results,
          korean: korean.results,
          thrillers: thrillers.results
        })
      } catch (error) {
        console.error('error', error)
      } finally {
        setLoading(false)
      }
    }
    fetchMovies()
  }, [])

  if (loading) return <p>Loading....</p>
  return (
    <div className='relative mt-4 lg:-mt-24 z-30'>
      <Row title='⭐ Only on Netflix ' movies={categories.allMovies} />
      <Row title='🔥 Trending Now' movies={categories.trending} />
      <Top10 title='Top 10 Movies' movies={categories.trending} />
      <Row title='🇯🇵 Japanese Anime Shows' movies={categories.japanese} />
      <Row title='🇰🇷 Korean Tv Shows' movies={categories.korean} />
      <Row title='🔪 Action Thrillers' movies={categories.thrillers} />
    </div>
  )
}

export default HomeRow
