
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Categories from './pages/Categories'
import Contact from './pages/Contact'
import TopicDetails from './pages/topicDetails'
import { Route, Routes } from 'react-router-dom'


const Router = () => {
  return (
    <Routes>
      < Route path='/' element={<Home />} />
      < Route path='/about' element={<About />} />
      < Route path='/topics' element={<Blog />} />
      < Route path='/topic/:id' element={<TopicDetails />} />
      < Route path='/my-health' element={<Categories />} />
      < Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default Router