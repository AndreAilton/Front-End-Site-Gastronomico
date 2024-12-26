import './order.css';
import { Link } from "react-router-dom";

export default function index({orders}) {

  if (!orders.length) {
    return (
      <div className="container centralize">
        <h2>Sua Lista de Pedidos</h2>
        <p>Você ainda não fez nenhum pedido.</p>
        <Link className="button" to="/plates">Pedir Pratos</Link>
      </div>
    )
  }


  return (
    <div className="container">
      <h2>Sua Lista de Pedidos</h2>
    <ul className="order-list" style={{ listStyle: "none" }}>
      {orders.map((order) => (
        <li key={order._id} className="order-item">
          <h3>{new Date(order.date).toLocaleDateString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"})}</h3>
          <h3 className="order-header">{order.name}</h3>
          <p>Status: <strong className='status'>{order.finished}</strong></p>
          <p>Data: {new Date(order.date).toLocaleDateString()}</p>
          <h4>Pratos:</h4>
          <ul style={{ listStyle: "none" }}>
            {order.plates.map((plate) => (
              <li key={plate._id} className="plate-item">
                <p className="plate-name">{plate.name}</p>
                <p>Quantidade: {plate.quantity}</p>
                <p>{plate.description}</p>
                <p>{plate.ingredients.join(" ")}</p>
                <p>Preço: R$ {plate.price}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
  )
}
