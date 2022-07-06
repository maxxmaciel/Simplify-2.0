import styled from "styled-components";

export const Container = styled.div`
  background-color: #f4fdff;
  height: auto;
  #menu_esquerdo {
    background-color: #f4fdff;
    border: 3px solid #082952;
  }
  .menu_section_3 {
    border-top: 3px solid #082952;
  }
  .menu_section_1 .icon-one {
    border: 1px solid #082952; 
  }
  .icon-one {
    background-color: #082952;
  }
  .hamburger,
  .hamburger-one:before,
  .hamburger-one:after {
    background-color: #f4fdff;
  }
  .menu_section_1 {
    border-bottom: 3px solid #082952;
  }
  #nav-1 li a {
    color: #082952;
  }
  #nav-2 a {
    color: #ffae10;
  }
  footer {
    background-color: #082952;
  }
  .quem-somos {
    height: auto;
    display: flex;
    flex-wrap: wrap;
    #ball_yellow {
      position: absolute;
      left: 0;
      top: 313px;
    }
    #proa {
      margin: 60px 0px 0px 184px;
    }
    #quadro-qm-somos {
      width: 1286px;
      height: 776px;
      background: #082952;
      border-radius: 59px;
      margin: auto;
      margin-bottom: 300px;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      .quadro-qm-somos-imgs {
        display: flex;
        justify-content: center;
        margin-top: 90px;
      }
      .div1 {
        grid-area: 1 / 1 / 2 / 5;
      }
      .div2 {
        grid-area: 1 / 5 / 2 / 9;
      }
      .div3 {
        grid-area: 1 / 9 / 2 / 13;
      }
      .div4 {
        grid-area: 2 / 1 / 3 / 4;
      }
      .div5 {
        grid-area: 2 / 4 / 3 / 7;
      }
      .div6 {
        grid-area: 2 / 7 / 3 / 10;
      }
      .div7 {
        grid-area: 2 / 10 / 3 / 13;
      }
    }
    .qm-somos-img {
      margin-top: 147px;
    }
    #qm-somos-title {
      color: #082952;
      font-weight: 700;
      line-height: 154px;
      margin: 151px 0px 0px 50px;
    }
    #qm-somos-sub {
      font-weight: 400;
      line-height: 38px;
      color: #082952;
      width: 92%;
      margin: 49px 0px 0px 50px;
    }
  }
`;
