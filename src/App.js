import "./App.css";
import { SectionContainer } from "./componentes/indice.js";
import { Categorias } from "./componentes/categorias.js";
import { Mercado } from "./componentes/mercado.js";
import { Header } from "./componentes/header";
import { Footer } from "./componentes/footer";

export function Indice() {
  return (
    <>
      <Header />
      <SectionContainer />
      <Categorias />
      <Mercado />
      <Footer />
    </>
  );
}
