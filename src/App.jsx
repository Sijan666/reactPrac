import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Help from "./components/pages/Help";
import Company from "./components/pages/Company";
import RootLayouts from "./components/layouts/RootLayouts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
