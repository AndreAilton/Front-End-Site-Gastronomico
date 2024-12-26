import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
    // Inicializa o estado do carrinho a partir do localStorage ou como um array vazio
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Salva o carrinho no localStorage toda vez que ele é atualizado
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (plate) => {
        const existingPlate = cart.find((item) => item._id === plate._id);
        if (!existingPlate) {
            plate.quantity = 1;
            setCart([...cart, plate]);
        } else {
            existingPlate.quantity += 1;
            setCart([...cart]);
        }
    };

    const removeFromCart = (plateId) => {
        const existingPlate = cart.find((item) => item._id === plateId);

        if (existingPlate) {
            if (existingPlate.quantity > 1) {
                existingPlate.quantity -= 1;
                setCart([...cart]);
            } else {
                const updatedCart = cart.filter((item) => item._id !== plateId);
                setCart(updatedCart);
            }
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ removeFromCart, addToCart, cart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    const context = useContext(CartContext);

    if (!context) {
        console.error("Não foi possível encontrar o contexto");
    }

    return context;
};
