import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Signup from './components/pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<Home />}  path='/' />
          <Route element={<Contact />}  path='/contact' />
          <Route element={<About />}  path='/about' />
          <Route element={<Signup />}  path='/signup' />





        </Routes>


      </BrowserRouter>


    </>
  )
}

export default App
