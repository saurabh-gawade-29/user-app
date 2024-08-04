import "./App.css";
import About from "./components/About";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Cardetail from "./components/Cardetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid my-4">
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path=":userId" element={<Cardetail />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
