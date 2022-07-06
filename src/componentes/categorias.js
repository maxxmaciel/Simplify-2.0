import { Li_categorias } from "./categorias2.js";
import { Produto } from "./produto.js";

export function Categorias() {
  return (
    <div>
      <div className="section_1">
        <div className="margin_66px">
          <p className="fontes_desktop">Categorias</p>
          <ul className="categorias">
            <Li_categorias
              img_categoria="images/categoria_1.png"
              texto_categoria="Hortifruti"
              style="background: #fff!important;"
              alt=""
            />
            <Li_categorias
              img_categoria="images/categoria_2.png"
              texto_categoria="Bebidas"
              alt=""
            />
            <Li_categorias
              img_categoria="images/categoria_3.png"
              texto_categoria="Padaria"
              alt=""
            />
            <Li_categorias
              img_categoria="images/categoria_4.png"
              texto_categoria="Higiene"
              alt=""
            />
            <Li_categorias
              img_categoria="images/categoria_4.png"
              texto_categoria="Higiene"
              alt=""
            />
            <Li_categorias
              img_categoria="images/categoria_4.png"
              texto_categoria="Higiene"
              alt=""
            />
            <Li_categorias
              img_categoria="images/categoria_4.png"
              texto_categoria="Higiene"
              alt=""
            />
          </ul>
        </div>
        <div className="mostrando_setas">
          <p className="fontes_desktop_2" id="mostrando">
            {" "}
            Mostrando 8 de 24 produtos{" "}
          </p>
          <div id="setas">
            <div className="seta_left">
              <img src="images/arrow_left.png" alt="" />
            </div>
            <div className="ball_white">
              <img src="images/arrow_right.png" alt="" />
            </div>
          </div>
        </div>
        <div className="container_produtos">
          <img src="images/bola_laranja.png" id="bola_laranja" />
          <Produto
            img_produto="images/produto_1.png"
            titulo_produto="Cenoura - 1 kg"
            description="Mercadinho do seu Zé"
            valor="R$ 6,98"
            alt=""
          />
          <Produto
            img_produto="images/produto_2.png"
            titulo_produto="Maça - 1 kg"
            description="Mercado Quatro Irmãos"
            valor="R$ 5,90"
            alt=""
          />
          <Produto
            img_produto="images/produto_3.png"
            titulo_produto="Laranja - 1 kg"
            description="Mercado Ponto Certo"
            valor="R$4,83"
            alt=""
          />
          <Produto
            img_produto="images/produto_4.png"
            titulo_produto="Pêra - 1 kg"
            description="Mercado Bons Amigos"
            valor="R$ 4,75"
            alt=""
          />
          <Produto
            img_produto="images/produto_5.png"
            titulo_produto="Couve manteiga - 1 peça"
            description="Mercado Me Gusta"
            valor="R$ 2,10"
            alt=""
          />
          <Produto
            img_produto="images/produto_1.png"
            titulo_produto="Cenoura - 1kg"
            description="Mercado La Fontaine"
            valor="R$ 7,19"
            alt=""
          />
          <Produto
            img_produto="images/produto_7.png"
            titulo_produto="Laranja - 1 und"
            description="Mercado Quatro Irmãos"
            valor="R$1,05"
            alt=""
          />
          <Produto
            img_produto="images/produto_8.png"
            titulo_produto="Banana - 1 peça"
            description="Mercado La Fontaine"
            valor="R$13,38"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
