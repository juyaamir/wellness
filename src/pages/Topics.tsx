import { Link } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'
import useFetchData from '../components/useFetchData'
 interface Topic {
  Id: number;
  Title: string;
} 
const Blog: React.FC = () => {
  const url = 'https://health.gov/myhealthfinder/api/v3/itemlist.json?Type=topic';
  interface ApiResponse {
    Result: {
      Items: {
        Item: Topic[];
      };
    };
  }
  
  const { data, error, loading } = useFetchData<ApiResponse>(url);
  const topics = data?.Result?.Items?.Item || [];
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
  if(!topics.length) {
    return <div>No Topics Available!</div>
  }

  return (
    <div className='p-6'>
      <h1 className='text-xl font-bold text-gray-600 text-center'>Find Information on health and wellness!</h1>
      <div className='flex flex-col gap-2'>
        {
          topics.map((topic: Topic) => (
            <Link to={`/topic/${topic.Id}`} key={topic.Id}
            className=' font-semibold hover:underline hover:text-white hover:bg-cyan-600
            hover:scale-105 transition-transform duration-500 text-cyan-600 max-w-max'
            > 
            {topic.Id}  {topic.Title}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Blog