import { Link } from "react-router-dom";
import health from '../assets/healts.jpg';
import ImageSlider from '../components/ImageSlider';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.avif';
import s3 from '../assets/s3.avif';
import s4 from '../assets/s4.avif';
import s5 from '../assets/s5.avif';
import s6 from '../assets/s6.avif';
import s7 from '../assets/s7.avif';

const images = [s1, s2, s3, s4, s5, s6, s7];
const Home = () => {

  const healthTopic = {
    width: '100%',
    maxWidth: '600px'
  }
  return (
    <div className="flex flex-col gap-6 items-center p-4">
      <ImageSlider images={images} />
      <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-center text-green-700 mb-4">Welcome to the Wellness Hub</h1>
      <p className="text-lg lg:text-2xl md:text-xl text-center text-gray-700 max-w-2xl">
        Welcome to the Wellness Hub, your go-to resource for health and wellness information. Explore a wide range of topics and receive personalized recommendations using our My Health tool, available in the My Health section.
      </p>
      <Link to ='/my-health' className="bg-green-500 hover:bg-green-700 hover:scale-105 px-4 py-1 md:py-2 rounded-lg text-white md:text-xl my-4">
        Get Started
      </Link>
      <div>
        <Link to='/topics' className="border border-gray-300 flex gap-4 flex-wrap sm:flex-nowrap hover:opacity-50 transition duration-300 ease-in-out transform" style={healthTopic}>
          <img src={health} alt="Wellness Hub" className="sm:h-36 " />
            <p><span className="block text-cyan-600 font-bold text-xl hover:text-red-500">Health Topics</span>Discover comprehensive information on symptoms, causes, treatments, and prevention strategies for a wide array of diseases, conditions, and wellness topics.</p>
        </Link>
         
      </div>
    </div>
  );
};

export default Home;