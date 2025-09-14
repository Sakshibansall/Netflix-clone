import React from 'react'
import CustomBtn from './CustomBtn'

function Footer() {
  return (
    <div className='mt-20 px-4 sm:px-6 lg:px-20'>
      <div className='flex flex-col justify-center mb-5 text-center '>
        <h1 className='text-white text-xl sm:text-xl md:text-2xl lg:text-xl font-semibold mb-4'>
          Ready to watch? Enter your email to create or restart your membership.
        </h1>

        <form
          action='#'
          className='flex flex-col sm:flex-row items-center justify-center sm:items-stretch gap-2  sm:gap-0'
        >
          <input
            className=' me-3 px-4 sm:px-4 w-full max-w-2xl py-3 text-sm sm:text-base md:text-lg font-medium border border-gray-500 rounded sm:rounded-r-none focus:outline-none focus:border-white bg-black/40 placeholder-gray-300'
            type='email'
            placeholder='Email address'
          />
          <CustomBtn
            text={'Get Started >'}
            onClick={() => alert('Signed In!')}
            className='mt-2 sm:mt-0 sm:rounded-l-none'
          />
        </form>
      </div>

      <div className=' lg:ps-30'>
        <div className='text-left mt-18'>
          <span className='text-gray-300 text-lg'>
            Questions? Call 000-800-919-1743
          </span>
        </div>

        <div className='mt-13 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 text-gray-300 lg:text-lg md:text-lg text-sm sm:text-base'>
          {[
            'FAQ',
            'Investor Relations',
            'Privacy',
            'Speed Test',
            'Help Centre',
            'Jobs',
            'Cookie Preferences',
            'Legal Notices',
            'Account',
            'Ways to Watch',
            'Corporate Information',
            'Only on Netflix',
            'Media Centre',
            'Terms of Use',
            'Contact Us'
          ].map((item, index) => (
            <a href="#" key={index} className='underline text-gray-300'>{item}</a>
          ))}
        </div>

        <div className="flex items-center mt-13">
          {/* Language Selector */}
          <select
            className="px-3 sm:px-3 py-1 sm:py-2 rounded border border-gray-400 cursor-pointer text-white font-medium text-sm sm:text-base md:text-lg bg-black/50"
          >
            <option className="text-black" lang="en" value="en-IN">
              English
            </option>
            <option className="text-black" lang="hi" value="hi-IN">
              हिन्दी
            </option>
          </select>
        </div>

        <div className='text-left mt-10'>
          <span className='text-gray-300 text-lg'>
            Netflix India
          </span>
        </div>

        <div className='text-left mt-10'>
          <span className='text-gray-300 text-md'>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
