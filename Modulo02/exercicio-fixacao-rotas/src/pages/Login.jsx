import { InputText } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const StyledIconField = styled(IconField)`
  position: relative;
  width: 100%;
  .pi-eye,
  .pi-eye-slash {
    position: absolute;
    right: 10px;
    top: 20px;
  }
`;

const Login = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <>
      <div className="h-screen flex align-items-center justify-content-center px-4 text-0">
        <form className="bg-cyan-700 col-12 md:col-5 lg:col-3 p-5 border-round-xl shadow-4">
          <h1 className="mb-2">Login</h1>
          <h4 className="mb-4">Seja bem vindo(a)</h4>

          <label htmlFor="email" className="block font-semibold">
            Email
          </label>
          <InputText id="email" type="email" placeholder="email@email.com" className="w-full p-2 my-2" />

          <label htmlFor="senha" className="block font-semibold">
            Senha
          </label>
          <StyledIconField>
            <InputIcon className={`pi ${mostrarSenha ? "pi-eye" : "pi-eye-slash"} cursor-pointer`} onClick={() => setMostrarSenha(!mostrarSenha)} />
            <InputText id="senha" type={mostrarSenha ? "text" : "password"} placeholder="•••••••" className="w-full p-2 my-2" />
          </StyledIconField>

          <Button label="Entrar" type="submit" className="w-full bg-cyan-100 text-700 border-none border-round-3xl shadow-3 p-2 mt-4 mb-3" />

          <Link to={"/"} className="text-0 no-underline flex justify-content-center align-items-center">
            <span className="pi pi-angle-left pr-1 cursor-pointer" style={{ fontSize: "15px" }}></span>
            <small> Voltar para Home</small>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
