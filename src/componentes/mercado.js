export function Mercado() {
  return (
    <div className="mercados container ">
      <p className="mercados_parceiros fontes_desktop"> Mercados Parceiros</p>
      <div className="container-categorias">
        <div className="parceiros parceiros_left">
          <img src="../images/Sucos naturais logo 2.png" className="logo_off" />
          <div className="caixa_parceiros">
            <p className="font_size_28 fontes_categorias">
              Mercado Quatro Irmãos
            </p>
            <p className="font_size_20 fontes_categorias_sub">
              R.Jorge Ward, 327 - Rio Pequeno, São Paulo - SP, 05386-160
            </p>
            <button className="Saiba_mais_off">
              <p className="font_size_32">Saiba mais</p>
            </button>
          </div>
        </div>

        <div className="parceiros_centro">
          <img
            src="../images/Logotipo cervejaria vintage retro grátis 1.png"
            className="logo_on"
          />
          <div className="caixa_parceiros">
            <p className="font_size_36 fontes_categorias">
              Mercado Quatro Irmãos
            </p>
            <p className="font_size_24 fontes_categorias_sub">
              Rua Professor Celso Quirino dos Santos, 57 - Cidade São Francisco,
              São Paulo - SP, 05353-030
            </p>
            <button className="Saiba_mais_on">
              <p className="font_size_36">Saiba mais</p>
            </button>
          </div>
        </div>

        <div className="parceiros parceiros_right">
          <img
            src="../images/Azul-claro e Creme Simples Linha Contínua Academia de Ginástica Logotipo 2.png"
            className="logo_off"
          />
          <div className="caixa_parceiros ">
            <p className="font_size_28 fontes_categorias">
              Mercado Quatro Irmãos
            </p>
            <p className="font_size_20 fontes_categorias_sub">
              Rua Professor Celso Quirino dos Santos, 57 - Cidade São Francisco
            </p>
            <button className="Saiba_mais_off">
              <p className="font_size_32">Saiba mais</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mercado;
