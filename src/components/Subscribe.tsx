import React from 'react';
import { useState } from 'react';
import subscribe from '../assets/subscribe.avif';

const Subscribe = () => {
  const [subscribed, setSubscribed] = useState(true);
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(false);
  };

  return (
    <div>
      {subscribed && (
        <div className='fixed flex justify-center items-center inset-0 bg-black bg-opacity-50 p-2 h-auto scroll-auto'>
             <button
                className='px-4 py-2 rounded-full bg-white absolute top-2 right-2 z-50 text-xl '
                onClick={handleSubscribe}
            >X</button>
          <div className='subscribe bg-white relative gap-2 rounded-lg flex flex-col md:flex-row '>

            <div className='flex justify-center items-center'>
              <img src={subscribe} alt="subscribe image" className='object-cover md:h-full' />
              {/* Desktop Close Button */}

            </div>
            <div className='flex flex-col p-4 '>

              <h1 className='text-3xl font-bold font-mono mx-auto pb-1 mb-1 text-green-500 border-b-4 border-green-500'>
                Wellness Hub
              </h1>
              <h2 className='text-2xl font-bold'>Your go-to source for health and wellness updates</h2>
              <p className='text-xl'>Get the latest health and wellness information delivered to your inbox weekly.</p>
              <form className='flex flex-col md:flex-row py-4 gap-4'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='px-2 py-1 border border-gray-300 rounded-md flex-grow outline-none hover:border-green-500'
                />
                <button
                  type='submit'
                  className='bg-green-600 hover:bg-green-800 text-white px-2 py-1 rounded-md'
                >
                  Subscribe
                </button>
              </form>
              <p className='text-base'>
                Your privacy matters to us. Information you submit on this website may be stored on servers outside the EU. If you do not consent to this, please refrain from providing your information.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscribe;