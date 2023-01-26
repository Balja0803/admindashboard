import Home from "./subcomponents/Home";
import Sidebar from "./subcomponents/Sidebar";
import "../styles/main.css";
import Products from "./subcomponents/Products";

export default function Main(props) {
  console.log(props.products);
  const myData = props.products;
  return (
    <div className="main">
      <Sidebar />
      {myData && <Products product={myData} />}
    </div>
  );
}
