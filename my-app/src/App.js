import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    setRefresh(true);
  }, [refresh]);

  useEffect(() => {
    axios.get("http://localhost:2020/products").then((res) => {
      setData(res.data);
    });
  }, [refresh]);

  return (
    <div className="App">
      <Header />
      {data && (
        <Main products={data} refresh={refresh} setRefresh={setRefresh} />
      )}
    </div>
  );
}

export default App;
