import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Addtocart from './components/pages/Addtocart'
import Favorite from './components/pages/Favorite'
import Billing from './components/pages/Billing'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<Home />}  path='/' />
          <Route element={<Contact />}  path='/contact' />
          <Route element={<About />}  path='/about' />
          <Route element={<Signup />}  path='/signup' />
          <Route element={<Login />}  path='/login' />
          <Route element={<Addtocart />}  path='/addcart' />
          <Route element={<Favorite />}  path='/favorite' />
          <Route element={<Billing />}  path='/billing' />




        </Routes>


      </BrowserRouter>


    </>
  )
}

export default App
