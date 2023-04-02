import { useState } from "react";
import "../styles/login.css";
import { Card, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useUserContext } from "../util/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useUserContext();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked", data);
    try {
      const response = await axios.post(
        "http://localhost:2323/users/login",
        data
      );
      console.log(response);

      if (response.data.success) {
        const adminToken = response.data.token;
        localStorage.clear();
        localStorage.setItem("admin_token", adminToken);
        setIsLoggedIn(true);
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Login">
      <Card>
        <Card.Body>
          <h2>Login</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                required
                placeholder="email"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                required
                placeholder="password"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" onClick={handleSubmit}>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
