import React, { useState } from 'react';

const Contact = () => {
  const [feedback, setFeedback] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    // Here you can add the logic to send the form data to your server or API
    setFeedback(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  return (
    <div className='p-8'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-500 mb-4'>Contact Us</h1>
      <p className='text-lg mb-8'>
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the form below or through our contact details.
      </p>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='w-full md:w-1/2'>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-500 mb-4'>Contact Form</h2>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Your Name'
              name = 'name'
              value={formData.name}
              onChange={handleChange}
              className='p-2 border border-gray-300 rounded-md outline-none focus:border-green-500'
            />
            <input
              type='email'
              placeholder='Your Email'
              name = 'email'
              value={formData.email}
              onChange={handleChange}
              className='p-2 border border-gray-300 rounded-md outline-none focus:border-green-500'
            />
            <textarea
              placeholder='Your Message'
              value={formData.message}
              name = 'message'
              onChange={handleChange}
              className='p-2 border border-gray-300 rounded-md outline-none focus:border-green-500 h-32'
            />
            {error && <p className='text-red-500'>{error}</p>}
            <button
              type='submit'
              className='bg-green-600 hover:bg-green-800 text-white p-2 rounded-md'
            >
              Send Message
            </button>
          </form>
        </div>
        <div className='w-full md:w-1/2'>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-500 mb-4'>Contact Details</h2>
          <p className='text-lg mb-2'>
            <strong>Address:</strong> 123 Wellness Street, Health City, HC 12345
          </p>
          <p className='text-lg mb-2'>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className='text-lg mb-2'>
            <strong>Email:</strong> juya@wellnesshub.com
          </p>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-500 mb-4 mt-8'>Our Location</h2>
          <div className='w-full h-64 bg-gray-200 rounded-md'>
            {/* Replace with an actual map embed */}
            <p className='text-center text-gray-600 p-8'>Map Placeholder</p>
          </div>
        </div>
      </div>
      {
        feedback && (
          <div className="fixed bg-black bg-opacity-70 inset-0 flex justify-center items-center">
            <div className="w-96 bg-white relative p-4 rounded-lg shadow-lg">
              <button className="absolute -top-10 -right-1 text-white py-1 px-2 rounded-full text-xl hover:text-red-500" onClick={() => setFeedback(false)}>X</button>
              <div className="flex justify-center bg-green-500 font-mono text-white items-center p-4 border-b">
                <h2 className="text-2xl font-bold text-center">Thank You!</h2>
              </div>
              <div className="p-4 text-center">
                <p className="text-lg">Your message has been sent successfully. We will get back to you shortly.</p>
                <button className="mt-4 bg-green-600 hover:bg-green-800 text-white p-2 rounded-md" onClick={() => setFeedback(false)}>Close</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Contact;