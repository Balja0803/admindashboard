import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";
import axios from "axios";

function EditProduct() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:2323/products")
      .then((res) => setData(res.data));
  }, []);

  // const base64String = btoa(
  //   String.fromCharCode(...new Uint8Array(data && data.image.data.data))
  // );
  console.log(data);
  return (
    <div>
      {data &&
        data[16].image.map((img, i) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(img.data.data))
          );
          return (
            <img
              key={i}
              alt="sample"
              src={`data:image/png; base64, ${base64String}`}
            />
          );
        })}
    </div>
  );
}
export default EditProduct;
