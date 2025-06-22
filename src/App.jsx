import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Writeup from "./components/Writeup";
import Blog from "./components/Blog";
import Member from "./components/Member";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/writeup" element={<Writeup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/member" element={<Member />} />
        {/* Trang mặc định có thể redirect tới /login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
