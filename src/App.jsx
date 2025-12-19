import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayouts from "./components/layouts/RootLayouts";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Help from "./components/pages/Help";
import Company from "./components/pages/Company";
import Iphone from "./components/pages/Iphone";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/about" element={<About />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Help" element={<Help />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
