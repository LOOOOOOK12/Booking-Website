import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Book from './Pages/Book'
import Contacts from './Pages/Contacts'
import Blogs from './Pages/Blogs'
import Services from './Pages/Services'
import About from './Pages/About'
import './app.css'
import "./index.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/Home' element = {<Home/>}/>
          <Route path='/About' element = {<About/>}/>
          <Route path='/Blogs' element ={<Blogs/>}/>
          <Route path='/Services' element ={<Services/>}/>
          <Route path='/Contacts' element = {<Contacts/>}/>
          <Route path='/Book' element = {<Book/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
