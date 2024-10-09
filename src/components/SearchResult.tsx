// components/SearchResult.tsx
import { useSearch } from "../context";
import { articles, videos, ebooks, externalLinks } from "../data/data";
import { Link } from "react-router-dom";

const SearchResult = () => {
  const { searchItem } = useSearch();

  const filterData = (data: any[]) => {
    return data.filter((item: { title: string }) =>
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    );
  };

  const filteredArticles = filterData(articles);
  const filteredVideos = filterData(videos);
  const filteredEbooks = filterData(ebooks);
  const filteredExternalLinks = filterData(externalLinks);

  return (
    <div>
      {filteredArticles.length > 0 && (
        <div>
          <h2 className="bg-red-500 text-xl">Articles</h2>
          {filteredArticles.map((article: { title: string, link: string }) => (
            <div key={article.link}>
              <Link to='/resources' >{article.title}</Link>
            </div>
          ))}
        </div>
      ) }
      {filteredVideos.length > 0 && (
        <div>
          <h2 className="bg-gray-200 text-2xl p-1 ">Videos</h2>
          {filteredVideos.map((video: { title: string, link: string }) => (
            <div key={video.link}>
              <Link to={video.link} target="_blank">{video.title}</Link>
            </div>
          ))}
        </div>
      ) }
      {filteredEbooks.length > 0 && (
        <div>
          <h2 className="bg-red-500 text-xl">Ebooks</h2>
          {filteredEbooks.map((ebook: { title: string, link: string }) => (
            <div key={ebook.link}>
              <Link to={ebook.link} target="_blank">{ebook.title}</Link>
            </div>
          ))}
        </div>
      )}
      {filteredExternalLinks.length > 0 && (
        <div>
          <h2 className="bg-red-500 text-xl">External Links</h2>
          {filteredExternalLinks.map((link: { title: string, link: string }) => (
            <div key={link.link}>
              <Link to={link.link} target="_blank">{link.title}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;