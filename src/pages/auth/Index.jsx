import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import AuthServices from "../../services/auth";
import Loading from "../loading";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export default function Index() {
  const [formType, SetFormType] = useState("login");
  const [formData, setFormData] = useState(null);
  const { Register, Login } = AuthServices();
  const navigate = useNavigate();

  const authData = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    if (authData) {
      navigate("/profile");
    }
  }, [authData]);

  const handleChangeFormType = () => {
    setFormData(null);
    SetFormType(formType === "login" ? "register" : "login");
  };

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    switch (formType) {
      case "login":
        try {
          SetFormType("loading");
          const result = await Login(formData);
          if (result.auth && result.token) {
            localStorage.setItem("token", result.token);
            localStorage.setItem("auth", JSON.stringify(result.user));
            navigate("/");
          }
          SetFormType("login");
        } catch (error) {
          console.error(error);
          SetFormType("login");
        }
        break;

      case "register":
        if (formData.password !== formData.confirmpassword) {
          alert("Senhas não conferem");
          return;
        }
        try {
          await Register(formData);
          delete formData.confirmpassword;

          try {
            SetFormType("loading");
            const result = await Login(formData);
            if (result.auth && result.token) {
              localStorage.setItem("token", result.token);
              localStorage.setItem("auth", JSON.stringify(result.user));
              navigate("/");
            }
            SetFormType("login");
          } catch (error) {
            console.error(error);
            SetFormType("login");
          }
          
          navigate("/");


          console.log(formData)
        } catch (error) {
          console.error(error);
        }
        break;

      default:
        break;
    }
  };

  if (formType === "loading") {
    return <Loading />;
  }

  return (
    <div className="authContainer">
      {formType === "login" ? (
        <>
          <h1>Login</h1>
          <button className="logout-button" onClick={handleChangeFormType}>
            Não tem uma conta? Clique aqui
          </button>
          <form onSubmit={handleFormSubmit}>
            <TextField
              required
              label="Email"
              type="email"
              name="email"
              variant="outlined"
              onChange={handleFormDataChange}
            />
            <TextField
              required
              label="Password"
              type="password"
              name="password"
              variant="outlined"
              onChange={handleFormDataChange}
            />
            <Button type="submit">Login</Button>
          </form>
        </>
      ) : null}

      {formType === "register" ? (
        <>
          <h1>Registro</h1>
          <button className="logout-button" onClick={handleChangeFormType}>
            Já tem uma conta? Clique aqui
          </button>
          <form onSubmit={handleFormSubmit}>
            <TextField
              required
              label="Nome Completo"
              type="text"
              name="name"
              variant="outlined"
              onChange={handleFormDataChange}
            />
            <TextField
              required
              label="Email"
              type="email"
              name="email"
              variant="outlined"
              onChange={handleFormDataChange}
            />
            <TextField
              required
              label="Senha"
              type="password"
              name="password"
              variant="outlined"
              onChange={handleFormDataChange}
            />
            <TextField
              required
              label="Confirme a Senha"
              type="password"
              name="confirmpassword"
              variant="outlined"
              onChange={handleFormDataChange}
            />
            <Button type="submit">Registrar</Button>
          </form>
        </>
      ) : null}
    </div>
  );
}
