import Banner from "./components/Banner";
import FormaDeBola from "./components/FormaDeBola";
import Header from "./components/Header";
import { Componente2 } from "./components/VariosComponents";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Componente2/>
      <FormaDeBola sabor="Laranja" cobertura="chocolate" />
      <FormaDeBola sabor="Cenoura" cobertura="creme" />
    </>
  );

};

export default App;
