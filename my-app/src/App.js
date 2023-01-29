import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("http://localhost:2020/products").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      {data && <Main products={data} />}
    </div>
  );
}

export default App;
