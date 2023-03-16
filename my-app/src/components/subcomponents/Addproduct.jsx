import "../../styles/addproduct.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";

import axios from "axios";

export default function AddProduct() {
  const [show, setShow] = useState(false);

  const [specFields, setSpecFields] = useState([
    { specKey: "", specValue: "" },
  ]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const specList = specFields.map((field) => {
      let obj = {};
      obj[field.specKey] = field.specValue;
      return obj;
    });

    const newItem = {
      name: e.target.name.value,
      image: e.target.image.value,
      description: e.target.description.value,
      brand: e.target.brand.value,
      spec: specList,
      price: e.target.price.value,
      stock: e.target.stock.value,
      category: e.target.category.value,
      sale: e.target.sale.value,
    };
    console.log(newItem);
    setShow(false);

    try {
      axios
        .post("http://localhost:2323/products/add", newItem)
        .then(() => console.log("POST done"));
    } catch (error) {
      console.log(error.message);
    }
    window.location.reload();
  };

  const addSpecField = (e) => {
    let newfield = { specKey: "", specValue: "" };
    setSpecFields([...specFields, newfield]);
  };

  const removeSpecField = (index) => {
    let data = [...specFields];
    data.splice(index, 1);
    setSpecFields(data);
  };

  const handleSpecChange = (index, e) => {
    let data = [...specFields];
    data[index][e.target.name] = e.target.value;
    setSpecFields(data);
  };

  return (
    <>
      <button onClick={handleShow} className="btn addBtn">
        Add product
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <form action="" onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <strong>product</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="inputsAddItem">
              <input
                className="inputAddItem"
                type="text"
                placeholder="Category"
                name="category"
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="image"
                name="image"
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="name"
                name="name"
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="brand"
                name="brand"
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="price"
                name="price"
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="stock"
                name="stock"
              />
              <input
                className="inputAddItem"
                type="text"
                placeholder="sale"
                name="sale"
              />
              <textarea
                className="inputAddItem"
                type="text"
                placeholder="Description"
                name="description"
              />
              <p className="text-start mt-4">specs</p>

              {specFields.map((spec, index) => {
                return (
                  <div key={index} className="specBox d-flex flex-wrap">
                    <input
                      className="inputSpec mt-2"
                      type="text"
                      placeholder="Үзүүлэлт"
                      name="specKey"
                      // value={spec.key}
                      onChange={(e) => handleSpecChange(index, e)}
                    />
                    <input
                      className="inputSpec mt-2 ms-2"
                      type="text"
                      placeholder="Үзүүлэлтийн утга"
                      name="specValue"
                      // value={spec.value}
                      onChange={(e) => handleSpecChange(index, e)}
                    />
                    <button
                      className="btn btn-danger removeBtn"
                      onClick={() => removeSpecField(index)}
                    >
                      -
                    </button>
                  </div>
                );
              })}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="addBtns d-flex justify-content-between">
              <div
                type="button"
                className="btn btn-secondary mx-2"
                onClick={addSpecField}
              >
                add spec
              </div>

              <button type="submit" className="btn blueBtn">
                submit
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
