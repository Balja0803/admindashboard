import { useState } from "react";

export default function Addproduct(props) {
  const [data, setData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    sale: "",
    description: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label for="product-name">product name</label>
        <input name="name" value={data.name} />
        <label for="price">Price</label>
        <input type="number" name="price" value={data.price} />
        <label for="stock">Stock</label>
        <input type="text" name="stock" value={data.stock} />
        <label for="categoy" name="category">
          Category
        </label>
        <input />
        <label for="sale">Sale</label>
        <input type="number" name="sale" value={data.sale} />
        <label for="description">Description</label>
        <input name="description" value={data.description} />
        <button type="submit">Submit</button>
        <intut type="button" value="cancel" />
      </form>
    </div>
  );
}
