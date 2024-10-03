import { useParams } from "react-router-dom"

const Curso = () => {
  const { nome } = useParams();
  return (
    <>
      <main>
        <h1>Curso de {nome}</h1>
      </main>
    </>
  )
}

export default Curso