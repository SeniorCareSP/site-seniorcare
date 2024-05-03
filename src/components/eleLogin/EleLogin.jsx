import Style from "../../pages/login/Login.module.css";
import Stack from '@mui/material/Stack';
import InputTexfield from '../Input/Input';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import ButtonAzul from "../botao/BotaoAzul";
import api from "../../api";
function EleLogin() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleInputChange = (event, setStateFunction) => {
    console.log(event.target.value);
    setStateFunction(event.target.value);
  }

  const handleSave = (event) => {
    event.preventDefault();

    if (senha == "" || email == "") {
      console.log("Existem Campos nulos!");
      return;
    }

    const objetoAdicionado = {
      email,
      senha
    }

    api.post('', {
      email,
      senha
    }).then(() => {
      console.log("Cadastro feito com sucesso!");
      navigate("/login");
    }).catch(() => {
      console.log(JSON.stringify(objetoAdicionado));
      console.log("Ocorreu um erro ao cadastrar, por favor, tente novamente.")
    })
  }





  return (
    <>
      <div className={Style["card-cadastro"]}>
        <div className={Style["linha"]}></div>
        <div className={Style["content"]}>
          <Stack spacing={6}>
            <div className={Style["title"]}>
              <span>Login / <a onClick={() => navigate("/cadastro")}>Cadastro</a></span>
            </div>
            <Stack spacing={5} className={Style["itens"]}>
              <InputTexfield label="Email" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
              <InputTexfield label="Senha" value={email} onChange={(e) => handleInputChange(e, setSenha)} type="password" />
              <a href="">Esqueceu a senha?</a>
              <ButtonAzul className={Style["button"]} onClick={() => navigate("/")} variant="contained">Entrar</ButtonAzul>
              <a href="" onClick={() => navigate("/")}>Voltar</a>
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  )
}

export default EleLogin;

