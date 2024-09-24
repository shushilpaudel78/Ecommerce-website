import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<Home />}  path='/' />
          <Route element={<Contact />}  path='/contact' />



        </Routes>


      </BrowserRouter>


    </>
  )
}

export default App
