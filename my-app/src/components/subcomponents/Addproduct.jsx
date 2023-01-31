import axios from "axios";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { bootstrap } from "bootstrap";

export default function Addproduct() {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const [id, setId] = useState("");
  const [data, setData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    sale: "",
    description: "",
    id: "",
  });
  function updateData(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setId(small_id);
    setData((data.id = `${id ? id : small_id}`));
    axios.post("http://localhost:2020/products/add", data);

    console.log(data);
    setData({
      name: "",
      price: "",
      stock: "",
      category: "",
      sale: "",
      description: "",
      id: "",
    });
    setId("");
  };
  return (
    <div>
      <form className="add-product" onSubmit={submitHandler}>
        <label for="name">product name</label>
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
        <label for="category">Category</label>
        <input
          onChange={updateData}
          name="category"
          type="text"
          value={data.category}
        />
        <label for="sale">Sale</label>
        <input
          onChange={updateData}
          type="number"
          name="sale"
          value={data.sale}
        />
        <label for="description">Description</label>
        <input
          onChange={updateData}
          name="description"
          value={data.description}
        />

        <button type="submit">Submit</button>
        <input type="button" value="cancel" />
      </form>
    </div>
  );
}
