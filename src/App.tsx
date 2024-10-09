import MainLayout from './components/MainLayout'
import { SearchProvider } from './context'
function App() {
 

  return (
    <SearchProvider>
      <div className=''>
      <div className='max-w-screen-xl mx-auto bg-white'>
        <MainLayout  />
      </div>
    </div>
    </SearchProvider>


  )
}

export default App
