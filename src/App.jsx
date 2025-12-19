import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Help from "./components/pages/Help";
import Company from "./components/pages/Company";
import RootLayouts from "./components/layouts/RootLayouts";
import Android from "./components/pages/Android";
import Iphone from "./components/pages/Iphone";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/android" element={<Android />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/company" element={<Company />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
