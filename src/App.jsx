
import './App.css'
import { Nav } from './component'
import Cursor from './component/custom/custom'
import {About, Blog, Contact, Home, Portfolio, Services} from './pages/index'
import {Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <>
    <Cursor/>
    <Nav/>
    <Routes>
        <Route path="/smartweb/" element={<Home/>}/>
        <Route path="/smartweb/about" element={<About/>}/>
        <Route path="/smartweb/blog" element={<Blog/>}/>
        <Route path="/smartweb/contact" element={<Contact/>}/>
        <Route path="/smartweb/services" element={<Services/>}/>
        <Route path="/smartweb/portfolio" element={<Portfolio/>}/>
    </Routes>
   
    </>
  )
}

export default App
