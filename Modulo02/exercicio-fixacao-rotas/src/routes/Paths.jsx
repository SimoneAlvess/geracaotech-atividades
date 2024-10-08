import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import { PageLayout } from "../layouts/PageLayout";
import Notfound from "../pages/Notfound";
import Produtos from "../pages/Produtos";
import Produto from "../pages/Produto";
import { useContext } from "react";
import { Context } from "../contexts/AuthContext";

const Paths = () => {
  const { logado } = useContext(Context);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {logado && (
            <>
              <Route path="/" element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/produto/:id/:nome" element={<Produto />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
            </>
          )}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
