import axios from "axios";
import { useState } from "react";

export default function Addproduct() {
  const [data, setData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    sale: "",
    description: "",
  });
  function dataHandler(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:2022/products/add", {
      name: data.name,
      price: parseInt(data.price),
      sale: parseInt(data.sale),
      stock: parseInt(data.stock),
      category: data.category,
      description: data.description,
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label for="product-name">product name</label>
        <input
          onChange={(e) => dataHandler(e)}
          name="name"
          id="name"
          value={data.name}
        />
        <label for="price">Price</label>
        <input
          onChange={(e) => dataHandler(e)}
          type="number"
          id="price"
          name="price"
          value={data.price}
        />
        <label for="stock">Stock</label>
        <input
          onChange={(e) => dataHandler(e)}
          type="text"
          id="stock"
          name="stock"
          value={data.stock}
        />
        <label for="category">Category</label>
        <input
          onChange={(e) => dataHandler(e)}
          name="category"
          id="category"
          type="text"
          value={data.category}
        />
        <label for="sale">Sale</label>
        <input
          onChange={(e) => dataHandler(e)}
          type="number"
          name="sale"
          id="sale"
          value={data.sale}
        />
        <label for="description">Description</label>
        <input
          onChange={(e) => dataHandler(e)}
          name="description"
          id="description"
          value={data.description}
        />
        <button type="submit">Submit</button>
        <input type="button" value="cancel" />
      </form>
    </div>
  );
}
