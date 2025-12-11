import { Link } from "react-router-dom";

export default function Navbar() {


  return (
    <nav style={{
      background: "#194374ff",  
      padding: "15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      
      <div style={{ display: "flex", gap: "20px" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/About">About</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/Contect">Contect</Link>
      </div>

      <button>
        Logout
      </button>
    </nav>
  );
}
