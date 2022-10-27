import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Newsletter from "./pages/Newsletter";
import Calendar1 from "./pages/Calendar1";
import Activities from "./pages/Activities";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/calendar" element={<Calendar1 />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
