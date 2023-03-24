import axios from "axios";
import { useEffect, useState } from "react";

export function Moderators() {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:2323/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      {products ? (
        <div>
          {products.map((product, i) => (
            <div key={i}>
              <p>name: {product.name}</p>
              <p>category: {product.category.name}</p>
              <p>brand: {product.brand.name}</p>
              <img alt="sample" src={product.image[0]} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
