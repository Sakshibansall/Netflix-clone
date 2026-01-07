import logo from '../assets/logo.png'
import "./style.css"
import { useLocation, useNavigate ,Link} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function Navbar() {
  const location=useLocation();
  const hidebutton=location.pathname==="/signup" || location.pathname==="/home";
  
  const navigate=useNavigate();
  return (

    <header>
      <nav className="navbar flex justify-between items-center px-7  sm:px-6 md:px-10 lg:px-25 py-6 absolute top-0 left-0 w-full z-50 ">
        {/* Logo */}
        <div>
          <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-6 sm:h-8 md:h-10 lg:h-11"
          />
          </Link>
        </div>

        {/* Right side (Language + Button) */}
        {!hidebutton && (
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Language Selector */}
          <select
            className="px-2 sm:px-3 py-1 sm:py-2 rounded border border-gray-400 cursor-pointer text-white font-medium text-sm sm:text-base md:text-lg bg-black/50"
          >
            <option className="text-black" lang="en" value="en-IN">
              English
            </option>
            <option className="text-black" lang="hi" value="hi-IN">
              हिन्दी
            </option>
          </select>

          {/* Sign In Button */}
          <button className="btn text-white bg-[#e50914] px-3 sm:px-4 md:px-5 py-1 sm:py-2 font-semibold cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl hover:bg-red-700 transition duration-300 rounded" onClick={()=>navigate("/signup")}>
            Sign In
          </button>
        </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
