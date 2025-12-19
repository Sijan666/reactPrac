<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayouts from './components/layouts/RootLayouts'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Help from './components/pages/Help'
import Company from './components/pages/Company'
=======
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayouts from "./components/layouts/RootLayouts";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Help from "./components/pages/Help";
import Company from "./components/pages/Company";
import Iphone from "./components/pages/Iphone";
>>>>>>> 26c2528672ec70d26d2b575abb37e12317db1d7e

function App() {
  return (
    <>
<<<<<<< HEAD
   <Routes>
<Route path="/" element={<RootLayouts />}>
<Route index element={<Home/>} />
<Route path="/home" element={<Home />} />
<Route path="/Company" element={<Company />} />
<Route path="/Help" element={<Help />} />
<Route path="/about" element={<About />} />
</Route>
</Routes>


=======
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/about" element={<About />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Help" element={<Help />} />
        </Route>
      </Routes>
>>>>>>> 26c2528672ec70d26d2b575abb37e12317db1d7e
    </>
  );
}

export default App;
