export function Li_categorias({ img_categoria, texto_categoria }) {
  return (
    <li className="categoria">
      <div className="caixa_branca">
        <img src={img_categoria} />
      </div>

      <p>{texto_categoria}</p>
    </li>
  );
}
