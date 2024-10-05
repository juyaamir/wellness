import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

interface Topic {
  Id: number;
  Title: string;
}
const Blog: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://health.gov/myhealthfinder/api/v3/itemlist.json?Type=topic');
        setTopics(response.data.Result.Items.Item);
      } catch (error) {
        if (error instanceof Error) {
          setError(`Error: ${error.message}`);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  if (loading) {
    return <div>Loading...</div>
  };
  if (error) {
    return <div>{error}</div>
  };
  if(!topics.length) {
    return <div>No Topics Available!</div>
  }
  return (
    <div className='p-6'>
      <h1 className='text-xl font-bold text-gray-600 text-center'>Find Information on health and wellness!</h1>
      <div>
        {
          topics.map((topic) => (
            <Link to={`/topic/${topic.Id}`} key={topic.Id}
            className='block p-2 text-lg font-semibold hover:underline hover:text-white hover:bg-cyan-600
            hover:scale-105 transition-transform duration-500 w-max m-2 text-cyan-600'
            >
              {topic.Title}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Blog