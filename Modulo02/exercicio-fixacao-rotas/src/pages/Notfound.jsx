import { Link } from "react-router-dom"

const Notfound = () => {
  return (
    <>
      <main>
        <h3>404 Página não encontrada</h3>
        <Link to={"/"}>Voltar</Link>
      </main>
    </>
  )
}

export default Notfound