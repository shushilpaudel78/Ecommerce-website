import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Addtocart from './components/pages/Addtocart'

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
          <Route element={<Login />}  path='/login' />
          <Route element={<Addtocart />}  path='/addtocart' />







        </Routes>


      </BrowserRouter>


    </>
  )
}

export default App
