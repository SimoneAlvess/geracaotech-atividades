import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <div className="h-screen flex flex-column align-items-center justify-content-center surface-200">
        <span className="pi pi-exclamation-triangle pb-3" style={{ fontSize: "9rem", color: "#c64848" }}></span>
        <h2>404 Página não encontrada</h2>
        <Link to={"/"} className="text-800 hover:text-500 no-underline flex justify-content-center align-items-center pt-2">
          <span className="pi pi-angle-left pr-1 cursor-pointer" style={{ fontSize: "15px" }}></span>
          Voltar para Home
        </Link>
      </div>
    </>
  );
};

export default Notfound;
