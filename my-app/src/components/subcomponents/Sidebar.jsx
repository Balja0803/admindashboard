import "../../styles/sidebar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ asideMenu }) {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="aside-menu">
      {asideMenu.map((menu, index) =>
        current === index ? (
          <div key={index} className="aside-menu-item aside-menu-item-active">
            {menu.name}
          </div>
        ) : (
          <div
            key={index}
            className="aside-menu-item"
            onClick={() => {
              setCurrent(index);
              navigate(menu.url);
            }}
          >
            {menu.name}
          </div>
        )
      )}
    </div>
  );
}
