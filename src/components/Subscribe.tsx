import React from 'react';
import { Link } from 'react-router-dom';
import subscribe from '../assets/subscribe.avif';
import { useNavigate } from 'react-router-dom';

const Subscribe = () => {
  const [formData, setFormData] = React.useState({
    email: '',
  });
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    navigate('/feedback');
  };

  return (
    <div>
      <div 
        className='fixed flex justify-center items-center inset-0 bg-black bg-opacity-50 p-8 text-center md:text-start'
      >
        <Link to='/'
          className='px-4 py-2 rounded-full bg-white absolute top-2 right-2 z-50 text-xl '
        >X</Link>
        <div className='subscribe bg-white relative gap-2 rounded-lg flex flex-col md:flex-row w-full max-w-4xl'>
          <div className='flex justify-center items-center w-full md:w-1/2'>
            <img src={subscribe} alt="subscribe image" className='object-cover w-full h-full md:h-auto rounded-t-lg md:rounded-none md:rounded-l-lg' />
          </div>
          <div className='flex flex-col p-4 w-full md:w-1/2'>
            <h1 className='text-3xl font-bold font-mono mx-auto pb-1 mb-1 text-green-500 border-b-4 border-green-500'>
              Wellness Hub
            </h1>
            <h2 className='text-2xl font-bold py-2'>Your go-to source for health and wellness updates</h2>
            <p className='text-xl'>Get the latest health and wellness information delivered to your inbox weekly.</p>
            <form className='flex flex-col md:flex-row py-4 gap-4' onSubmit={handleSubmit}>
              <input
                type='email'
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder='Enter your email'
                className='p-2 border border-gray-300 rounded-md flex-grow outline-none hover:border-green-500'
              />
              <button
                type='submit'
                className='bg-green-600 hover:bg-green-800 text-white p-2 rounded-md'
              >
                Subscribe
              </button>
            </form>
            {error && <p className='text-red-500'>{error}</p>}
            <p className='text-base'>
              Your privacy matters to us. Information you submit on this website may be stored on servers outside the EU. If you do not consent to this, please refrain from providing your information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;