
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Cartpage from './pages/Cartpage'

function App() {
  

  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar/>
      </div>
      <div className='w-full h-full'>
          <Routes>
        <Route path = '/' element = {<Homepage/>}/>
        <Route path = '/cart' element = {<Cartpage/>}/>

      </Routes>
      </div>
   
      
    </div>
  )
}

export default App
