import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import Activities from "./Activities";
import Calendar1 from "./Calendar1";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/calendar" element={<Calendar1 />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
