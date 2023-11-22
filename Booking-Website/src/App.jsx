import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Book from './Pages/Book'
import Contacts from './Pages/Contacts'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/Home' element = {<Home/>}/>
          <Route path='/Book' element = {<Book/>}/>
          <Route path='/Contacts' element = {<Contacts/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
