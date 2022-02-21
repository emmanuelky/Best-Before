import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import BBTimer from "./data/BBTimerGif.gif";

function App() {
  return (
    <div className=" h-full w-full bg-yellow-600">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/crypto/:id" element={<CryptoDetailPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
