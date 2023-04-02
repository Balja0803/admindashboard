import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes } from "react-router-dom";
import Login from "./pages/Login";
import { useUserContext } from "./util/UserContext";

function App() {
  const { isLoggedIn } = useUserContext();

  return <div className="App">{isLoggedIn ? <Main /> : <Login />}</div>;
}

export default App;
