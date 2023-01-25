import Home from "./subcomponents/Home";
import Sidebar from "./subcomponents/Sidebar";
import "../styles/main.css";

export default function Main() {
  return (
    <div className="main">
      <Sidebar />
      <Home />
      <div>s</div>
    </div>
  );
}
