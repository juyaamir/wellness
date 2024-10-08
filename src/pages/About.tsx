
import { Link } from 'react-router-dom';
import teamImage from '../assets/team.avif'; // Example image, replace with your actual image

const About = () => {
  return (
    <div className='p-8'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-500 text-center mb-4'>About Us</h1>
      <p className='text-lg mb-4'>
        Welcome to Wellness Hub, your go-to source for health and wellness updates. Our mission is to empower your health journey by providing the latest information and resources on wellness.
      </p>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-500 mb-2'>Our Mission</h2>
      <p className='text-lg mb-4'>
        At Wellness Hub, we aim to inspire and educate individuals to lead healthier lives. We believe that wellness is a holistic journey that encompasses physical, mental, and emotional well-being.
      </p>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-500 mb-2'>Our Vision</h2>
      <p className='text-lg mb-4'>
        Our vision is to create a world where everyone has access to the knowledge and tools they need to achieve optimal health and wellness.
      </p>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-500 mb-2'>Our Values</h2>
      <ul className='list-disc list-inside mb-4'>
        <li className='text-lg'>Integrity: We provide accurate and reliable information.</li>
        <li className='text-lg'>Empowerment: We empower individuals to take control of their health.</li>
        <li className='text-lg'>Community: We foster a supportive and inclusive community.</li>
      </ul>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-500 mb-2'>Meet Our Team</h2>
      <div className='flex flex-col md:flex-row items-center mb-4'>
        <img src={teamImage} alt='Our Team' className='w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4' />
        <p className='text-lg'>
          Our team is composed of dedicated professionals who are passionate about health and wellness. We work tirelessly to bring you the best content and resources to support your wellness journey.
        </p>
      </div>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-500 mb-2'>Contact Us</h2>
      <p className='text-lg mb-4'>
        Have questions or feedback? We'd love to hear from you! Reach out to us at <Link to='/contact' className='text-green-600 underline'>our contact page</Link>.
      </p>
    </div>
  );
};

export default About;