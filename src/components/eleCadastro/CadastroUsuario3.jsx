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
import Calendario from '../calendario/Calendario';

function CadastroUsuario3() {

    const [dtNasc, setDtNasc] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [idioma, setIdioma] = useState([]);
    const navigate = useNavigate();

    // const handleFileChange = (event) => {
    //     setSelectedFile(event.target.files[0]);
    // };

    // const handleFilenameChange = (event) => {
    //     setFilename(event.target.value);
    // };

    const handleDateChange = (event) => {
        setDtNasc(event.target.value);
    };

    const handleIdiomaChange = (event, newValue) => {
        setIdioma(newValue);
    };
    const dadosCadastro = localStorage.getItem("cadastro");

    const json = JSON.parse(dadosCadastro);

    const handleSave = async () => {
        try {
            if (dadosCadastro) {
                json.dtNascimento = dtNasc;
                json.sexoBiologico = selectedStatus;
                json.idiomas = idioma;
                localStorage.setItem("cadastro", JSON.stringify(json));

                if (json.tipoDeUsuario === "RESPONSAVEL") {
                    navigate("/cadastro/cuidador3");    
                } else if (json.tipoDeUsuario === "CUIDADOR") {
                    console.log("Requisição para cadastrar cuidador");
                    navigate("/cadastro/cuidador");
                }
            } else {
                console.log("Erro: dadosCadastro não encontrados.");
            }
        } catch (error) {
            console.error("Erro ao salvar os dados:", error);
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
                        <ButtonAzul onClick={handleSave}>Próximo</ButtonAzul>
                        <ButtonBranco onClick={() => navigate("/cadastro2")}>Voltar</ButtonBranco>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}

export default CadastroUsuario3;
