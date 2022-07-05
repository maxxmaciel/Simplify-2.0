import React from "react";
import { Header } from "../componentes/header";
import Search from "../componentes/Search";

export function Blog() {
  return (
    <>
      <Header />
      <div className="container">
        <Search />
        <div className="selo ">
          <p>
            Hoje a simplify tem um total de 143 <br />
            mercados cadastrados na plataforma
          </p>

          <div className="mercado_p">
            <p>Torne-se você um mercado parceiro</p>
          </div>

          <div className="Saiba">
            <a href="#">Saiba como clicando aqui</a>
          </div>

          <div className="selo_verde"></div>
          <div className="sv">
            <img src="../images/selo_verde.png" />
          </div>

          <div className="selo_azul"></div>
          <div className="sa">
            <img src="../images/selo_azul.png" />
          </div>

          <div className="selo_laranja"></div>
          <div className="sl">
            <img src="../images/selo_laranja.png" />
          </div>

          <div className="selo_vermelho"></div>
          <div className="svm">
            <img src="../images/selo_vermelho.png" />
          </div>

          <div className="porcentagem1">
            <div className="linha1"></div>
          </div>
          <div className="porcentagem2">
            <div className="linha1"></div>
          </div>
          <div className="porcentagem3">
            <div className="linha1"></div>
          </div>
          <div className="porcentagem4"></div>

          <div className="circulo3">
            <img src="../images/circulo_blog.png" />
          </div>

          <div className="circulo2">
            <img src="../images/circulo2.png" />
          </div>

          <div className="info">
            <img src="../images/photo.png" />
          </div>

          <div className="info2">
            <img src="../images/photo2.png" />
          </div>

          <div className="info3">
            <img src="../images/photo3.png" />
          </div>

          <div className="info4">
            <img src="../images/photo4.png" />
          </div>
        </div>
      </div>
    </>
  );
}
