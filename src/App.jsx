import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { Link } from 'react-router-dom'
import NavBar from './components/Navigation/NavBar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import Contact from './pages/Contact'


function App() {

  return (
    
    <div className='text-white'>
      <NavBar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/agence' element = {<Agence />} />
        <Route path='/projects' element = {<Projects />}/>
        <Route path='/contact-us' element = {<Contact />} />
      </Routes>
    </div>
  )
}

export default App
