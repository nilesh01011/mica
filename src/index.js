import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartingPage from "./components/StartingPage";
import Dashbaord from "./pages/Dashbaord";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       {/* Starting Page */}
       <Route exact path="/" element={<StartingPage />}></Route>
       <Route path="/dashboard" element={<Dashbaord />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
