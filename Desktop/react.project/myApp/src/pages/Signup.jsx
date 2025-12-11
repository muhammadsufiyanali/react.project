
            
 import { useState } from "react";
 import { Link, useNavigate } from "react-router-dom";
            
 export default function Signup() {
   const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }
    
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(u => u.email === email)) {
      alert("Email already exists");
      return;
    }
    
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Sign up successful!");
    nav("/");
    
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
      <button onClick={handleSignup}>Sign Up</button>
      I already have an account? <Link to="/">Login</Link>
    </div>
  );
}

