import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/my-portfolio/" element={<Home />} />
        <Route path="/my-portfolio" element={<Home />} />
      </Routes>
      <Loader />
    </BrowserRouter>
  );
}

export default App;
