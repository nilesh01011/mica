import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartingPage from "./components/StartingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       {/* Starting Page */}
       <Route exact path="/" element={<StartingPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
