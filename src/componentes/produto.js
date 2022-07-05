export function Produto({ img_produto, titulo_produto, description, valor }) {
  return (
    <div id="produto">
      <img src={img_produto} />
      <p id="titulo_produto">{titulo_produto} </p>
      <p id="description">{description} </p>
      <p id="valor">{valor}</p>
      <p id="reservar">Resevar</p>
    </div>
  );
}
