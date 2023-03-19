import "../../styles/addproduct.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import axios from "axios";

export default function AddProduct() {
  const [file, setFile] = useState();
  const [data, setData] = useState({
    name: "",
    price: null,
    specs: null,
  });
  const [show, setShow] = useState(false);
  const [formSpecs, setFormSpecs] = useState([
    {
      key: "",
      value: "",
    },
  ]);

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
    console.log(e.target.files);
    setFile(e.target.files);
    console.log("file", file[0]);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    data.specs = formSpecs;
    // const files = e.target.images.files;
    const files = [...file, file[0], file[1], file[2]];
    formData.append("images", files);
    // formData.append("body", data);
    // for (let i = 0; i < file.filelist.length; i++) {
    //   formData.append("images", file.filelist.file[i]);
    // }
    console.log("data", formData);
    axios
      .post("http://localhost:2323/products/add", formData)
      .then(() => console.log("posted"));
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
            type="file"
            name="images"
            multiple="multiple"
            placeholder="images"
            onChange={fileHandler}
          />

          <input type="submit" onClick={handleSubmit} />
        </form>
      </Modal>
    </>
  );
}
