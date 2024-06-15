import Stack from '@mui/material/Stack';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import Title from '../tituloCadastro/Title';
import CustomizedHook from '../Input/InpIdioma';
import api from "../../api/Usuario/apiResponsavel";
import DatePicker from '../Input/DatePicker';
import { MenuItem, TextField } from '@mui/material';
import { useState } from 'react';

function CadastroUsuario3() {
    const [idioma, setIdioma] = React.useState([]);
    const [dtNasc, setDtNasc] = React.useState('');

    const [selectedStatus, setSelectedStatus] = useState('');

    const handleDateChange = (event) => {
        console.log("Event Target Value:", event.target.value);  // Adicionando log de console
        setDtNasc(event.target.value);
    };

    const handleIdiomaChange = (event, newValue) => {
        console.log("Selected Idiomas: ", newValue);
        setIdioma(newValue);
    };

    const navigate = useNavigate();

    const handleSave = () => {
        const dadosCadastro = localStorage.getItem("cadastro");
        if (dadosCadastro) {
            const json = JSON.parse(dadosCadastro);

            json.dtNascimento = dtNasc;
            json.genero = selectedStatus;
            json.idiomas = idioma;
            localStorage.setItem("cadastro", JSON.stringify(json));

            if (json.tipoDeUsuario === "CUIDADOR") {
                navigate("/cadastro/cuidador");
                console.log("Requisição para cadastrar cuidador");
            } else {
                api.post('', json)
                    .then(response => {
                        localStorage.clear();
                        navigate("/login");
                        console.log("Cadastro feito com sucesso!");
                    })
                    .catch(error => {
                        console.log(JSON.stringify(json));
                        console.log("Ocorreu um erro ao cadastrar, por favor, tente novamente.");
                    });
            }
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
                            label="Genero"
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
                        <ButtonAzul onClick={handleSave}>Proximo</ButtonAzul>
                        <ButtonBranco onClick={() => navigate("/cadastro2")}>Voltar</ButtonBranco>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}

export default CadastroUsuario3;
