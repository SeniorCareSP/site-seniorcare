import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import * as React from 'react';


import Title from '../tituloCadastro/Title'

function CadastroCuidador1() {

    const navigate = useNavigate();
    return (
        <div className={Style["card-cadastro"]}>
            <Title />
            <Stack spacing={3} className={Style["itens"]}>

                <Button className={Style["button"]} onClick={() => navigate("/cadastro4")} variant="contained">Proximo</Button>
                <Button className={Style["button"]} onClick={() => navigate("/cadastro2")} variant="contained">Voltar</Button>
            </Stack>
        </div>
    );
}

export default CadastroCuidador1;