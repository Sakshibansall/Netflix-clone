import React from 'react'
import banner from "../assets/background_banner.jpg"
import CustomBtn from './CustomBtn.jsx'
import "./style.css";
function Hero() {
  return (
    <section className=' relative h-screen w-full   bg-cover bg-no-repeat bg-center  shadow-[0_30px_60px_rgba(18,27,63,0.8)]' style={{ backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.3), rgba(0,0,0,0.2)),linear-gradient(to top,rgba(0,0,0,0.6), rgba(0,0,0,0.7)),url(${banner})` }}>


      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4'>
        <h1 className='main-h font-extrabold text-4xl md:text-4xl lg:text-5xl sm:text-4xl '>Unlimited movies, TV <br />shows and more</h1>
        <p className='main-p mt-6 text-2xl md:font-bold'>Starts at ₹149. Cancel at any time.</p>
        <p className='main-p mt-9 text-xl font-medium'>Ready to watch? Enter your email to create or restart your membership.</p>

        {/* input and button */}
        <div className='mt-6 flex flex-col sm:flex-row gap-4  max-w-xl w-full  '>

          <input
            className='px-6 text-xl font-bold py-1 border border-grey-500  flex-1'
            type="email"
            placeholder='Email address' />

          <div className="get-btn ">
            <CustomBtn text={"Get Started >"} onClick={() => alert("Signed In!")}></CustomBtn>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero
