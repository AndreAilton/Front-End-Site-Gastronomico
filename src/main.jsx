import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './global/global.css'
import Navbar from "./components/Navbar";
import MainRoutes from './routes';
import Footer from './components/footer';
import { CartProvider } from './contexts/useCartContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter basename='/Front-End-Site-Gastronomico'>
        <Navbar />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '61Vh'}}>
        <MainRoutes />
        </div>
        <Footer style ={{ marginTop: 'auto'}} />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
