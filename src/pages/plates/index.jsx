import { useState, useEffect } from "react";
import { GetPlates } from "../../services/plates";
import Loading from "../loading";
import './plates.css';
import { useCartContext } from "../../contexts/useCartContext";
import { ToastContainer, toast } from 'react-toastify';


export default function Index() {
  const [plates, setPlates] = useState([]);
  const [loading, setLoading] = useState(true);
  const {addToCart } = useCartContext();

  const notify = () => toast.success('Adicionado ao carrinho', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    });

  useEffect(() => {
    const fetchPlates = async () => {
      setLoading(true);
      try {
        const response = await GetPlates();
        setPlates(response);
      } catch (error) {
        console.error("Erro ao buscar os pratos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlates();
  }, []);

  function handleAddToCart(plate) {
    notify();
    addToCart(plate);
  } 

  if (loading) {
    return <Loading />;
  }

  return (
    <div  className="plates-container">
      <ToastContainer />
      {plates.map((plate) => (
        <div className="plate" key={plate._id}>
          <img className="plate-image" src={plate.image} alt="Não Encontrado" />
          <h2>{plate.name}</h2>
          <p>{plate.description}</p>
          <p>{plate.ingredients.join(" ")}</p>
          <p>Preço: R$ {plate.price}</p>
          <button className="buttonplate" onClick={() => handleAddToCart(plate)}>Adicionar ao carrinho</button>

        </div>
      ))}

    </div>
  )
}
