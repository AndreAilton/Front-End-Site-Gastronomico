import axios from "axios";

export default function AuthServices() {
    const url = 'https://back-end-site-gastronomico.onrender.com'

    const Login = async (formData) => {
        try {
            const result = await axios.post(`${url}/auth/login`, formData);
            return result.data;
        } catch (error) {
            console.error(error);
        }
    }

    const Register = async (formData) => {
        try {
            const response = await axios.post(`${url}/auth/register`, formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

    }


    return { Login, Register}

}