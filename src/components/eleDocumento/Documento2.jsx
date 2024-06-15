import React, { useState } from 'react';
import { IconButton, Stack, ToggleButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Style from './Documento.module.css';
import trash from '../../utils/assets/Trash.png'
import edit from "../../utils/assets/Edit.png"


function Documento2() {
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

//   const abrirDenuncia = () => {
//     localStorage.setItem('idDenuncia', idDenuncia);
//     localStorage.setItem('idDenunciado', idDenunciado)
//     navigate("/admin/denuncias");
//   };

  return (
    <div className={Style.card}>
      <Stack direction={'row'} className={Style.conteudo} spacing={9} alignItems="center">
        <Stack direction={'row'} spacing={3} alignItems="center">
          <ToggleButton
            className={Style["toggle-button"]}
            color='primary'
            value="check"
            selected={selected}
            onChange={() => setSelected(!selected)}
          >
            <IconButton value="sim" />
          </ToggleButton>
          <span className={Style["foto-doc"]}></span>
        </Stack>
        <p>nome</p>
        <p>permissão</p>
        <p>telefone</p>
        <p>data</p>
        <p>email</p>
        <img src={edit} alt="info"  className={Style["info-icon"]} />
        <img src={trash} alt="info"  className={Style["info-icon"]} />
      </Stack>
    </div>
  );
}

export default Documento2;
