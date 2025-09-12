import React from 'react'

function CustomBtn({text,onClick,className=""}) {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-[#e50914] font-bold font-custom  lg:text-2xl  md:text-xl sm:text-xl lg:px-6 md:px-5 sm:px-5 px-4 py-3 hover:bg-red-700 transition duration-400 rounded cursor-pointer ${className}`}>
      {text}
    </button>
  )
}

export default CustomBtn
