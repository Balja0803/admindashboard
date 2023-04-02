import "../styles/header.css";
import { useUserContext } from "../util/UserContext";
export default function Header() {
  const { setIsLoggedIn } = useUserContext();
  function logoutHandler() {
    setIsLoggedIn(false);
    localStorage.clear();
  }

  return (
    <div className="header">
      <div>Logo</div>
      <div>
        <input placeholder="search"></input>
        <button>search</button>
      </div>
      <div onClick={logoutHandler}>Logout</div>
    </div>
  );
}
