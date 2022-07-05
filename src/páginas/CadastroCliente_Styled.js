import styled from "styled-components";

export const Container = styled.div`
  background-color: #f4fdff;
  height: 1273px;

  #mercados_parceiros_header {
    color: #ffae10;
  }
  #nav-2 {
    a {
      color: #ffae10;
    }
  }
  #ball_157px {
    width: 157px;
    top: 137px;
    left: 638px;
  }
  #ball_227px {
    width: 227px;
    top: 874px;
    left: 566px;
  }
  #ball_106px {
    width: 106px;
    top: 604px;
    right: -20px;
  }
  #detalhe_1 {
    position: absolute;
    top: 0;
    left: 0;
  }
  #detalhe_2 {
    left: -75px;
    top: 933px;
    position: absolute;
    width: 599px;
    height: 341px;
    object-fit: cover;
    object-position: -19px -15px;
  }

  #detalhe_primary {
    position: absolute;
    left: 34px;
    top: 37px;
  }

  /*STYLED COMPONENTS  */

  section {
    height: 1067px;
    background: #f4fdff;

    #cadastro {
      float: right;
      ul {
        margin: 59px 0 0 0;
        color: #082952;
      }
    }
  }
  footer {
    z-index: 2;
    position: absolute;
    background: #26768d;

    #detalhe_footer {
      margin-top: 0px;
    }
  }
`;
