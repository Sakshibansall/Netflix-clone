import logo from '../assets/logo.png'
import "./style.css"
function Navbar() {
  return (
    <header>
      <nav className=' navbar flex justify-between items-center  lg:px-30 md:px-10 sm:px-7  py-7 absolute top-0 left-0 w-full z-50'>
        {/* Logo */}
        <div><img src={logo} alt="logo" className='logo h-10 sm:h-8 md:h-8 lg:h-10' /></div>

        {/* Languages */}
        <div className=' flex items-center space-x-4'>

          <select className="lang px-4 md:px-3  py-2 rounded border border-gray-400 cursor-pointer text-white font-semibold text-lg" id="#">
           
            <option className='text-black' lang="en" value="en-IN">English</option>
            <option className='text-black' lang="hi" value="hi-IN">हिन्दी</option>
          </select>

          {/* Sign up btn */}
          <button className='btn text-white bg-[#e50914] px-5 py-2 font-semibold cursor-pointer md:text-lg lg:text-xl hover:bg-red-700 transition duration-400 rounded'>Sign In</button>
        </div>
      </nav>

    </header>

  )
}

export default Navbar
