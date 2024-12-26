import axios from "axios";
import { GetPlate } from "./plates";

const url = "https://back-end-site-gastronomico.onrender.com/orders";


export const GetOrders = async (id,token) => {
  try {
    const response = await axios.get(`${url}/client/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const PostOrder = async (data) => {
  try {
    const response = await axios.post(`${url}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getOrdercomplete = async (id,token) => {
  const ordersData = await GetOrders(id,token); // Chamada ao serviço
  const enrichedOrders = await Promise.all(
    ordersData.map(async (order) => {
      const plates = await Promise.all(
        order.plates.map(async (plate) => {
          // Buscar os dados completos do prato
          const plateData = await GetPlate(plate.plate);
          return {
            ...plate, // Inclui id e quantidade do pedido original
            ...plateData, // Adiciona os dados completos do prato
          };
        })
      );
      return { ...order, plates }; // Adiciona os pratos completos ao pedido
    })
  );
  return enrichedOrders;

}