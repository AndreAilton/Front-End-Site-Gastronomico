import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Plates from "./pages/plates";
import Profile from "./pages/profile";
import Cart from "./pages/cart";
import Auth from "./pages/auth";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="Front-End-Site-Gastronomico/" element={<Home />} />
      <Route path="Front-End-Site-Gastronomico/plates" element={<Plates />} />
      <Route path="Front-End-Site-Gastronomico/profile" element={<Profile />} />
      <Route path="Front-End-Site-Gastronomico/cart" element={<Cart />} />
      <Route path="Front-End-Site-Gastronomico/auth" element={<Auth />} />
    </Routes>
  );
}