import React from 'react';
import { Link } from 'react-router-dom';
import { articles, videos, ebooks, externalLinks } from '../data/data';
const Resource = () => {


  return (
    <div className='p-8'>
      <h1 className='text-4xl font-bold text-gray-500  mb-4 text-center'>Resources</h1>
      <p className='text-lg mb-8'>
        Explore our curated list of resources to help you on your wellness journey. From articles and videos to e-books and external links, we've got you covered.
      </p>

      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-gray-500  mb-4'>Articles</h2>
        <ul className='list-disc list-inside'>
          {articles.map((article, index) => (
            <li key={index} className='text-lg mb-2'>
              <Link to={article.link} target="_blank" className='text-cyan-500 hover:text-cyan-700 underline'>{article.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-gray-500 mb-4'>Videos</h2>
        <ul className='list-disc list-inside'>
          {videos.map((video, index) => (
            <li key={index} className='text-lg mb-2'>
              <Link to={video.link} target="_blank" className='text-cyan-500 hover:text-cyan-700 underline'>{video.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-gray-500  mb-4'>E-Books</h2>
        <ul className='list-disc list-inside'>
          {ebooks.map((ebook, index) => (
            <li key={index} className='text-lg mb-2'>
              <Link to={ebook.link} target="_blank" className='text-cyan-500 hover:text-cyan-700 underline'>{ebook.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-gray-500  mb-4'>External Links</h2>
        <ul className='list-disc list-inside'>
          {externalLinks.map((link, index) => (
            <li key={index} className='text-lg mb-2 '>
              <Link to={link.link} target="_blank" className='underline text-cyan-500 hover:text-cyan-700'>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resource;