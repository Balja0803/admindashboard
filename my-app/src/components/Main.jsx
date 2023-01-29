import Sidebar from "./subcomponents/Sidebar";
import { Route, Routes } from "react-router-dom";
import { asideMenu } from "../util/data";
import "../styles/main.css";
import {
  Dashboard,
  Moderators,
  Orders,
  Products,
  Settings,
  Users,
} from "./../pages";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Main(props) {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios.get("http://localhost:2020/users").then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);

  const myData = props.products;
  return (
    <div className="main">
      <Sidebar asideMenu={asideMenu} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/moderator" element={<Moderators />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/products"
          element={myData && <Products product={myData} />}
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/users" element={users && <Users data={users} />} />
      </Routes>
    </div>
  );
}
