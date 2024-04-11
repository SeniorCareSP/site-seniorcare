import * as React from 'react';
// import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


function Login(){

  const navigate = useNavigate()

  return(
    <>
        <h1>Funfou</h1>
        {/* <Button variant="contained">Contained</Button> */}
        <button onClick={() => navigate("/")}>ir para outra pagina</button>
    </>
  )
}

export default Login;

