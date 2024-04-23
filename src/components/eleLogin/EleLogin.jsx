
import Style from "../../pages/login/Login.module.css"
import Stack from '@mui/material/Stack'
import InputTexfield from '../Input/Input';
import { useNavigate } from "react-router-dom";
import ButtonAzul from "../botao/BotaoAzul";


function EleLogin() {

  const navigate = useNavigate()

  return (
    <>
      <div className={Style["card-cadastro"]}>
        <div className={Style["title"]}>
          <span>Login / <a onClick={() => navigate("/cadastro")}>Cadastro</a></span>
        </div>
        <Stack spacing={5} className={Style["itens"]}>
          <InputTexfield label="Email" />
          <InputTexfield label="Senha" type="password"/>
          <a href="">Esqueceu a senha?</a>
          <ButtonAzul className={Style["button"]} onClick={() => navigate("/cadastro2")} variant="contained">Proximo</ButtonAzul>
          <a href="" onClick={() => navigate("/")}>Voltar</a>
        </Stack>
      </div>

    </>
  )
}

export default EleLogin;

