import { useParams } from "react-router-dom";

const Curso = () => {
  const { nome } = useParams();
  return (
    <>
      <h1>Curso de {nome}</h1>
    </>
  );
};

export default Curso;
