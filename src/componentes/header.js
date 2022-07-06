import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../src/imagens/LOGOoficial 1.png";
import Perfil from "../../src/imagens/image.png";
import Selo from "../../src/imagens/selo_azul.png";

export function Header() {
  const [NavBarButton, setNavBarButton] = useState(false);
  const [Overlay, setOverlay] = useState(false);
  /* const body = document.querySelector("body");*/

  function ToggleNavBar() {
    setNavBarButton(!NavBarButton);
    if (Overlay === false) {
      setOverlay(true);
      const div = document.getElementById("menu_esquerdo");
      div.classList.add("menu_esquerdo_on");
      div.classList.remove("menu_esquerdo_off");

      /*body.style.scrollbarWidth = "none";  */
    }
  }
  function ToggleNavBar2() {
    setNavBarButton(!NavBarButton);
    if (Overlay === true) {
      setOverlay(false);
      const div = document.getElementById("menu_esquerdo");
      div.classList.add("menu_esquerdo_off");
      div.classList.remove("menu_esquerdo_on");
      /*  body.style.overflow = "auto";*/
    }
  }

  return (
    <>
      <header>
        <div
          className="Overlay"
          id={Overlay ? "OverlayNavBarOn" : "OverlayNavBarOff"}
          onClick={ToggleNavBar2}
        ></div>

        <div id="menu_esquerdo" className="">
          <div className="menu_section_1">
            <div className="icon-one" onClick={ToggleNavBar2}>
              <div className="hamburger hamburger-one"></div>
            </div>
            <div id="logo">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="menu_section_2">
            <li>
              <a href="">Acessibilidade </a>
            </li>
            <li>
              <Link href="" to="/quem-somos">
                Quem somos{" "}
              </Link>
            </li>
            <li>
              <a href=""> Fale conosco</a>
            </li>
            <li>
              <a href="">Perguntas Frequentes</a>
            </li>
            <li>
              <a href="">Blog </a>
              <img id="selo_azul" src={Selo} />
            </li>
          </div>
          <div className="menu_section_3">
            <div id="foto_perfil">
              <img src={Perfil} />
            </div>
            <div id="perfil_dados">
              <h1>Arielle Vogas</h1>
              <p>arielle.vogas@gmail.com </p>
            </div>
          </div>
        </div>

        <nav id="nav-1">
          <div className="menu-humburguer">
            <div className="icon-one" onClick={ToggleNavBar}>
              <div className="hamburger hamburger-one"></div>
            </div>
          </div>

          <Link id="logo" to="/">
            <img src={Logo} alt="" />
          </Link>
          <li>
            <Link id="home_header" to="/">
              Home
            </Link>
            <Link id="ofertas_header" to="/ofertas">
              Ofertas
            </Link>
            <Link id="mercados_parceiros_header" to="/mercados-parceiros">
              Mercados parceiros
            </Link>
          </li>
        </nav>
        <nav id="nav-2">
          <li>
            <Link to="/reservas">Reservas</Link>
            <Link to="/cliente">Cadastre-se</Link>
          </li>
        </nav>
      </header>
    </>
  );
}
