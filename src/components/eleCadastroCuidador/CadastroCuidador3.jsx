import Stack from '@mui/material/Stack';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Title from '../tituloCadastro/Title';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import Calendario from '../calendario/Calendario';
import api from "../../api/Usuario/apiCuidador";
import axios from 'axios'; // Importar o axios

function CadastroCuidador3() {
    const navigate = useNavigate();
    const [calendario, setCalendario] = React.useState(Array(7).fill().map(() => Array(3).fill(false)));
    const [selectedFile, setSelectedFile] = useState(null);
    const [filename, setFilename] = useState('');

    const handleSave = async () => {
        try {
            const dadosCadastro = localStorage.getItem("cadastro");

            if (dadosCadastro) {
                const json = JSON.parse(dadosCadastro);

                json.agendas = { "disponibilidade": calendario };

                localStorage.setItem("cadastro", JSON.stringify(json));

                if (selectedFile) {
                    // Salvar a imagem usando localStorage
                    localStorage.setItem('imagem', selectedFile);

                    const formData = new FormData();
                    formData.append('file', selectedFile);

                    const response = await api.post('', json);
                    const idUsuario = response.data.idUsuario; // Suponha que a resposta contenha o ID do usuário
                    console.log(response);
                    setFilename(idUsuario);

                    const responseCadastroImagem = await axios.post(`http://localhost:8080/files/upload?filename=${idUsuario}.jpg`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });

                    localStorage.clear();
                    console.log("Cadastro feito com sucesso!");
                    // navigate("/login");
                } else {
                    // Caso não tenha imagem selecionada
                    const response = await api.post('', json);
                    const idUsuario = response.data.idUsuario; // Suponha que a resposta contenha o ID do usuário
                    console.log(response);
                    setFilename(idUsuario);

                    localStorage.clear();
                    console.log("Cadastro feito com sucesso!");
                    // navigate("/login");
                }
            }
        } catch (error) {
            console.error('Erro ao salvar imagem:', error);
            // Lidar com o erro de forma adequada
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
                        <ButtonBranco onClick={() => navigate("/cadastro/cuidador2")}>Voltar</ButtonBranco>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}

export default CadastroCuidador3;
