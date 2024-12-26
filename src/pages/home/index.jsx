
import './Home.css';

import Dessert from '../../../public/imgs/homepage/dessert.jsx'
import NaturalFood from '../../../public/imgs/homepage/naturalFood.jsx'
import Vegetable from '../../../public/imgs/homepage/vegetable.jsx'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <section className="hero">
        <h2>Bem-vindo ao nosso restaurante!</h2>
        <p>Descubra o melhor da culinária local com pratos irresistíveis.</p>
        <button className="btn" onClick={ () => navigate('/auth')}> Faça o Cadastro </button>
      </section>

      <section className="featured-dishes">
        <h2>Pratos de Todos os Tipos</h2>
        <div className="dishes-container">
          <div className="dish-card">
          <NaturalFood />
            <h3>Churrasco</h3>
            <p>O melhor Rodizio do Brasil</p>
          </div>
          <div className="dish-card">
          <Vegetable />
            <h3>Vegetariano</h3>
            <p>Vegetais mais frescos do Brasil</p>
          </div>
          <div className="dish-card">
          <i><Dessert /></i>
            <h3>Sobremesas</h3>
            <p>Sobremesas para satisfazer todos os gostos.</p>
          </div>
        </div>
      </section>
      <section className="about">
        <h2>Sobre o Restaurante</h2>
        <p>Fundado em 2020, o Restaurante Sabor & Cia oferece uma experiência culinária única, com pratos tradicionais e contemporâneos.</p>
      </section>

    </div>
  );
}

export default Home;
