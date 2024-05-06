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
import api from "../../api";

function CadastroCuidador3() {
    const navigate = useNavigate();


    const handleSave = () => {
        const dadosCadastro = localStorage.getItem("cadastro");
        if (dadosCadastro) {
            const json = JSON.parse(dadosCadastro);
            localStorage.setItem("cadastro", JSON.stringify(json));

            api.post('/criar-cuidador', json)
                .then(response => {
                    localStorage.clear();
                    navigate("/login");
                    console.log("Cadastro feito com sucesso!");
                })
                .catch(() => {
                    console.log(JSON.stringify(json));
                    console.log("Ocorreu um erro ao cadastrar, por favor, tente novamente.");
                });

        }
    };


    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={3}>
                    <Title />
                    <Stack spacing={2} className={Style["itens"]}>
                        <Calendario />
                        <ButtonAzul onClick={(event) => handleSave(event)}>Concluir</ButtonAzul>
                        <ButtonBranco onClick={() => navigate("/cadastro/cuidador2")} >Voltar</ButtonBranco>
                    </Stack>

                </Stack>
            </div>
        </div>

    );
}

export default CadastroCuidador3;