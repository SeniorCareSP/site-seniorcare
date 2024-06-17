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
    const [idioma, setIdioma] = React.useState([]);
    const [dtNasc, setDtNasc] = React.useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [imagem, setImagem] = useState(null);

    const handleDateChange = (event) => {
        setDtNasc(event.target.value);
    };

    const handleIdiomaChange = (event, newValue) => {
        setIdioma(newValue);
    };

    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagem(reader.result); // Armazena a imagem como uma string base64
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = async () => {
        try {
            // Salvar a imagem usando localStorage
            localStorage.setItem('imagem', imagem);

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

                    // Envio da imagem para o servidor
                    const formData = new FormData();
                    formData.append('file', imagem);
                    formData.append('filename', `${idUsuario}.jpg`);

                    const responseCadastroImagem = await axios.post(`http://localhost:8080/files/upload`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    
                    localStorage.clear();
                    navigate("/login");
                    console.log("Cadastro feito com sucesso!");
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
