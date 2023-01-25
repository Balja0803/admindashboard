import Home from "./subcomponents/Home";
import Sidebar from "./subcomponents/Sidebar";
import "../styles/main.css";

export default function Main(props) {
  const { products } = props;
  console.log(products);
  return (
    <div className="main">
      <Sidebar />
      <Home />
      <p>name : {products[0].name} </p>
    </div>
  );
}
