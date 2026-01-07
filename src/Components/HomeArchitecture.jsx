import React, { useEffect, useState } from 'react'
import Row from '../Pages/Row'

function HomeRow () {
  const [allmovies, setallMovies] = useState([])
  const [japanes,setJapanes]=useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [allRes,jpRes] = await Promise.all([
         fetch( `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`),
          fetch( `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&with_genres=16&with_original_language=ja&region=JP&with_genres=14`)
        ])
        const allData = await allRes.json()
        const jpData = await jpRes.json()
        setallMovies(allData.results);
        setJapanes(jpData.results)

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
      <Row title='Only on Netflix ' movies={allmovies} />
  
      <Row
        title='Japanese Movies'
        movies={japanes}
      />
    </div>
  )
}

export default HomeRow
