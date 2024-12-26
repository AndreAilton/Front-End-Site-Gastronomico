import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderItem from "../../components/OrderItem";
import { getOrdercomplete } from "../../services/order"; // Certifique-se de importar corretamente sua função
import Loading from "../loading";
import "./profile.css";

export default function Index() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const authData = JSON.parse(localStorage.getItem("auth"));
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchOrders = async () => {
      if (!authData) {
        navigate("/auth");
        return;
      }

      try {
        setOrders(await getOrdercomplete(authData.id, token));
      } catch (error) {
        console.error("Erro ao buscar os pedidos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [authData, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  if (loading) {
    return <div><Loading /></div>;
  }

  return (
    <div className="profile-container">
      <h1>{authData?.name}</h1>
      <h3>{authData?.email}</h3>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <OrderItem orders={orders} />
    </div>
  );
}
