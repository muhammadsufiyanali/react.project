          
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
          
   export default function Login() {
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(u => u.email === email && u.password === password);
    
    if (validUser) {
      localStorage.setItem("currentUser", JSON.stringify(validUser));
      alert("Login successful!");
      nav("/"); 
    } else {
      alert("Invalid email or password");
    }
  };
  
  return (
    <div>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      I don't have an account? <Link to="/signup">Signup</Link>
    </div>
  );
}
