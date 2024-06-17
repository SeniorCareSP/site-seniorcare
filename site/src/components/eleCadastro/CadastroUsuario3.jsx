import Stack from '@mui/material/Stack';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import Title from '../tituloCadastro/Title';
import CustomizedHook from '../Input/InpIdioma';
import api from "../../api/Usuario/apiResponsavel";
import DatePicker from '../Input/DatePicker';
import { MenuItem, TextField } from '@mui/material';
import axios from 'axios'; // Importa axios

function CadastroUsuario3() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [filename, setFilename] = useState('');
    const [uploadMessage, setUploadMessage] = useState('');
    const [dtNasc, setDtNasc] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [idioma, setIdioma] = useState([]);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFilenameChange = (event) => {
        setFilename(event.target.value);
    };

    const handleDateChange = (event) => {
        setDtNasc(event.target.value);
    };

    const handleIdiomaChange = (event, newValue) => {
        setIdioma(newValue);
    };

    const handleSave = async () => {
        try {
            // Salvar a imagem usando localStorage
            localStorage.setItem('imagem', selectedFile);

            const dadosCadastro = localStorage.getItem("cadastro");
            if (dadosCadastro) {
                const json = JSON.parse(dadosCadastro);

                json.dtNascimento = dtNasc;
                json.sexoBiologico = selectedStatus;
                json.idiomas = idioma;
                localStorage.setItem("cadastro", JSON.stringify(json));

                if (json.tipoDeUsuario === "CUIDADOR") {
                    navigate("/cadastro/cuidador");
                    console.log("Requisição para cadastrar cuidador");
                } else {
                    const response = await api.post('', json);
                    const idUsuario = response.data.idUsuario; // Suponha que a resposta contenha o ID do usuário
                    console.log(response);
                    setFilename(idUsuario);
                    // Envio da imagem para o servidor
                    const formData = new FormData();
                    formData.append('file', selectedFile);

                    const responseCadastroImagem = await axios.post(`http://localhost:8080/files/upload?filename=${idUsuario}.jpg`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });

                    localStorage.clear();
                    console.log("Cadastro feito com sucesso!");
                                        navigate("/login");

                }
            }
        } catch (error) {
            console.error('Erro ao salvar imagem:', error);
            // Lidar com o erro de forma adequada
        }
    };

    React.useEffect(() => {
        console.log("Valor de idioma:", idioma);
    }, [idioma]);

    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={6}>
                    <Title />
                    <Stack spacing={3} className={Style["itens"]}>
                        <TextField
                            select
                            label="Gênero"
                            value={selectedStatus}
                            onChange={e => setSelectedStatus(e.target.value)}
                            variant="outlined"
                            size="small"
                            style={{ width: "20.5vw" }}
                        >
                            <MenuItem value="Aberto">Homem</MenuItem>
                            <MenuItem value="Fechado">Mulher</MenuItem>
                            <MenuItem value="Prefiro não me identificar">Prefiro não me identificar</MenuItem>
                        </TextField>
                        <DatePicker value={dtNasc} onChange={handleDateChange} />
                        <CustomizedHook value={idioma} onChange={handleIdiomaChange} />

                        <h3>Envie uma foto:</h3>

                        <Stack direction="row" justifyContent={"center"}>
                            <ButtonAzul component="label" role={undefined} variant="contained" tabIndex={-1}>
                                Imagem
                                <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />

                            </ButtonAzul>
                        </Stack>

                        <ButtonAzul onClick={handleSave}>Próximo</ButtonAzul>
                        <ButtonBranco onClick={() => navigate("/cadastro2")}>Voltar</ButtonBranco>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}

export default CadastroUsuario3;
