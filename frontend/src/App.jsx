import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<DashBoard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;