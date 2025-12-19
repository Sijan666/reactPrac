import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayouts from './components/layouts/RootLayouts'
import Home from './components/pages/Home'
import Iphone from './components/pages/Iphone'
import Android from './components/pages/Android'


function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
          <Route path="/iphone" element={<Iphone/>} />
          <Route path="/android" element={<Android/>} />
          {/* <Route path="/about" element={<About/>} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App


