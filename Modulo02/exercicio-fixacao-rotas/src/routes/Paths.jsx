import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import { PageLayout } from "../layouts/PageLayout";
import Notfound from "../pages/Notfound";
import Cursos from "../pages/Cursos";
import Curso from "../pages/Curso";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/curso/:id/:nome" element={<Curso />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
