import React from "react";
import { Header } from "../componentes/header.js";
import { Container } from "./CadastroComerciante_Styled.js";
import { useState } from "react";
import { Link } from "react-router-dom";

export function CadastroComerciante() {
  var [buttonCom, SetButtonCom] = useState(true);

  function ToggleButtonCom() {
    SetButtonCom(!buttonCom);
  }

  return (
    <>
      <Header />
      <Container>
        <section>
          {/* ABSOLUTE IMGS*/}
          <img
            src="./images/DetalheComerciante.png"
            alt=""
            id="detalhe_comerciante_1"
          />
          <img
            src="./images/DetalheComerciante.png"
            alt=""
            id="detalhe_comerciante_2"
          />
          <img
            src="./images/CadastroComercianteSlogan.png"
            alt=""
            id="detalhe_comerciante_3"
          />
          <img
            src="./images/bola_laranja.png"
            alt=""
            id="ball_157px"
            className="style_global_ball"
          />
          <img
            src="./images/bola_laranja.png"
            alt=""
            id="ball_227px"
            className="style_global_ball"
          />
          <img
            src="./images/bola_laranja.png"
            alt=""
            id="ball_106px"
            className="style_global_ball"
          />

          {/* ESTRUTURA DA PAG*/}

          <div id="button_login_cadastro" className="font_size_24">
            {buttonCom == true && (
              <>
                <p
                  onClick={ToggleButtonCom}
                  id="border_pLogin"
                  className="botton_white"
                >
                  Login
                </p>
                <div id="marcador" className="marcador_row">
                  <p id="border_pCadastro">Cadastro </p>
                </div>
              </>
            )}
            {buttonCom == false && (
              <>
                <div id="marcador" className="marcador_row_reverse">
                  <p id="border_pLogin">Login</p>
                </div>

                <p
                  onClick={ToggleButtonCom}
                  id="border_pCadastro"
                  className="botton_white cadastro_revert"
                >
                  Cadastro
                </p>
              </>
            )}
          </div>
          {/*  CADASTRO      */}
          <div id="cadastro" className="cadastro">
            {buttonCom == true && (
              <ul className="font_size_24" id="cadastro_on">
                <li>
                  <p> Nome completo</p>
                  <input className="font_size_24" />
                </li>
                <li>
                  <p> E-mail</p>
                  <input className="font_size_24" />
                </li>
                <li>
                  <p> Usuário</p>
                  <input className="font_size_24" />
                </li>
                <li>
                  <p> Telefone celular</p>
                  <input className="font_size_24" />
                </li>
                <li>
                  <p> CPF</p>
                  <input className="font_size_24" />
                </li>
                <li>
                  <p> Data de nascimento</p>
                  <input className="font_size_24" />
                </li>
                <li>
                  <p> Senha</p>
                  <input className="font_size_24" />
                </li>
                <button
                  id="button_global_cadastro_login"
                  className="font_size_24"
                >
                  Cadastrar
                </button>
              </ul>
            )}
            {/*  LOGIN      */}
            {buttonCom == false && (
              <ul className="font_size_24" id="login_on">
                <li>
                  <p> Usuário ou E-mail</p>
                  <input className="font_size_24" />
                </li>
                <li>
                  <p> Senha</p>
                  <input className="font_size_24" />
                </li>
                <a className="font_size_16">Esqueci minha senha </a>
                <button
                  id="button_global_cadastro_login"
                  className="font_size_24"
                >
                  Entrar
                </button>
                <div id="hr">
                  <hr></hr>
                  <span> ou </span>
                  <hr></hr>
                </div>
                <Link className="gg_face_comerciante_div" to="/">
                  <div className="font_size_20">
                    <div className="ball_white_ ">
                      <img src="./images/google 1.png" />
                    </div>

                    <p>Entrar com Google</p>
                  </div>
                </Link>
                <Link className="gg_face_comerciante_div" to="/">
                  <div className="font_size_20">
                    <div className="ball_white_ ">
                      <img src="./images/facebook (1) 1.png" />
                    </div>
                    <p>Entrar com Facebook</p>
                  </div>
                </Link>
                <Link className="gg_face_comerciante_div" to="/cliente">
                  <div className="font_size_20">
                    <div className="ball_white_ ">
                      <img src="./images/sacolas-de-compras 1.png" />
                    </div>
                    <p>Entrar como cliente</p>
                  </div>
                </Link>
              </ul>
            )}
          </div>
        </section>
      </Container>
    </>
  );
}
