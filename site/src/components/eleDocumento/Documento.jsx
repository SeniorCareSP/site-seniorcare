import React, { useState } from 'react';
import { IconButton, Stack, ToggleButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Style from './Documento.module.css';
import icon from '../../utils/assets/Info.png';

function Documento({ idDenunciado, idDenuncia, nome, tag, data, status }) {
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  const abrirDenuncia = () => {
    localStorage.setItem('idDenuncia', idDenuncia);
    localStorage.setItem('idDenunciado', idDenunciado)
    navigate("/admin/denuncias");
  };

  return (
    <div className={Style.card}>
      <Stack direction={'row'} className={Style.conteudo} spacing={11} alignItems="center">
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
        <p>{nome}</p>
        <p>{tag}</p>
        <p>{data}</p>
        <p>{status ? "Fechado" : "Aberto  "}</p>
        <img src={icon} alt="info" onClick={abrirDenuncia} className={Style["info-icon"]} />
      </Stack>
    </div>
  );
}

export default Documento;
