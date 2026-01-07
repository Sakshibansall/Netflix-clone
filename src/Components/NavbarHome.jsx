import  { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import bell from '../assets/bel.png'
import profile from "../assets/profile.jpg"

const navLinkClass = ({ isActive }) =>
  `transition hover:text-white ${
    isActive ? 'text-white font-semibold' : 'text-[#DDDAD0]'
  }`

function Home () {
  const [open, setOpen] = useState(false)

  return (
    <nav className='sticky top-0 z-50 bg-black '>
      <div className='h-[50px] lg:h-[90px] py-9 flex items-center justify-between px-3  md:px-7 lg:px-10 '>
        {/* LEFT */}
        <div className='flex items-center'>
          <Link to='/'>
            <img src={logo} alt='logo' className='h-5 md:h-7 lg:h-9 lg:mr-8 ' />
          </Link>

          {/* Desktop Links */}
          <div className='hidden lg:flex gap-4 xl:gap-6 text-lg font-semibold whitespace-nowrap'>
            <NavLink to='/home' className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to='/shows' className={navLinkClass}>
              Shows
            </NavLink>
            <NavLink to='/movie' className={navLinkClass}>
              Movies
            </NavLink>
            <NavLink to='/games' className={navLinkClass}>
              Games
            </NavLink>
            <NavLink to='/list' className={navLinkClass}>
              My List
            </NavLink>
            <NavLink to='/news' className={navLinkClass}>
              New & Popular
            </NavLink>
          </div>

          {/* Mobile Dropdown */}
          <div className='lg:hidden relative'>
            <button
              onClick={() => setOpen(!open)}
              className='text-[#e7e7e7] hover:text-white flex items-center ml-2 gap-1'
            >
              Browse <span>▾</span>
            </button>

            {open && (
              <div className='absolute top-7 left-0 w-56 bg-black text-white flex flex-col gap-4 p-4 text-lg text-center'>
                {['Home', 'Shows', 'Movie', 'Games', 'List', 'News'].map(
                  item => (
                    <Link
                      key={item}
                      to={`/${item}`}
                      onClick={() => setOpen(false)}
                      className='hover:text-gray-300'
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className='flex items-center gap-4 text-[#e7e7e7]'>
          {/* Search not visible */}
          <img
            src={search}
            alt='search'
            className='w-8 hidden md:block cursor-pointer'
          />

          {/* Hide on small screens */}
          <NavLink
            to='/children'
            className={`${navLinkClass} text-lg hidden md:block`}
          >
            Children
          </NavLink>

          <img src={bell} alt='bell' className='w-7 ' />

          <div className='flex items-center gap-2'>
            <img src={profile} alt='profile' className='md:w-8  w-7 rounded' />
            <span className='hidden md:block'>▾</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Home
