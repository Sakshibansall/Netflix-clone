import React, { useState } from 'react'
import banner from "../assets/background_banner.jpg"
import CustomBtn from '../Components/CustomBtn.jsx'
import "../index.css";
import { useNavigate } from 'react-router-dom';

function Hero() {
const navigate=useNavigate();

  return (
    <section
      className="relative w-full h-[600px] sm:h-[600px] md:h-screen lg:h-screen bg-cover bg-no-repeat bg-center shadow-[0_30px_60px_rgba(18,27,63,0.8)]"
      style={{
        backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.3), rgba(0,0,0,0.2)),linear-gradient(to top,rgba(0,0,0,0.6), rgba(0,0,0,0.7)),url(${banner})`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4 sm:px-6 md:px-16 lg:px-20">
        <h1 className="font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug pt-6 ">
          Unlimited movies, TV shows and more
        </h1>

        <p className="mt-2  lg:mt-4 md:mt-4 sm:mt-4 text-lg sm:text-xl md:text-2xl font-normal">
          Starts at ₹149. Cancel at any time.
        </p>

        <p className=" mt-4 lg:mt-6 md:mt-6 sm:mt-6 text-base sm:text-lg md:text-xl font-medium">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* Input and Button */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl w-full">
          <input
            className="px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg font-medium border border-gray-500 rounded flex-1 focus:outline-none focus:border-white bg-black/40 placeholder-gray-300"
            type="email"
            placeholder="Email address"
          />

          {/* Button */}
          <div className="get-btn">
            <CustomBtn
              text={"Get Started >"}
              onClick={() => navigate("/home")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
