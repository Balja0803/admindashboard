import { useState } from "react";
import Addproduct from "../components/subcomponents/Addproduct";
import "../styles/products.css";

export function Products(props) {
  const prod = props.product;
  const [showProduct, setShowProduct] = useState(false);
  const addProduct = () => {
    if (showProduct) {
      setShowProduct(false);
    } else {
      setShowProduct(true);
    }
  };
  return (
    <div>
      <div>
        <button onClick={addProduct}>Add Product</button>
        {showProduct ? <Addproduct data={prod} /> : null}
      </div>
      <table>
        <thead>
          <tr>
            <th>Product name</th>
            <th>Product price</th>
            <th>Product sale</th>
            <th>stock</th>
            <th>Id</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {prod.map((item, index) => (
            <tr className="tr" key={index}>
              <td>{item.name}</td>
              <td>{item.price}$</td>
              <td>{item.sale}</td>
              <td>{item.stock}</td>
              <td>{item.id}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
