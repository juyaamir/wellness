
import { navbar} from '../data/data.tsx'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
const Header = () => {
  return (
    <header className='min-h-16 '>
      <div className='flex flex-wrap justify-between items-center gap-2 p-4'>
        <div className='flex  justify-center items-center'>
          <Link to ='/'><img src={logo} alt='logo' className='h-14 ' /></Link>
          <p className='font-bold text-green-600 text-lg '>Wellness <span className='text-cyan-600'>Hub</span></p>
        </div>
        
        
        <p className='lg:text-4xl md:text-2xl sm:text-xl text-green-700'>Empower Your Health Journey</p>
        <div className='flex '>
          <input type='search' placeholder='Search Wellness Hub...' 
          className='px-2 py-1 border-2 border-gray-300 rounded-tl-md rounded-bl-md hover:outline-green-400 hover:shadow-lg search-input' />
          <button 
          className=' px-2 bg-green-600 hover:bg-green-800 text-white py-1 border-none rounded-tr-md rounded-br-md'>Search</button>
        </div>
        <div>
          <button className='bg-green-600 hover:bg-green-800 text-white px-2 py-1 rounded-md'>Sign In</button>
          {/* <button className='bg-green-600 hover:bg-green-800 text-white px-2 py-1 rounded-md'>Sign Up</button> */}
        </div>
      </div>
      <nav className='flex  flex-wrap justify-center gap-8 items-center bg-slate-100 text-green-600 border-y border-slate-400 '>
          {
            navbar.map((item) => (
              <Link key={item.path} to={item.path} className='p-2 hover:bg-green-800 hover:text-white md:text-xl lg:text-2xl'>
                {item.title}
              </Link>

            ))
          }
      </nav>
      </header>
  )
}

export default Header