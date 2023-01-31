import axios from "axios";
import { useState } from "react";
import axios from "axios";

export default function Addproduct() {
  const [data, setData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    sale: "",
    description: "",
  });
  function updateData(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:2020/products/add", data);

    console.log(data);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label for="product-name">product name</label>
        <input onChange={updateData} name="name" value={data.name} />
        <label for="price">Price</label>
        <input
          onChange={updateData}
          type="number"
          name="price"
          value={data.price}
        />
        <label for="stock">Stock</label>
        <input
          onChange={updateData}
          type="text"
          name="stock"
          value={data.stock}
        />
        <label for="categoy">Category</label>
        <input onChange={updateData} name="category" />
        <label for="sale">Sale</label>
        <input
          onChange={updateData}
          type="number"
          name="sale"
          value={data.sale}
        />
        <label for="description">Description</label>
        <input name="description" value={data.description} />
        <button type="submit">Submit</button>
        <intut type="button" value="cancel" />
      </form>
    </div>
  );
}
