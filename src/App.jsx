import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./switchRouters/Routers";
import Navbar from "./components/navbar/Navbar";
import "./sass/variable.scss";
import "./index.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routers />
      </BrowserRouter>
      ,
    </>
  );
};

export default App;
