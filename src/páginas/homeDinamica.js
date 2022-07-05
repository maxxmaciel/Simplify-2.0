import styled from "styled-components";
import { Header } from "../componentes/header.js";
import Search from "../componentes/Search";
import Produtos from "../../src/json/produtos.json";
import { useParams } from "react-router-dom";
import { Categorias } from "../componentes/categorias.js";
import ImagemHome from "../../src/img_home_dinamica.png";
import SlideCaixas from "../componentes/SlideCaixas.js";

export function HomeDinamica() {
  const { idMercado } = useParams();

  const filterMercado = Produtos.filter((el) => {
    return el.usuario === idMercado;
  });

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
          <button id="verCatalogo" class="buttonUp doubleButton">
            Ver catálogo
          </button>
          <button id="verLocal" class="buttonUp doubleButton">
            Ver localização
          </button>
          <button id="verificarSelo" class="buttonDown doubleButton">
            Verificar pelo selo Simplify
          </button>
        </div>
        <SlideCaixas />
        <div> </div>
      </div>

      <Categorias />
    </Container>
  );
}

// STYLED COMPONENTS
export const Container = styled.div`
  background: #f4fdff;
  #search {
    background: #26768d;
  }
 
  #search_pag_home{
    display:none;
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
