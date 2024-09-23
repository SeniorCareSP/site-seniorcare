import React from 'react';
import { IconButton, Stack, ToggleButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Style from './Documento.module.css';
import trash from '../../utils/assets/Trash.png';
import edit from "../../utils/assets/Edit.png";
import apiUsuario from '../../api/Usuario/apiUsuario';

function Documento2({ nome, permissao, telefone, data, email, idUsuario}) {
    const [selected, setSelected] = React.useState(false);
    const navigate = useNavigate();

    const handleBloqueio = async () => {
      try {
        await apiUsuario.post(`/bloquear/${idUsuario}`);
        window.location.reload();

    } catch (error) {
        console.error("Erro ao deletar usuário:", error);

      }
    };

    return (
        <div className={Style.card}>
            <Stack direction="row" className={Style.conteudo} spacing={9} alignItems="center">
                <Stack direction="row" spacing={3} alignItems="center">
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
                <p>{permissao}</p>
                <p>{telefone}</p>
                <p>{data}</p>
                <p>{email}</p>
                <img src={trash} alt="Excluir" className={Style["info-icon"]} onClick={handleBloqueio} />
            </Stack>
        </div>
    );
}

export default Documento2;
