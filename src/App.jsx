
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navigationbar from './Components/Navigationbar'
import Home from './Pages/Home'
import Aboutme from './Pages/Aboutme'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'
import Skills from './Pages/Skills'
import Footer from './Components/Footer'
import Certifications from './Pages/Certifications';
// import DynamicProjects from './Pages/Dynamicprojects'
import Contact from './Pages/Contact'
function App() {

  return (
    <>
    <Navigationbar/>
    <Routes>
      <Route path='/' element={<Home/>} />  
      <Route path='/aboutme' element={<Aboutme/>} />  
      <Route path='/projects' element={<Projects/>} />  
      {/* <Route path='/DynamicProjects' element={<DynamicProjects/>} />   */}
      <Route path='/experience' element={<Experience/>} />    
      <Route path='/skills' element={<Skills/>} />  
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/contact" element={<Contact />} /> {/* ✅ This is required */}
    </Routes>
    <Footer/>

    </>
  )
}

export default App
