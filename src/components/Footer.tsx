
import { Link } from 'react-router-dom'
import { footerLinks } from '../data/data'

const Footer = () => {
  return (
      <footer className=' mt-8'>
        <div className='flex flex-wrap justify-around items-center border border-b-gray-300 p-1'>  
   {/*      <p><Link to='/terms' className='hover:text-green-400'>Terms & Conditions</Link></p> */}
          <form  className='flex'>
            <input type='email' placeholder='Enter your email' 
            className='px-2 py-1 border-2 border-gray-300 rounded-tl-md rounded-bl-md hover:outline-green-400 subscribe-input ' />
            <button type='submit' 
            className='px-2 bg-green-600 hover:bg-green-800 text-white py-1 border-none rounded-tr-lg rounded-br-lg'>Subscribe</button>
          </form>
            
            <div className='flex gap-2 flex-wrap'>
          
              
            <p className='flex items-center mx-auto font-bold text-gray-600 '>Follow Us</p>
            <div className='flex justify-between  mx-auto '>
              {
              footerLinks.map((item) => (
                <Link key={item.path} to = {item.path} target='_blank' rel='noreferrer' className='hover:scale-125 duration-500 transition-transform '>
                  <img src={item.source} alt={item.alt} className='h-10 w-10' />
                </Link>
              ))
            }
            </div>

          </div>
        </div>
        <p className='text-sm md:text-lg text-center p-1'>&copy; 2024 | Designed & Coded with ❤️ by Amir Muhammad Juya</p>
      </footer>
  )
}

export default Footer