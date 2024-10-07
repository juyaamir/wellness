import { useState } from 'react';
import { navbar } from '../data/data.tsx';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const handleToggle = () => {
    setShowNav(!showNav);
  };
  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  }

  return (
    <header className='min-h-16 '>
      <div className='desktop-nav '>
        <div className='flex flex-wrap justify-between items-center gap-2 p-4'>
        <div className='flex justify-center items-center'>
          <Link to='/'><img src={logo} alt='logo' className='h-14' /></Link>
          <p className='font-bold text-green-600 text-lg'>Wellness <span className='text-cyan-600'>Hub</span></p>
        </div>
        <p className='lg:text-4xl md:text-2xl sm:text-xl text-green-700 header-message'>Empower Your Health Journey</p>
        <div className='hidden md:flex'>
          <input type='search' placeholder='Search Wellness Hub...' className='px-2 py-1 border border-gray-300 hover:outline-green-400 hover:shadow-lg search-input' />
          <button className='px-2 bg-green-600 hover:bg-green-800 text-white py-1 border-none rounded-tr-md rounded-br-md'>Search</button>
        </div>
        <div className='hidden md:flex'>
          <button className='bg-green-600 hover:bg-green-800 text-white px-2 py-1 rounded-md'>Sign In</button>
        </div>
        </div>
      <nav className=' flex  justify-center gap-8 items-center bg-slate-100 text-green-600 border-y border-slate-400 '>
        {navbar.map((item) => (
          <Link key={item.path} to={item.path} className='p-2 hover:bg-green-800 hover:text-white md:text-xl lg:text-2xl'>
            {item.title}
          </Link>
        ))}
      </nav>
      </div>
      
      {/* Mobile Navbar */}
      <nav className='md:hidden  top-0 left-0 right-0 z-50 bg-white shadow-l'>
      
          <Link to='/' className='flex items-center justify-center pt-2'><img src={logo} alt='logo' className='h-14 ' />
          <p className='font-bold text-green-600 text-lg'>Wellness <span className='text-cyan-600'>Hub</span></p></Link>
        
        <div className='flex  justify-between  '>
            <button className='px-4 py-2 rounded-md  text-2xl ' onClick={handleToggle}>
              {showNav ? <GrClose size={30} /> : <RxHamburgerMenu size={36} />}
            </button>
            <button className='focus:bg-gray-200 px-4 py-2 ' onClick={handleSearchToggle}>Search</button>
            <button className='px-4 py-2 ' onClick={() => setAuthenticated(true)}>
              {
                authenticated ?  'Hi, Juya': <CgProfile size={36} className='' /> 
              }
            </button>
        </div>
        {
          showSearch && (
            <div className='flex py-2 px-4 bg-gray-200 justify-center'>
              <input
                type="search"
                placeholder='Search Wellness Hub...'
                className='flex-grow  max-w-xs p-2 outline-none border border-gray-400 shadow-md focus:border-green-400 search-input '
              />
              <button className='bg-green-500 hover:bg-green-700 text-white font-bold p-2 '>
                Go
              </button>
            </div>
          )
        }
        {showNav && (
          <div className='flex flex-col items-center bg-gray-100 text-green-600 border-t border-slate-400 transition-all duration-300 ease-in-out border-y border-y-gray-300 shadow-md'>
            {navbar.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setShowNav(false)} className='p-4 w-full text-center hover:bg-green-800 hover:text-white md:text-xl'>
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;