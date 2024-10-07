import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';  
import { Link } from 'react-router-dom';

interface ParamTypes extends Record<string, string | undefined> {
    id: string;
}
interface RelatedItem {
    Id: number;
    Title: string;
}

interface Section {
    Title: string;
    Id: number;
    Content: string;
}

interface Topic {
    Categories: string;
    Id: number;
    Title: string;
    ImageUrl: string;
    ImageAlt: string;
    Sections: {
        section: Section[];
    };
    RelatedItems: {
        RelatedItem: RelatedItem[];
    };
}


const TopicDetails = () => {
    const { id } = useParams<ParamTypes>();
    const [topic, setTopic] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>('');

    useEffect(() => {
        setLoading(true);
        try {
            const getData = async () => {
                const response = await axios.get(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=${id}`);
                setTopic(response.data.Result.Resources.Resource);
            };
            getData();
            
        } catch (error) {
            if(error instanceof Error) {
                setError(`Error: ${error.message}`);
            } else {
                setError(`An unknown error occurred`);
            }
            
        } finally {
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

  return (
    <div className=''>
        
        { topic &&
            topic.map((top: Topic) => (
                <div key={top.Id} className=''>

                    <div className="flex flex-wrap md:flex-nowrap justify-between bg-gray-100 pt-8 md:px-4">
                        <div className="my-health p-2 flex flex-col items-center justify-center">
                            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center border-b-4 pb-2  border-b-green-600">{top.Categories}</p>
                            <p className="text-xl md:text-3xl text-center">{top.Title}</p>
                        </div>
                            <div className="">
                            <img src={top.ImageUrl} alt={top.ImageAlt} className=" object-cover" />
                        </div>
                    </div>
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center border-b-4 p-2 m-4 border-b-green-600">Overview</p>
                    {
                        top.Sections.section.map((section: Section) => (
                            <div key={section.Id} className='p-4'>
                                <h2 className='text-cyan-500 text-xl font-semibold'>{section.Title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: section.Content }} />
                            </div>
                        ))
                    }
                {/* Related Topics */}
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center border-b-4 p-2 m-4 border-b-green-600">You may also like these topics</p>
                    {
                        top.RelatedItems.RelatedItem.map((related: RelatedItem) => (
                            <Link to={`/topic/${related.Id}`} key={related.Id} 
                            className='' >
                                <p 
                                className='text-cyan-500  font-semibold px-4 hover:bg-green-700 hover:text-white py-1 px-2 w-max'
                                >{related.Title}</p>
                            
                            </Link>
                        ))
                    }
                </div>
            ))
            
        }
    </div>
  )
}

export default TopicDetails