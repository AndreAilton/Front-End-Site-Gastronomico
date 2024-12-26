import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Plates from "./pages/plates";
import Profile from "./pages/profile";
import Cart from "./pages/cart";
import Auth from "./pages/auth";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plates" element={<Plates />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}