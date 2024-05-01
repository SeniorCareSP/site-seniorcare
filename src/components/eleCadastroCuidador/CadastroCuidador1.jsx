import Stack from '@mui/material/Stack'
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import InputTexfield from '../Input/Input';
import Title from '../tituloCadastro/Title'
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import BtnBrancoS from '../botao/BtnBrancoS';

function CadastroCuidador1() {

    const navigate = useNavigate();
    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={6}>
                    <Title />
                    <Stack spacing={3} className={Style["itens"]}>
                        <InputTexfield label="Experiencia" />
                        <InputTexfield label="Preço por hora" />
                        <div className={Style["div_ajuda"]}>
                            <h3>Como posso ajudar:</h3>
                            <Stack direction="row" spacing={1} className={Style["ajuda"]}>
                                <BtnBrancoS>Trabalho de casa</BtnBrancoS>
                                <BtnBrancoS>culinaria</BtnBrancoS>
                                <BtnBrancoS>curativos</BtnBrancoS>
                            </Stack>
                            <Stack direction="row" spacing={1} className={Style["ajuda"]} justifyContent={"center"}>
                                <BtnBrancoS>banho</BtnBrancoS>
                            </Stack>
                        </div>
                        <ButtonAzul onClick={() => navigate("/cadastro/cuidador2")}> Proximo</ButtonAzul>
                        <ButtonBranco onClick={() => navigate("/cadastro3")} >Voltar</ButtonBranco>
                    </Stack>
                </Stack>
            </div>
        </div>

    );
}

export default CadastroCuidador1;