import { useState } from "react";
import axios from "axios";

export function Settings() {
  const [data, setData] = useState({ name: "" });
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", JSON.stringify(data));

    axios({
      method: "POST",
      url: "http://localhost:2323/brands/add",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => console.log(res));
  }

  return (
    <div>
      <form encType="multipart/form-data">
        <input
          name="name"
          placeholder="name"
          type="text"
          onChange={handleChange}
        />
        <input type="file" name="image" onChange={fileHandler} />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}
