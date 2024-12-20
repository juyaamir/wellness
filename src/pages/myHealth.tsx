import { useState, useEffect} from "react"
import doc1 from '../assets/doc1.png'
import health from '../assets/health.png'
import axios from 'axios'
import { RotatingLines } from 'react-loader-spinner'
import { Link } from "react-router-dom"

interface Topics {
  sex: string;
  age: number;
  pregnant: number;
  tobaccoUse: number;
  sexuallyActive: number;
  
};
interface Topic {
  Type: string;
  Id: string;
  Title: string;
  TranslationId: string;
  TranslationTitle: string;
  Categories: string;
  ImageUrl: string;
  Content: string;
}
const Categories = () => {
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [isPregnant, setIsPregnant] = useState(false);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [formData, setFormData] = useState<Topics>({
    sex: '',
    age: 0,
    pregnant: 0,
    tobaccoUse: 0,
    sexuallyActive: 0,

  });

  useEffect(() => {
    if(formData.sex  === 'female') {
      setIsPregnant(true);
    } else {
      setIsPregnant(false);
    }
  }, [formData.sex]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await getData();
    // go to the topics section
    const topicsSection = document.getElementById('topics-section');
    topicsSection?.scrollIntoView({behavior: 'smooth', block: 'end'});

  }

    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_MY_HEALTH_API}?age=${formData.age}&sex=${formData.sex}&pregnant=${formData.pregnant}&sexuallyActive=${formData.sexuallyActive}&tobaccoUse=${formData.tobaccoUse}`);
        const topicsData: Topic[] = response.data.Result.Resources.all.Resource;
        console.log(topicsData);
        setTopics(topicsData);
      } catch (error) {
        if( error instanceof Error) {
          setError(`Error: ${error.message}`);
        } else {
          setError(`An unknown error occurred`);
        }
      } finally {
        setLoading(false);
      }
    };

    if (loading) {
      return <div className='flex justify-center items-center pt-20'>
      <RotatingLines
              visible={true}
              width="96"
              strokeColor="green"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
        />
      </div>
    };
  if (error) {
    return <div>{error}</div>
  };
  if(!topics) {
    return <div>No Topics Available!</div>
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-wrap md:flex-nowrap justify-between bg-gray-100 pt-8 md:px-4">
        <div className="my-health p-2">
          <h1 className="lg:text-3xl md:text-2xl font-bold sm:text-xl mb-4">What is My HealthFinder?</h1>
          <p className="md:text-xl lg:text-2xl">My HealthFinder is a tool that provides personalized health recommendations based on your answers to a few simple questions. The tool is designed to help you find the information you need to stay healthy and make informed decisions about your health.</p>
        </div>
        <div className="">
          <img src={doc1} alt="a doctor and a patient " className="md:h-40 object-cover" />
        </div>
      </div>
      <div className="bg-green-600 flex flex-wrap md:flex-nowrap gap-2 justify-around md:p-6">
        <div className="bg-gray-100 rounded-md md:p-4 shadow-2xl my-health">
          <h2 className="text-2xl font-bold text-center text-green-700 border-b-2 p-4 border-gray-400">Personalized Health Recommendation Tool</h2>
          <p className="text-center ">Answer a few simple questions to get personalized health recommendations</p>
          <form className="flex flex-col gap-3 p-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="age">Your Age: </label>
              <input type="number" name="age" id="age" onChange={handleChange} className="border border-gray-400 rounded-md w-16" max='200' min='1'  />
            </div>
            <div className="flex gap-4">
              <label >Your Gender: </label>
              <div>
                <input type="radio" name="sex" value="male" id="male" checked={formData.sex === 'male'}
                onChange={handleChange} />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input type="radio" name="sex" value="female" id="female" checked={formData.sex === 'female'} 
                onChange={handleChange}/>
                <label htmlFor="female">Female</label>
              </div>
            </div>
            {
              isPregnant && 
              <div>
              <label htmlFor="pregnant">Are you pregnant? </label>
              <select name="pregnant" id="pregnant" onChange={handleChange} className="border border-gray-400 rounded-md">
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select>
            </div>
            }

            <div>
              <label htmlFor="tobaccoUse">Do you use tobacco? </label>
              <select name="tobaccoUse" id="tobaccoUse" onChange={handleChange} className="border border-gray-400 rounded-md">
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select>
            </div>
            <div>
              <label htmlFor="sexuallyActive">Are you sexually active? </label>
              <select name="sexuallyActive" id="sexuallyActive" onChange={handleChange} className="border border-gray-400 rounded-md">
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select>
            </div>
            <div className="mt-3 mx-auto">
              <button type="submit" className="bg-green-600 hover:bg-green-800 text-white rounded-md p-2">Get Recommendations</button>
            </div>
          </form>
        </div>

        
        <div className="flex flex-col items-center justify-between bg-gray-100 rounded-md  shadow-2xl hidden md:block ">
          <h1 className="text-2xl font-bold text-green-700 p-4 text-center">Health is Wealth and Brings Happiness</h1>
          <img src={health} alt="Health, Wealth, and Happiness" className="md:h-80 object-cover" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4" id="topics-section">
      {
      topics.map((topic) => (
          <div key={topic.Id} className="w-56 text-cyan-700 hover:underline border border-gray-300 rounded-lg p-1
          hover:bg-green-700 hover:text-white">
            <Link to={`/topic/${topic.Id}`} >
            <img src={topic.ImageUrl} alt={topic.Categories} />
              <h3 className="text-center p-1">{topic.Title}</h3>
            </Link>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Categories