import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { Indice } from "./App.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { OfertasContainer } from "./páginas/ofertas";
import { Mercados_ParceirosContainer } from "./páginas/mercados_parceiros.js";
import { ReservasContainer } from "./páginas/reservas.js";
import { Login_MinhaContaContainer } from "./páginas/login_minhaconta.js";
import { CadastroCliente } from "./páginas/CadastroCliente.js";
import { HomeDinamica } from "./páginas/homeDinamica.js";
import { QuemSomos } from "./páginas/quem-somos.js";
import { Blog } from "./páginas/Blog.js";
import { CadastroComerciante } from "./páginas/CadastroComerciante.js"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Indice />} />
        <Route path="ofertas" element={<OfertasContainer />} />
        <Route
          path="mercados-parceiros"
          element={<Mercados_ParceirosContainer />}
        />
        <Route path="reservas" element={<ReservasContainer />} />
        <Route path="login" element={<Login_MinhaContaContainer />} />
        <Route path="cliente" element={<CadastroCliente />} />
        <Route path="comerciante" element={<CadastroComerciante />} />
        <Route path="quem-somos" element={<QuemSomos />} />
        <Route
          path="mercados-parceiros/:idMercado"
          element={<HomeDinamica />}
        />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
