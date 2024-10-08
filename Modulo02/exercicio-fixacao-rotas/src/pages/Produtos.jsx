import { Link } from "react-router-dom"
        
const Produtos = () => {
  return (
    <>
      <h1>Produtos</h1>
      <ul>
        <li>
          <Link to={"/produto/1/Celular"}>Celular</Link>
        </li>
        <li>
          <Link to={"/Produto/2/Sapato"}>Sapato</Link>
        </li>
        <li>
          <Link to={"/produto/3/Camisa"}>Camisa</Link>
        </li>
        <li>
          <Link to={"/produto/4/Bicicleta"}>Bicicleta</Link>
        </li>
        <li>
          <Link to={"/produto/5/Relógio"}>Relógio</Link>
        </li>
      </ul>
    </>
  );
}

export default Produtos