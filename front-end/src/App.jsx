import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Carousel from './Components/Carousel'
import Contact from './Components/Contact'
import Courses from './Components/Courses'
import Footer from './Components/Footer'
import Services from './Components/Services'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>  
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/carousel' element={<Carousel/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/footer' element={<Footer/>} />
          <Route path='/Services' element={<Services/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
