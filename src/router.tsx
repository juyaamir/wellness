
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Topics'
import Categories from './pages/myHealth'
import Contact from './pages/Contact'
import TopicDetails from './pages/topicDetails'
import { Route, Routes } from 'react-router-dom'
import Subscribe from './components/Subscribe'
import Feedback from './components/Feedback'
import Resource from './pages/Resource'
const Router = () => {
  return (
    <Routes>
      < Route path='/' element={<Home />} />
      
      < Route path='/about' element={<About />} />
      < Route path='/topics' element={<Blog />} />
      < Route path='/topic/:id' element={<TopicDetails />} />
      < Route path='/my-health' element={<Categories />} />
      < Route path='/contact' element={<Contact />} />
      < Route path='/subscribe' element={<Subscribe />} />
      < Route path='/feedback' element={<Feedback />} />
      < Route path='/resources' element={<Resource />} />
    </Routes>
  )
}

export default Router