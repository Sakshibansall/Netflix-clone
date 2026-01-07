import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Signup from "./Components/Signup";
import Home from "./Pages/Home";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Netflix-clone">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home/>}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
