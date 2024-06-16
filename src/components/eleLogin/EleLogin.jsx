import Style from "../../pages/login/Login.module.css";
import Stack from '@mui/material/Stack';
import InputTexfield from '../Input/Input';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import ButtonAzul from "../botao/BotaoAzul";
import api from "../../api/Usuario/apiUsuario";
import { Alert } from "@mui/joy";
function EleLogin() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorSenha, setErrorSenha] = useState(false);
  const [mensagemEmail, setMensagemEmail] = useState('');
  const [mensagemSenha, setMensagemSenha] = useState('');
  const [mensagemLogin, setMensagemLogin] = useState('');

  const handleInputChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  }
  const handleSave = (event) => {
    event.preventDefault();
    var isValid = true;

    // validação de email
    if (!email) {
      setErrorEmail(true);
      setMensagemEmail("Preencha este campo")
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {

      setErrorEmail(true);
      setMensagemEmail("Insira um email valido")
      isValid = false;
    } else {
      setErrorEmail(false);
      setMensagemEmail("")
    }

    // validação de senha
    if (!senha) {
      setErrorSenha(true);
      setMensagemSenha("Preencha este campo");
      isValid = false;
    } else {
      setErrorSenha(false);
      setMensagemSenha("");
    }

    // verificando se é possivel fazer login
    if (isValid == false) {
      console.log("impossivel fazer login");
      return;
    }

    const objetoAdicionado = {
      email,
      senha
    }

    api.post('/login', {
      email,
      senha
    }).then(response => {
      const { userId, email, tipoUsuario, nome, token, status } = response.data;
      if (response.status == 204){
        console.log('usuario não encontrado');
        setMensagemLogin(<Alert severity="error">Usuário não existe ou senha incorreta</Alert>)
        return;
      }

      if(status == false){
        console.log('Conta suspensa');
        setMensagemLogin(<Alert severity="error">Esta conta esta suspensa!</Alert>)
        return;
      }

      console.log(`Usuário ID: ${userId}`);
      //console.log(`Nome: ${nome}`);
      //console.log(`Email: ${email}`);
      //console.log(`Token: ${token}`);
      localStorage.setItem('idUsuario', userId);
      localStorage.setItem('tipoUsuario', tipoUsuario);
      localStorage.setItem('token', token);
      console.log("Login feito com sucesso!");

      if (tipoUsuario === "ADMINISTRADOR") {
        navigate("/admin/dashboard")
      } else {
        navigate("/procurar");
      }
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
              <span>Login | <a onClick={() => navigate("/cadastro")}>Cadastro</a></span>
            </div>
            <Stack spacing={5} className={Style["itens"]}>
              <InputTexfield helperText={mensagemEmail} error={errorEmail} label="Email" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
              <InputTexfield helperText={mensagemSenha} error={errorSenha} label="Senha" value={senha} onChange={(e) => handleInputChange(e, setSenha)} type="password" />
              {mensagemLogin}
              <a href="">Esqueceu a senha?</a>
              <ButtonAzul className={Style["button"]} onClick={handleSave} variant="contained">Entrar</ButtonAzul>
              <a href="" onClick={() => navigate("/")}>Voltar</a>
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  )
}

export default EleLogin;

