import axios from "axios";
import { useState } from "react";
import Addproduct from "../components/subcomponents/Addproduct";
import EditProduct from "../components/subcomponents/EditProduct";
import "../styles/products.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ProductRow from "../components/subcomponents/ProductRow";

export function Products() {
  return (
    <div>
      <Addproduct />
      <ProductRow />
    </div>
  );
}
