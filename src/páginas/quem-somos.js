import { Container } from "./quem-somos-styled.js";
import { Header } from "../componentes/header";
import { Footer } from "../componentes/footer.js";

export function QuemSomos() {
  return (
    <Container>
      <Header />
      <section className="quem-somos container">
        <div className="img_home">
          <img src="./images/ball-blue.png" alt="" />
        </div>
        <div id="ball_yellow">
          <img src="./images/quem-somos (9).png" alt="" />
        </div>

        <div className="col49">
          <p className="font_size_128" id="qm-somos-title">
            Quem Somos
          </p>
          <p className="font_size_32 " id="qm-somos-sub">
            A Simplify nasceu em 2022 de uma iniciativa de alunos do Instituto
            PROA visando uma maior visibilidade ao mercado local.
          </p>
          <img src="./images/quem-somos (1).png" id="proa" />
        </div>
        <div className="col49 ">
          <div className="qm-somos-img">
            <img src="./images/quem-somos (10).png" alt="" />
          </div>
        </div>
        <div id="quadro-qm-somos">
          <div className="quadro-qm-somos-imgs div1">
            <img src="./images/quem-somos (11).png" alt="" />{" "}
          </div>
          <div className="quadro-qm-somos-imgs div2">
            <img src="./images/quem-somos (12).png" alt="" />{" "}
          </div>
          <div className="quadro-qm-somos-imgs div3">
            <img src="./images/quem-somos (13).png" alt="" />{" "}
          </div>

          <div className="quadro-qm-somos-imgs div4">
            <img src="./images/quem-somos (14).png" alt="" />{" "}
          </div>
          <div className="quadro-qm-somos-imgs div5">
            <img src="./images/quem-somos (15).png" alt="" />{" "}
          </div>
          <div className="quadro-qm-somos-imgs div6">
            <img src="./images/quem-somos (16).png" alt="" />{" "}
          </div>
          <div className="quadro-qm-somos-imgs div7">
            <img src="./images/quem-somos (17).png" alt="" />{" "}
          </div>
        </div>
      </section>
      <Footer />
    </Container>

  );
}
