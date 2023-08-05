//import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import IndexPage from './components/Home/IndexPage'
//import Layout from './Layout'
import './App.css'
//import Footer from './components/Footer'
import { Projects } from './components/Projects'
import { About } from './components/About/About'

function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' index element={<IndexPage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>
      {/*<Footer />*/}
    </>
      
  )
}

export default App
