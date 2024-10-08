/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { API } from "../services";

const Home = () => {
  const [products, setProducts] = useState([]);

  async function buscarProdutos() {
    const request = await API.get("/products");
    setProducts(request.data);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      <section className="overflow-hidden px-5">
        <h1 className="mb-5">Lista de Produtos</h1>
        <ul className="grid list-none p-0 cursor-pointer">
          {products.map((product) => (
            <li className="col-12 md:col-3">
              <div className="shadow-3 p-3 border-round-xl">
                <div className="relative">
                  <img className="w-full" style={{height: "300px", objectFit:"contain" }} src={product.image} alt={product.title} />
                  <h6 className="absolute top-0 right-0 bg-cyan-700 py-1 px-2 border-round-xl text-white">{product.rating.rate}</h6>
                </div>
                <h3 className="white-space-nowrap overflow-hidden text-overflow-ellipsis">{product.title}</h3>
                <h6 className="uppercase text-cyan-700">{product.category}</h6>
                <h2 className="mt-4">R$ {product.price}</h2>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
