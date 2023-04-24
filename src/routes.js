import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/repositorio/:repositorio" element={<Repositorio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
