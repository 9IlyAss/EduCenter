import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/auth/login" element={<Login />} />
        {/* <Route path="/auth/register" element={<Register />} /> */}

        {/* Redirect root to login for now */}
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
