import SlideCaixas from "./SlideCaixas";
import Search from "./Search";

export function SectionContainer() {
  return (
    <main>
      <div className="container">
        <Search />
        <div className="img_home">
          <img src="./images/img_home.png" alt="" />
        </div>
        <div className="texto-central">
          <p className="texto-home">
            Tudo sobre os <br></br>mercados próximos
          </p>
          <p className="texto-home2">
            <strong>
              de <span>você</span>
            </strong>
          </p>
        </div>
        <div className="filtrar">Filtrar pela localização</div>
        <SlideCaixas />
      </div>
    </main>
  );
}
