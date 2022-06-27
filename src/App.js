import { Route, Routes } from "react-router-dom";
import React from "react";

import Index from "./Pages/Home/Index";
import Mint from "./Pages/Mint/Mint";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/Main"} element={<Index />} />
        <Route path={"/"} element={<Mint />} />
      </Routes>
    </div>
  );
}

export default App;
