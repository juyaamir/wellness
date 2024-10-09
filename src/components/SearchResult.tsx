import { useSearch } from "../context";
import { articles, videos, ebooks, externalLinks } from "../data/data";
import { Link } from "react-router-dom";

const SearchResult = () => {
    const { searchItem, apiData } = useSearch();

    const filterData = (data: any[]) => {
        return data.filter((item: { title: string }) =>
            item.title.toLowerCase().includes(searchItem.toLowerCase())
        );
    };

    const filteredArticles = filterData(articles);
    const filteredVideos = filterData(videos);
    const filteredEbooks = filterData(ebooks);
    const filteredExternalLinks = filterData(externalLinks);
    const filteredApiData = apiData.filter((item: { Title: string }) => item.Title.toLowerCase().includes(searchItem.toLowerCase()));

    return (
        <div className="p-4">
            {filteredArticles.length > 0 && (
                <div>
                    <h2 className="bg-green-600 text-xl text-center p-1 text-white">Articles</h2>
                    {filteredArticles.map((article: { title: string, link: string }) => (
                        <Link to={article.link} target="_blank" className="block p-1 hover:underline" key={article.link}>{article.title}</Link>
                    ))}
                </div>
            )}
            {filteredVideos.length > 0 && (
                <div>
                    <h2 className="bg-green-600 text-xl text-center p-1 text-white">Videos</h2>
                    {filteredArticles.map((video: { title: string, link: string }) => (
                        <Link to={video.link} target="_blank" className="block p-1 hover:underline" key={video.link}>{video.title}</Link>
                    ))}
                </div>
            )}
            {filteredEbooks.length > 0 && (
                <div>
                    <h2 className="bg-green-600 text-xl text-center p-1 text-white">eBooks</h2>
                    {filteredArticles.map((book: { title: string, link: string }) => (
                        <Link to={book.link} target="_blank" className="block p-1 hover:underline" key={book.link}>{book.title}</Link>
                    ))}
                </div>
            )}
            {filteredExternalLinks.length > 0 && (
                <div>
                    <h2 className="bg-green-600 text-xl text-center p-1 text-white">External Links</h2>
                    {filteredArticles.map((link: { title: string, link: string }) => (
                        <Link to={link.link} target="_blank" className="block p-1 hover:underline" key={link.link}>{link.title}</Link>
                    ))}
                </div>
            )}
            {
            filteredApiData.length > 0 && (
                <div>
                    <h2 className="bg-green-600 text-xl text-center p-1 text-white">Health Topics</h2>
                    {filteredApiData.map((item: { Title: string, Id: number }) => (
                       
                        <Link to={`/topic/${item.Id}`}  key={item.Id} 
                        className="block p-1 hover:underline"
                        >{item.Title}</Link>
                        
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResult;