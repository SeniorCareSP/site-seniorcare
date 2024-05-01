import Stack from '@mui/material/Stack'
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Title from '../tituloCadastro/Title'
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import Calendario from '../calendario/Calendario';

function CadastroCuidador3() {

    const navigate = useNavigate();
    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={6}>
                    <Title />
                    <Stack spacing={3} className={Style["itens"]}>  
                        <Calendario />
                        <ButtonAzul onClick={() => navigate("/cadastro/cuidador3")}> Finalizar</ButtonAzul>
                        <ButtonBranco onClick={() => navigate("/cadastro/cuidador2")} >Voltar</ButtonBranco>
                    </Stack>

                </Stack>
            </div>
        </div>

    );
}

export default CadastroCuidador3;