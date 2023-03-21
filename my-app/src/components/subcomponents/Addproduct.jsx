import "../../styles/addproduct.css";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import axios from "axios";

export default function AddProduct() {
  const [products, setProducts] = useState();
  const [file, setFile] = useState();
  const [data, setData] = useState({
    name: "",
    price: null,
    stock: null,
    sale: null,
    brand: "",
    category: "",
    description: "",
  });
  const [show, setShow] = useState(false);
  const [formSpecs, setFormSpecs] = useState([
    {
      key: "",
      value: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:2323/products")
      .then((res) => setProducts(res.data));
  }, []);
  const handleSpecs = (index, e) => {
    let specs = [...formSpecs];
    specs[index][e.target.name] = e.target.value;
    setFormSpecs(specs);
    console.log("specs", formSpecs);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("body", JSON.stringify(data));
    formData.append("specs", JSON.stringify(formSpecs));
    axios({
      method: "POST",
      url: "http://localhost:2323/products/add",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => console.log(res));
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add product
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add product</Modal.Title>
        </Modal.Header>
        <form
          id="myForm"
          action="/products/add"
          method="POST"
          encType="multipart/form-data"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="price"
            onChange={handleChange}
          />
          <input
            type="number"
            name="stock"
            placeholder="stock"
            onChange={handleChange}
          />
          <input
            type="number"
            name="sale"
            placeholder="sale"
            onChange={handleChange}
          />

          <br />
          <label htmlFor="specs"> Specs</label>
          {formSpecs.map((spec, index) => (
            <div key={index}>
              <input
                type="text"
                name="key"
                onChange={(e) => handleSpecs(index, e)}
              />
              <input
                type="text"
                name="value"
                onChange={(e) => handleSpecs(index, e)}
              />
            </div>
          ))}
          <input
            type="text"
            name="brand"
            placeholder="brand"
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="category"
            onChange={handleChange}
          />
          <input
            id="description"
            type="textarea"
            rows="2"
            name="description"
            placeholder="description"
            onChange={handleChange}
          />
          <input
            type="file"
            name="image"
            placeholder="images"
            onChange={fileHandler}
          />

          <input type="submit" onClick={handleSubmit} />
        </form>
      </Modal>

      <div>
        {products &&
          products.map((product, i) => (
            <div key={i}>
              <img
                alt="sample"
                src={product.image[0]}
                width="300"
                height="250"
              />
              <p>name : {product.name}</p>
              <p>price : {product.price}</p>
            </div>
          ))}
      </div>
    </>
  );
}
