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
    console.log(e.target.files[0]);

    // let files = Array.from(e.target.files);
    const formData = new FormData();

    formData.append("image", e.target.files[0]);

    setFile(formData);

    // Object.keys(file).forEach((key) => {
    //   if (file[key] instanceof FileList) {
    //     formData.append(key, file[key][0], file[key][0].name);
    //   } else {
    //     formData.append(key, file[key]);
    //   }
    // });

    // console.log(files);
  };

  function handleSubmit(e) {
    e.preventDefault();

    // let form = document.getElementById("myForm");
    // let formData = new FormData(form);
    // formData.append("images", e.target.files);
    // data.specs = formSpecs;
    // const files = e.target.images.files;

    axios({
      method: "POST",
      url: "http://localhost:2323/products/add",
      data: file,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => console.log(res));

    // fetch("http://localhost:2323/products/add", {
    //   method: "POST",
    //   body: formData,
    // }).then((res) => console.log(res));

    // formData.append("body", JSON.stringify(data));
    // formData.append("body", data);
    // for (let i = 0; i < file.filelist.length; i++) {
    //   formData.append("images", file.filelist.file[i]);
    // }

    // axios
    //   .post("http://localhost:2323/products/add", formData)
    //   .then(() => console.log("posted"));
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
            name="image"
            placeholder="images"
            onChange={fileHandler}
          />

          <input type="submit" onClick={handleSubmit} />
        </form>
      </Modal>
    </>
  );
}
