import { Link } from "react-router-dom"
import instagram from '../assets/instagram.jpg'
import { LuInstagram } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const navigate = useNavigate();

/*   setTimeout(() => {
    navigate('/');
  }, 5000); */
  return (
    <div className='fixed flex justify-center items-center inset-0 bg-black bg-opacity-50 p-8 text-center md:text-start overflow-auto'>
             <Link to='/'
                className='px-4 py-2 rounded-full bg-white absolute top-2 right-2 z-50 text-xl '
            >X</Link>
          <div className='subscribe bg-white relative gap-1 rounded-lg flex flex-col-reverse  md:flex-row p-2 overflow-auto'>

            <div className='flex justify-center items-center'>
              <img src={instagram} alt="feedback image" className='object-cover md:h-full' />

            </div>
            <div className='flex flex-col  gap-4 items-center justify-center '>

              <h1 className='text-3xl font-bold font-mono mx-auto pb-1 mb-1 text-green-500 border-b-4 border-green-500 text-center'>
                Wellness Hub
              </h1>
              <h2 className='text-4xl font-bold py-2'>Thanks for subscribing</h2>
              <p className='text-xl'>Look out for our email.
              Can’t wait? Check us out on Instagram.</p>

                <Link to = 'https://www.instagram.com/' className='bg-green-600 hover:bg-green-800 text-white p-2 rounded-md my-4 flex items-center justify-center gap-2' 
                target="_blank" rel= "noreferrer"
                >Follow US <LuInstagram /></Link>
           
            </div>
          </div>
        </div>
  )
}

export default Feedback