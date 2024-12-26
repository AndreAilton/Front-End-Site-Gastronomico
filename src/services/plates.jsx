import axios from "axios";

const url = "https://back-end-site-gastronomico.onrender.com/plates";

export const GetPlate = async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const GetPlates = async () => {
  try {
    const response = await axios.get(`${url}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}