import React from "react";
import { Routes, Route } from "react-router-dom";
import { MenuProvider } from "./components/MenuContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <div className="overflow-hidden">
      <MenuProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </MenuProvider>
    </div>
  );
}

export default App;