import { useEffect, useState } from "react";
import React from "react";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Loader from "./components/Loader";
import Base from "./pages/Base";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/my-portfolio/" element={<Base />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
