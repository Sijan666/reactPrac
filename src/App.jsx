import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayouts from './components/layouts/RootLayouts'
import Home from './components/pages/Home'
import React from 'react'
import Images from './components/pages/Images'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/images" element={<Images />} />
          {/*<Route path="/about" element={<About/>} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App


