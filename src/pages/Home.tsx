import { useEffect, useState } from "react";
import { API_URL } from "../config";
import ProductList from "../components/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log("data", data);
    setProducts(data)
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-8">
      <div className="container bg-white">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Featured Products
        </h1>
      </div>
      <ProductList products={products}/>
    </div>
  );
};

export default Home;
