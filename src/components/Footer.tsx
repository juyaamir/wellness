
import { Link } from 'react-router-dom'
import { footerLinks } from '../data/data'
import ScrollButton from './ScrollButton'

const Footer = () => {
  return (
      <footer className=' mt-8'>
        <div className='flex flex-wrap justify-around items-center border border-b-gray-300 p-1'>             
          <div className='flex gap-2 flex-wrap p-2 '>
          
              <ScrollButton />
            <p className='flex items-center mx-auto font-bold text-gray-600  '>Follow Us</p>
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
        
        <p className='text-sm md:text-lg text-center p-2'>&copy; 2024 | Designed & Coded with ❤️ by <Link to='https://www.linkedin.com/in/amj2/' className='hover:text-green-500' target='_blank'>Amir Muhammad Juya</Link></p>
      </footer>
  )
}

export default Footer