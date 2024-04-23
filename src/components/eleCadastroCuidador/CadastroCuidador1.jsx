import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import InputTexfield from '../Input/Input';
import Title from '../tituloCadastro/Title'
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';

function CadastroCuidador1() {

    const navigate = useNavigate();
    return (
        <div className={Style["card-cadastro"]}>
            <Title />
            <Stack spacing={3} className={Style["itens"]}>
                <InputTexfield label="" />  
                <ButtonAzul onClick={() => navigate("/cadastro/cuidador2")}> Proximo</ButtonAzul>
                <ButtonBranco onClick={() => navigate("/cadastro3")} >Voltar</ButtonBranco>
            </Stack>
        </div>
    );
}

export default CadastroCuidador1;