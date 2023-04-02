import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <div className="App">{isLoggedIn ? <Main /> : <Login />}</div>;
}

export default App;
