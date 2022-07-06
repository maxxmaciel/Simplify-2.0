import styled from "styled-components";
import { Header } from "../componentes/header.js";
import Search from "../componentes/Search";
import Produtos from "../../src/json/produtos.json";
import { useParams } from "react-router-dom";
import ImagemHome from "../../src/imagens/img_home_dinamica.png";
import SlideCaixas from "../componentes/SlideCaixas.js";
import { Footer } from "../componentes/footer.js";
import { Li_categorias } from "../componentes/categorias2.js";
import { Produto } from "../componentes/produto";






export function HomeDinamica() {
  const { idMercado } = useParams();

  const filterMercado = Produtos.filter((el) => {
    return el.usuario === idMercado;
  });
  console.log(filterMercado)
  return (
    <Container cor={filterMercado}>
      <div className="img_home">
        <img src={ImagemHome} id="ImgHome" />
      </div>

      <Header />

      <div className="container">
        <Search />
        <div className="col1">
          <h1 className="texto-home">{filterMercado[0].nome}</h1>
          <div className="foto_mercado">
            <img src={filterMercado[0].imagem} alt="" />
          </div>
          <button id="verCatalogo" className="buttonUp doubleButton">
            Ver catálogo
          </button>
          <button id="verLocal" className="buttonUp doubleButton">
            Ver localização
          </button>
          <button id="verificarSelo" className="buttonDown doubleButton">
            Verificar pelo selo Simplify
          </button>
        </div>
        <SlideCaixas />
      </div>

      <div>
        <div className="section_1">
          <div className="margin_66px">
            <p className="fontes_desktop">Categorias</p>
            <ul className="categorias">
              <Li_categorias
                img_categoria="../images/categoria_1.png"
                texto_categoria="Hortifruti"
                alt=""
              />
              <Li_categorias
                img_categoria="../images/categoria_2.png"
                texto_categoria="Bebidas"
                alt=""
              />
              <Li_categorias
                img_categoria="../images/categoria_3.png"
                texto_categoria="Padaria"
                alt=""
              />
              <Li_categorias
                img_categoria="../images/categoria_4.png"
                texto_categoria="Higiene"
                alt=""
              />
              <Li_categorias
                img_categoria="../images/categoria_4.png"
                texto_categoria="Higiene"
                alt=""
              />
              <Li_categorias
                img_categoria="../images/categoria_4.png"
                texto_categoria="Higiene"
                alt=""
              />
              <Li_categorias
                img_categoria="../images/categoria_4.png"
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
                <img src="../images/arrow_left.png" alt="" />
              </div>
              <div className="ball_white">
                <img src="../images/arrow_right.png" alt="" />
              </div>
            </div>
          </div>
          <div className="container_produtos">
            <img src="../images/bola_laranja.png" id="bola_laranja" />
            <Produto
              img_produto="../images/produto_1.png"
              titulo_produto="Cenoura - 1 kg"
              description={filterMercado[0].nome}
              valor="R$ 6,98"
              alt=""
            />
            <Produto
              img_produto="../images/produto_2.png"
              titulo_produto="Maça - 1 kg"
              description={filterMercado[0].nome}
              valor="R$ 5,90"
              alt=""
            />
            <Produto
              img_produto="../images/produto_3.png"
              titulo_produto="Laranja - 1 kg"
              description={filterMercado[0].nome}
              valor="R$4,83"
              alt=""
            />
            <Produto
              img_produto="../images/produto_4.png"
              titulo_produto="Pêra - 1 kg"
              description={filterMercado[0].nome}
              valor="R$ 4,75"
              alt=""
            />
            <Produto
              img_produto="../images/produto_5.png"
              titulo_produto="Couve manteiga - 1 peça"
              description={filterMercado[0].nome}
              valor="R$ 2,10"
              alt=""
            />
            <Produto
              img_produto="../images/produto_1.png"
              titulo_produto="Cenoura - 1kg"
              description={filterMercado[0].nome}
              valor="R$ 7,19"
              alt=""
            />
            <Produto
              img_produto="../images/produto_7.png"
              titulo_produto="Laranja - 1 und"
              description={filterMercado[0].nome}
              valor="R$1,05"
              alt=""
            />
            <Produto
              img_produto="../images/produto_8.png"
              titulo_produto="Banana - 1 peça"
              description={filterMercado[0].nome}
              valor="R$13,38"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

// STYLED COMPONENTS
export const Container = styled.div`
  footer {
    background: #082952;
  }
  background: #f4fdff;
  #search {
    background: #26768d;
  }

  #search_pag_home {
    display: none;
  }
  #search_white {
    display: flex;
  }
  #nav-1 li a {
    color: #ffae10;
  }
  #nav-2 a {
    color: #082952;
  }
  .search-div input {
    background: #f4fdff;
    border: 3px solid #26768d;
    color: #26768d;
    margin-left: 69px;
  }
  .search-div input::placeholder {
    color: #26768d;
  }
  .container {
    .caixa {
      background: #26768d;
    }
    .col1 {
      width: 50%;

      padding-left: 70px;
      #verLocal {
        margin-left: 28px;
      }
      .doubleButton {
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        cursor: pointer;
      }
      .buttonUp {
        width: 297px;
        height: 59px;
        left: 69px;
        top: 453px;

        background: #26768d;
        border-radius: 50px;
        color: #ffffff;
        margin-top: 36px;
      }
      .buttonDown {
        width: 621px;
        height: 59px;
        left: 69px;
        top: 562px;
        margin-top: 50px;
        border: 3px solid #26768d;
        border-radius: 50px;
        background: #f4fdff;
        color: #26768d;
      }
      .foto_mercado {
        width: 190px;
        height: 190px;

        float: left;
      }
      .texto-home {
        color: ${function (props) {
          return props.cor[0].cor;
        }};
        float: left;
        width: 393px;
        display: flex;
        height: 189px;
        align-items: center;
        span {
          color: #ffae10;
        }
      }
    }
  }
`;
