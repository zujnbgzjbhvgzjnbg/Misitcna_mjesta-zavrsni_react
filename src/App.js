import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import Naslovna from "./Components/Naslovna";
import ListaMijesta from "./Components/ListaMijesta";
import GalerijaSlika from "./Components/GalerijaSlika";

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <Routes>
            <Route exact path="/" element={<Naslovna />} />
            <Route path="/ListaMijesta" element={<ListaMijesta />} />
            <Route path="/GalerijaSlika" element={<GalerijaSlika />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
