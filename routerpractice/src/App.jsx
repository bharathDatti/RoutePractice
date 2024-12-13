import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Features from './Pages/Features'
import Services from   './Pages/Services'
import Pricing from './Pages/Pricing'
import PageNotFound from './Pages/PageNotFund'
import { Routes,Route } from 'react-router'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/> } />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Features' element={<Features/>} />
      <Route path='/Services' element={<Services/>} />
      <Route path='/Pricing' element={<Pricing/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    </>
  )
}

export default App
