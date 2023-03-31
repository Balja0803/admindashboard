import axios from "axios";
import { useState, useEffect } from "react";

export default function ProductRow() {
  const [products, setProducts] = useState();

  async function fetchProducts() {
    let response = await axios("http://localhost:2323/products?page=1");
    console.log(response.data);
    setProducts(response.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>product</div>;
}
