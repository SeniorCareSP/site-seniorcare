import Stack from '@mui/material/Stack'
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Title from '../tituloCadastro/Title'
import BtnBrancoS from '../botao/BtnBrancoS';
import VisuallyHiddenInput from '../botao/Upload';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';

function CadastroCuidador2() {

    const navigate = useNavigate();
    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={6}>
                    <Title />
                    <Stack spacing={3} className={Style["itens"]}>
                        <h3>Sobre você:</h3>
                        <Stack direction="row" spacing={2}>
                            <BtnBrancoS>Sei dirigir</BtnBrancoS>
                            <BtnBrancoS>Fumo</BtnBrancoS>
                            <BtnBrancoS>Tenho certificado de Cuidados Geriatricos</BtnBrancoS>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <BtnBrancoS>Tenho diploma de Enfermagem</BtnBrancoS>
                            <BtnBrancoS>Tenho certificado Primeiros Socorros</BtnBrancoS>
                            <BtnBrancoS>Tenho certificado Boa Conduta</BtnBrancoS>
                        </Stack>
                        <h3>Envie seus certificados</h3>
                        <Stack direction="row" justifyContent={"center"}>
                            <ButtonAzul component="label" role={undefined} variant="contained" tabIndex={-1}>
                                Documento
                                <VisuallyHiddenInput type="file" />
                            </ButtonAzul>
                        </Stack>
                        <h3>Envie uma foto:</h3>
                        <Stack direction="row" justifyContent={"center"}>
                            <ButtonAzul component="label" role={undefined} variant="contained" tabIndex={-1}>
                                Imagem
                                <VisuallyHiddenInput type="file" />
                            </ButtonAzul>
                        </Stack>
                        <ButtonAzul onClick={() => navigate("/cadastro/cuidador3")}> Proximo</ButtonAzul>
                        <ButtonBranco onClick={() => navigate("/cadastro/cuidador")} >Voltar</ButtonBranco>
                    </Stack>

                </Stack>
            </div>
        </div>

    );
}

export default CadastroCuidador2;