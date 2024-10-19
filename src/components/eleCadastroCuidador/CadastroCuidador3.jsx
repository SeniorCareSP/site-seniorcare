import Stack from '@mui/material/Stack';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Title from '../tituloCadastro/Title';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import Calendario from '../calendario/Calendario';
import apiUsuario from "../../api/Usuario/apiUsuario";
import apiCuidador from "../../api/Usuario/apiCuidador";
import apiResponsavel from '../../api/Usuario/apiResponsavel';
import axios from 'axios'; // Importar o axios

function CadastroCuidador3() {
    const navigate = useNavigate();
    const [calendario, setCalendario] = React.useState(Array(7).fill().map(() => Array(3).fill(false)));
    const [selectedFile, setSelectedFile] = useState(null);
    const [filename, setFilename] = useState('');
    const [response, setResponse] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    const dadosCadastro = localStorage.getItem("cadastro");

    const handleSave = async () => {

        try {

            if (dadosCadastro) {
                const json = JSON.parse(dadosCadastro);
                json.agendas = { "disponibilidade": calendario };
                localStorage.setItem("cadastro", JSON.stringify(json));

                if (selectedFile) {
                    localStorage.setItem('imagem', selectedFile);

                    try {
                        let response;
                        if (json.tipoDeUsuario === "RESPONSAVEL") {
                            response = await apiResponsavel.post('', json);
                        } else {
                            response = await apiCuidador.post('', json);
                        }
                        
                        const idUsuario = response.data.idUsuario;
                        setIdUsuario(idUsuario);

                        const formData = new FormData();
                        
                        formData.append('file', selectedFile, `${idUsuario}.jpg`);

                        try {
                            await axios.post(
                                `http://localhost:8080/files/upload?filename=${idUsuario}.jpg`, 
                                formData, 
                                { headers: { 'Content-Type': 'multipart/form-data' } }
                            );
                        } catch (error) {
                            alert("Erro ao enviar a imagem.");
                            console.error('Erro ao enviar a imagem:', error);
                            return;
                        }

                        localStorage.removeItem('imagem');
                        localStorage.clear();
                        console.log("Cadastro feito com sucesso!");
                        navigate("/login");
                    } catch (error) {
                        alert("Erro ao salvar os dados do usuário.");
                        console.error('Erro ao salvar os dados do usuário:', error);
                    }
                } else {
                    alert("Por favor, selecione uma imagem.");
                    console.log("Erro: Nenhuma imagem foi selecionada.");
                }
            }
        } catch (error) {
            alert("Erro ao processar os dados de cadastro.");
            console.error('Erro ao processar os dados de cadastro:', error);
        }
    };


    const handleBack = () => {
        if (dadosCadastro.tipoDeUsuario === "CUIDADOR") {
            navigate("/cadastro/cuidador2");
        } else {
            navigate("/cadastro3");
        }
    };


    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={3}>
                    <Title />
                    <Stack spacing={2} className={Style["itens"]}>

                        <h3>Envie uma foto:</h3>

                        <Stack direction="row" justifyContent={"center"}>
                            <ButtonAzul component="label" role={undefined} variant="contained" tabIndex={-1}>
                                Imagem
                                <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                            </ButtonAzul>
                        </Stack>

                        <Calendario onChange={setCalendario} />

                        <ButtonAzul onClick={handleSave}>Concluir</ButtonAzul>
                        <ButtonBranco onClick={handleBack}>Voltar</ButtonBranco>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}

export default CadastroCuidador3;
