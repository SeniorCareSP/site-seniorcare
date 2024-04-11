import * as React from 'react';
import Style from "./Login.module.css"
import Imagem from "../../utils/assets/IdosoJunto.png"
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";
import { ThemeProvider } from '@emotion/react';
import { TextField } from '@mui/material';


function Login(){

  const navigate = useNavigate()

  return(
    <>

        {/* <h1>Funfou</h1> */}
        <div className={Style["content-login"]}>
          <div className={Style["background-image"]}>
          <img src={Imagem} alt = "Idosos juntos"/>
          </div>
          <div className={Style["content-input"]}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          
          </div>

        </div>
        {/* <Button variant="contained">Contained</Button> */}
        <button onClick={() => navigate("/")}>ir para outra pagina</button>
    </>
  )
}

export default Login;

