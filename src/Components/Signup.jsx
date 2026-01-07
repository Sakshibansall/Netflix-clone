import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import banner from '../assets/background_banner.jpg'
import CustomBtn from './CustomBtn'

function Signup () {
  return (
    <div className='w-full h-screen'>
      {/* Navbar */}
        <Navbar />

        
      {/* Banner Background */}
      <div
        className='relative flex justify-center items-center w-full h-full bg-cover bg-no-repeat bg-center shadow-[0_40px_60px_rgba(18,27,63,0.8)] px-4 sm:px-6'
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.3), rgba(0,0,0,0.2)),
                            linear-gradient(to top,rgba(0,0,0,0.6), rgba(0,0,0,0.5)),
                            url(${banner})`
        }}
      >
        {/* Signup Box */}
        <div className='relative flex flex-col w-full max-w-[450px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[450px] bg-[rgba(0,0,0,0.61)] rounded-xl shadow-lg p-6 sm:p-8 md:p-10 lg:p-12'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-9 text-center sm:text-left'>
            Sign In
          </h2>

          <form className='flex flex-col gap-4'>
            {/* Email Input */}
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              className='text-white placeholder-gray-300 p-3 sm:p-4 w-full border border-stone-500 rounded bg-transparent focus:outline-none'
            />

            {/* Password Input */}
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              className='text-white placeholder-gray-300 p-3 sm:p-4 w-full border border-stone-500 rounded bg-transparent focus:outline-none'
            />

            {/* Submit Button */}
            <CustomBtn text='Sign In' />

            <p className='text-white text-base sm:text-lg text-center cursor-pointer underline'>
              Forgot password?
            </p>

            <label className='flex items-center gap-2 text-base sm:text-lg text-white cursor-pointer'>
              <input
                type='checkbox'
                name='remember'
                className='w-4 h-4 sm:w-5 sm:h-5 cursor-pointer'
              />
              Remember me
            </label>
          </form>

          {/* Signup redirect */}
          <p className='text-neutral-400 text-sm sm:text-base mt-6'>
            New to Netflix?{' '}
            <Link to='/'>
              <span className='text-white font-semibold underline cursor-pointer'>
                Sign up now.
              </span>
            </Link>
          </p>

          {/* reCAPTCHA notice */}
          <p className='text-neutral-400 text-xs sm:text-sm mt-4'>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
