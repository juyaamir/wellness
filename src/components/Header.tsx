import { useState } from 'react';
import { navbar } from '../data/data.tsx';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const handleToggle = () => {
    setShowNav(!showNav);
  };

  return (
    <header className='min-h-16'>
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
      <nav className='hidden md:flex flex-wrap justify-center gap-8 items-center bg-slate-100 text-green-600 border-y border-slate-400 desktop-nav'>
        {navbar.map((item) => (
          <Link key={item.path} to={item.path} className='p-2 hover:bg-green-800 hover:text-white md:text-xl lg:text-2xl'>
            {item.title}
          </Link>
        ))}
      </nav>
      {/* Mobile Navbar */}
      <nav className='md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-lg'>
      <div className='flex justify-start items-center ml-2 mt-2'>
          <Link to='/'><img src={logo} alt='logo' className='h-14' /></Link>
          <p className='font-bold text-green-600 text-lg'>Wellness <span className='text-cyan-600'>Hub</span></p>
        </div>
        <div className='flex  justify-between'>
            <button className='px-4 py-2 rounded-md  text-2xl' onClick={handleToggle}>
              {showNav ? <span>&#10005;</span> : <span>&#9776;</span>}
            </button>
            <div className='flex'>
              <input type='search' placeholder='Search Wellness Hub...' className='' />
              <button className=''>S</button>
            </div>
            <button className='px-4 py-2'>Sign In</button>
        </div>
        {showNav && (
          <div className='flex flex-col items-center bg-slate-100 text-green-600 border-t border-slate-400 transition-all duration-300 ease-in-out'>
            {navbar.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setShowNav(false)} className='p-4 w-full text-center hover:bg-green-800 hover:text-white md:text-xl lg:text-2xl'>
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