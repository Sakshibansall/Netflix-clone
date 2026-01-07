import React, { useEffect, useState } from 'react'
import bannerVideo from './BannerVideos'
import info from '../assets/info_icon.png'
const TMDB_IMG = import.meta.env.VITE_IMG_URL
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

function Banner () {
  const [current, setCurrent] = useState(bannerVideo[0])
  const [showVideo, setShowVideo] = useState(false)
  const [poster, setPoster] = useState(null)

  // poster fetch
  async function fetchPosterByTitle (title) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`
    )
    const data = await res.json()

    // first matching movie ka poster
    if (data.results && data.results.length > 0) {
      return `${TMDB_IMG}${data.results[0].backdrop_path}`
    }

    return null
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(
        prev =>
          bannerVideo[(bannerVideo.indexOf(prev) + 1) % bannerVideo.length]
      )
      setShowVideo(false) //jabh poster change ho
      setTimeout(() => setShowVideo(true), 2000)
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    
    fetchPosterByTitle(current.title).then(img => {
      setPoster(img)
    })
    
  }, [current.title])

  // first load delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='banner'>
      {/* POSTER */}
      {!showVideo && (
        <img
          src={poster || current.poster}
          alt={current.title}
          className='absolute inset-0 w-full h-full object-cover'
        />
      )}

      {/* VIDEO */}
      {showVideo && (
        <iframe
          src={`https://www.youtube.com/embed/${current.videoId}?autoplay=1&mute=1&controls=0`}
          allow='autoplay;fullscreen'
        ></iframe>
      )}
      {/* OVERLAY TITLE */}
      <div className='absolute top-15 left-8 md:top-30 md-left-30 lg:top-55 lg:left-18'>
        <h1 className='mb-3 md:mb-5'>
          <img src={current.img} className='w-30 md:w-55 lg:w-100' alt='' />
        </h1>

        <div
          className='text-white
          hidden
          lg:block
            lg:w-[640px]
            lg:text-xl
            mb-6'
        >
          {current.description}
        </div>

        <div className='flex '>
          <button className='bg-white px-3  md:px-5 rounded text-sm md:text-lg lg:text-2xl lg:px-11 lg:py-2 font-bold mr-3 py-1 cursor-pointer hover:bg-[#ffffffbf] '>
            Play
          </button>

          <button className='bg-[#6d6d6eb3] hover:bg-[#6d6d6e66] transition px-3 md:px-5 py-1 flex items-center rounded text-sm md:text-lg  text-white cursor-pointer lg:px-11 lg:text-2xl'>
            <img src={info} className='w-6 lg:w-9 ' alt='' /> More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
