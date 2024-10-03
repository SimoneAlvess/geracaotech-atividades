import { Link } from "react-router-dom"
        
const Cursos = () => {
  return (
    <>
      <main className="style-li">
        <h1>Cursos</h1>
        <ul>
          <li>
            <Link to={"/curso/1/Analise de dados com Python"}>Analise de dados com Python</Link>
          </li>
          <li>
            <Link to={"/curso/2/Banco de Dados"}>Banco de Dados </Link>
          </li>
          <li>
            <Link to={"/curso/3/Computação em Nuvem "}>Computação em Nuvem </Link>
          </li>
          <li>
            <Link to={"/curso/4/Desenvolvedor Full Stack"}>Desenvolvedor Full Stack</Link>
          </li>
          <li>
            <Link to={"/curso/5/Segurança da Informação"}>Segurança da Informação</Link>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Cursos