import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayouts from './components/layouts/RootLayouts'
import Home from './components/pages/Home'
import Container from './components/pages/Container'


function App () {
  return (
    <><Container>
      <h1>hello prithivi</h1>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
          {/* <Route path="/about" element={<About/>} /> */}
        </Route>
      </Routes>
      </Container>
    </>
  )
}

export default App


