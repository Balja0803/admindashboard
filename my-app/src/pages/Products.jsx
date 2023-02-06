import axios from "axios";
import { useState } from "react";
import Addproduct from "../components/subcomponents/Addproduct";
import EditProduct from "../components/subcomponents/EditProduct";
import "../styles/products.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export function Products(props) {
  const [showEdit, setShowEdit] = useState(false);

  const handleClose = () => showEdit(false);
  const handleShow = () => setEditProduct(true);

  const refresh = props.refresh;
  const setRefresh = props.setRefresh;
  const prod = props.product;
  const [showProduct, setShowProduct] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  const addProduct = () => {
    if (showProduct) {
      setShowProduct(false);
    } else {
      setShowProduct(true);
    }
  };
  function deleteProduct(id) {
    axios.delete(`http://localhost:2020/products/delete/${id}`);
    setRefresh(!refresh);
  }

  function editProd(id) {
    if (editProduct) {
      setEditProduct(false);
    } else {
      setEditProduct(true);
    }
  }

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
            <th>Id :</th>
            <th>Category</th>
            <th>delete</th>
            <th>edit</th>
          </tr>
        </thead>

        {prod.map((item, index) => (
          <tbody key={index}>
            <tr className="tr">
              <td>{item.name}</td>
              <td>{item.price}$</td>
              <td>{item.sale}</td>
              <td>{item.stock}</td>
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>
                <button
                  onClick={() => {
                    deleteProduct(item.id);
                  }}
                >
                  delete
                </button>
              </td>
              <td>
                <Button variant="primary" onClick={handleShow}>
                  edit
                </Button>
              </td>
            </tr>
            <tr>
              <Offcanvas show={showEdit} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
              </Offcanvas>
            </tr>
            {/* <tr>
              <EditProduct
                product={item}
                handleClose={handleClose}
                showEdit={showEdit}
              />
            </tr> */}
          </tbody>
        ))}
      </table>
    </div>
  );
}
