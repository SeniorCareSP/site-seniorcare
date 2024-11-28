import Stack from '@mui/material/Stack';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Title from '../tituloCadastro/Title';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import Calendario from '../calendario/Calendario';
import apiCuidador from "../../api/Usuario/apiCuidador";
import apiResponsavel from '../../api/Usuario/apiResponsavel';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function CadastroCuidador3() {
    const navigate = useNavigate();
    const [calendario, setCalendario] = React.useState(Array(7).fill().map(() => Array(3).fill(false)));
    const [selectedFile, setSelectedFile] = useState(null);
    const [idUsuario, setIdUsuario] = useState('');
    const dadosCadastro = localStorage.getItem("cadastro");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('error');

    const handleSave = async () => {
        try {
            if (dadosCadastro) {
                const json = JSON.parse(dadosCadastro);
                json.agendas = { "disponibilidade": calendario };
                localStorage.setItem("cadastro", JSON.stringify(json));
                
                if (selectedFile) {
                    localStorage.setItem('imagem', selectedFile);
                    console.log('Json: ',json)
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
                            // Atualizar URL do upload para enviar para o backend correto
                            await axios.post(
                                `http://3.86.115.91/api/files/upload?idUsuario=${idUsuario}`,
                                formData,
                                { headers: { 'Content-Type': 'multipart/form-data' } }
                            );

                            setSnackbarMessage("Cadastro feito com sucesso!");
                            setSnackbarSeverity("success");
                            setSnackbarOpen(true);

                            localStorage.removeItem('imagem');
                            localStorage.clear();
                            navigate("/login");
                        } catch (error) {
                            setSnackbarMessage("Erro ao enviar a imagem.");
                            setSnackbarSeverity("error");
                            setSnackbarOpen(true);
                            console.error('Erro ao enviar a imagem:', error);
                            return;
                        }
                    } catch (error) {
                        const errorMessage = error.response?.data || "Erro ao salvar os dados do usuário.";
                        setSnackbarMessage(typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage));
                        setSnackbarSeverity("error");
                        setSnackbarOpen(true);
                        console.error('Erro ao salvar os dados do usuário:', error.response);
                    }                    
                } else {
                    setSnackbarMessage("Por favor, selecione uma imagem.");
                    setSnackbarSeverity("warning");
                    setSnackbarOpen(true);
                    console.log("Erro: Nenhuma imagem foi selecionada.");
                }
            }
        } catch (error) {
            setSnackbarMessage("Erro ao processar os dados de cadastro.");
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
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

    const handleRemoveImage = () => {
        setSelectedFile(null); // Remove a imagem selecionada
    };

    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={3}>
                    <Title />
                    <Stack spacing={2} className={Style["itens"]}>
                        <h3>Envie uma foto:</h3>

                        {!selectedFile && ( // O botão só aparece se não houver uma imagem selecionada
                            <Stack direction="row" justifyContent={"center"}>
                                <ButtonAzul component="label" role={undefined} variant="contained" tabIndex={-1}>
                                    Imagem
                                    <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                                </ButtonAzul>
                            </Stack>
                        )}

                        {selectedFile && (
                            <div style={{ textAlign: 'center' }}>
                                <h4>Nome do arquivo: {selectedFile.name} - {(selectedFile.size / 1024).toFixed(2)} KB</h4>

                                <ButtonBranco onClick={handleRemoveImage} style={{ marginTop: '10px' }}>
                                    Remover Imagem
                                </ButtonBranco>
                            </div>
                        )}

                        <Calendario onChange={setCalendario} />
                        <Stack direction="row" spacing={4}>
                            <ButtonAzul onClick={handleSave}>Concluir</ButtonAzul>
                            <ButtonBranco onClick={handleBack}>Voltar</ButtonBranco>
                        </Stack>
                    </Stack>
                </Stack>
            </div>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setSnackbarOpen(false)}
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default CadastroCuidador3;
