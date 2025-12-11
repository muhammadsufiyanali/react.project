import { Routes, Route, } from "react-router-dom";

import Home from "./pages/Home";
import Contect from "./pages/Contect";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {


  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    );
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contect" element={<Contect />} />
      </Routes>
    </>
  );
}

export default App;
