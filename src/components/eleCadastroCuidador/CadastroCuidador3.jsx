import Stack from '@mui/material/Stack'
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Title from '../tituloCadastro/Title'
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import Calendario from '../calendario/Calendario';
import IconButton from '@mui/joy/IconButton';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';

function CadastroCuidador3() {
    const navigate = useNavigate();
    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={3}>
                    <Title />
                    <Stack spacing={2} className={Style["itens"]}>
                        <Calendario />
                        <ButtonAzul onClick={() => navigate("/cadastro/concluido")}>Concluir</ButtonAzul>
                        <ButtonBranco onClick={() => navigate("/cadastro/cuidador2")} >Voltar</ButtonBranco>
                    </Stack>

                </Stack>
            </div>
        </div>

    );
}

export default CadastroCuidador3;