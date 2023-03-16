import axios from "axios";
import { useState } from "react";
import Addproduct from "../components/subcomponents/Addproduct";
import EditProduct from "../components/subcomponents/EditProduct";
import "../styles/products.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export function Products() {
  return (
    <div>
      <div>
        <Addproduct />
      </div>
      Products
    </div>
  );
}
