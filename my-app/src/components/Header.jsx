import "../styles/header.css";
export default function Header() {
  return (
    <div className="header">
      <div>Logo</div>
      <div>
        <input placeholder="search"></input>
        <button>search</button>
      </div>
      <div>Logout</div>
    </div>
  );
}
