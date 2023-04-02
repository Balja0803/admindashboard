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
import Header from "./Header";

export default function Main() {
  return (
    <div className="main">
      <Header />
      <Sidebar asideMenu={asideMenu} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/moderator" element={<Moderators />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}
