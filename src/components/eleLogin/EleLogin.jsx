
import Style from "../../pages/login/Login.module.css"
import Button from '@mui/material/Button';
import Router from '../../routes';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'


import { useNavigate } from "react-router-dom";


function EleLogin() {

  const navigate = useNavigate()

  return (
    <>
      <div className={Style["card-cadastro"]}>

        <div className={Style["title"]}>
          <h1>Login / <a onClick={() => navigate("/cadastro")}>Cadastro</a></h1>
          <h3>parte 1 de 2</h3>
        </div>
        <Stack spacing={3} className={Style["itens"]}>
          <TextField className={Style["input"]} id="outlined-basic" label="E-Mail" variant="outlined" />
          <TextField className={Style["input"]} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
          <a href="">Esqueceu a senha?</a>
          <Button className={Style["button"]} onClick={() => navigate("/cadastro2")} variant="contained">Proximo</Button>
          <a href="" onClick={() => navigate("/")}>Voltar</a>
        </Stack>
      </div>

    </>
  )
}

export default EleLogin;

