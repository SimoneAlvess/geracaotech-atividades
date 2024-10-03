import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { Button } from "primereact/button";

const Login = () => {
  return (
    <>
      <main>
        <div>
          <form className="bg-yellow-100 p-5 border-round-xl shadow-4">
            <h1 className="mb-2">Login</h1>
            <h4 className="mb-4">Seja bem vindo(a)</h4>
            <label htmlFor="email" className="block uppercase text-sm font-semibold">
              Email
            </label>
            <InputText id="email" type="email" placeholder="email@email.com" className="my-2 p-2 w-full" />

            <label htmlFor="senha" className="block uppercase text-sm font-semibold">
              Senha
            </label>
            <IconField>
              <InputText id="senha" placeholder="•••••••" className="p-2 w-full my-3" />
            </IconField>
            <Button label="Entrar" type="submit" className="w-full p-2 bg-yellow-800 border-none border-round-3xl shadow-3" />
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
