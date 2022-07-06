import { Link } from "react-router-dom";
import Logo from "../../src/imagens/LOGOoficial 1.png";
import insta from "../../src/imagens/instagram 5.png";
import face from "../../src/imagens/facebook 5.png";
import twitter from "../../src/imagens/twitter 5.png";
import wpp from "../../src/imagens/whatsapp 5.png";
import detalheFooter from "../../src/imagens/detalhe_footer.png";

export function Footer() {
  return (
    <footer>
      <div className="fontes_footer">
        <div id="col1_footer">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <a className="">Fale conosco</a>
          </li>
          <li>
            <Link to="/quem-somos">Quem somos</Link>
          </li>
          <li>
            <a>Mercados parceiros</a>
          </li>
          <li>
            <a>Perguntas frequentes</a>
          </li>
        </div>
        <div id="col2_footer">
          <li>
            <a> Cookies</a>
          </li>
          <li>
            <a> Termos de uso </a>
          </li>
          <li>
            <a> Politicas de privacidade</a>
          </li>
        </div>

        <div id="detalhe_footer">
          <p id="footer_row1">@simplify</p>
          <ul id="footer_row2">
            <li>
              <img src={insta} />
            </li>
            <li>
              <img src={face} />
            </li>
            <li>
              <img src={twitter} />
            </li>
            <li>
              <img src={wpp} />
            </li>
          </ul>
          <img src={detalheFooter} id="detalhe_footer_img" />
          <img src={Logo} id="logo_footer_img" />
        </div>
      </div>
    </footer>
  );
}
