
import { useCartContext } from "../../contexts/useCartContext";
import { PostOrder } from "../../services/order";
import './CartStyle.css';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function Index() {
  const { cart, addToCart, removeFromCart, clearCart } = useCartContext();
  const authData = JSON.parse(localStorage.getItem("auth"));

const notifysucess = () => toast.success('Ordem Realizada Com sucesso', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    });


  const notify = () =>
    toast.error(
      <div>
        Faça Login para finalizar o pedido {" "}
        <Link to="/auth" style={{ color: '#4CAF50', textDecoration: 'underline' }}>
          Fazer Login
        </Link>
      </div>,
      {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );

  const OrderSend = async (e) => {
    e.preventDefault();

    if (authData) {
      const DataOrder = {
        Client: authData.id,
        name: authData.name,
        finished: "Pending",
        plates : cart.map((plate) => ({
          plate: plate._id,
          quantity: plate.quantity}))
      }
      clearCart();
      notifysucess();
      try {
        await PostOrder(DataOrder);

      } catch (error) {
        console.error(error);
      } 
      
    } else {
      notify();


    }
  }
  



  // Função para calcular o total de cada item
  const calculateItemTotal = (price, quantity) => price * quantity;

  // Função para calcular o total geral do carrinho
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + calculateItemTotal(item.price, item.quantity), 0);
  };



  return (
    <div className="cart-container">
      <ToastContainer />
      <h1 className="cart-title">Meu Carrinho</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div key={item._id} className="cart-item">
              <img 
                src={item.image} 
                alt={item.name} 
                className="item-image"
              />
              <div className="item-details">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p><strong>Ingredientes:</strong> {item.ingredients.join(', ')}</p>
                <p><strong>Preço Unitário:</strong> R$ {item.price.toFixed(2)}</p>
                <p>
                  <strong>Quantidade:</strong>
                  <button 
                    className="quantity-button" 
                    onClick={() => removeFromCart(item._id)}
                  >-</button>
                  {item.quantity}
                  <button 
                    className="quantity-button" 
                    onClick={() => addToCart(item)}
                  >+</button>
                </p>
                <p><strong>Total:</strong> R$ {calculateItemTotal(item.price, item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total Geral: R$ {calculateTotal().toFixed(2)}</h2>
          </div>
          <button className="button" onClick={OrderSend}>Finalizar Pedido</button>
        </div>
      ) : (
        <p className="empty-message">O carrinho está vazio.</p>
      )}
    </div>
  );
}
