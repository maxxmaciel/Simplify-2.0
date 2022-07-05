import { Link } from "react-router-dom";

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
              <img src="./images/instagram 5.png" />
            </li>
            <li>
              <img src="./images/facebook 5.png" />
            </li>
            <li>
              <img src="./images/twitter 5.png" />
            </li>
            <li>
              <img src="./images/whatsapp 5.png" />
            </li>
          </ul>
          <img src="./images/detalhe_footer.png" id="detalhe_footer_img" />
          <img src="./images/LOGOoficial 1.png" id="logo_footer_img" />
        </div>
      </div>
    </footer>
  );
}
