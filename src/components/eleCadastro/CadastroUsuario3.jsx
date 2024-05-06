import Stack from '@mui/material/Stack';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import Title from '../tituloCadastro/Title';
import CustomizedHook from '../Input/InpIdioma';
import api from "../../api";
import DatePicker from '../Input/DatePicker';

function CadastroUsuario3() {
    const [idioma, setIdioma] = React.useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        console.log(event.target.value)
        setIdioma(event.target.value);
    };

    const handleSave = () => {
        const dadosCadastro = localStorage.getItem("cadastro");
        if (dadosCadastro) {
            const json = JSON.parse(dadosCadastro);
            localStorage.setItem("cadastro", JSON.stringify(json));
                
            if(json.tipoDeUsuario === "CUIDADOR") {     
                navigate("/cadastro/cuidador");

                console.log("Requisição para cadastrar cuidador");
            } else {
                api.post('/criar-responsavel', json)
                    .then(response =>{
                        localStorage.clear();
                        navigate("/login");
                        console.log("Cadastro feito com sucesso!");
                    })
                    .catch(() => {
                        console.log(JSON.stringify(json));
                        console.log("Ocorreu um erro ao cadastrar, por favor, tente novamente.");
                    });
            }
        }
    };

    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={6}>
                    <Title />
                    <Stack spacing={3} className={Style["itens"]}>
                        <CustomizedHook value={idioma} onChange={handleChange}/> 
                        <DatePicker/>
                        <ButtonAzul onClick={(event) => handleSave(event)}>Proximo</ButtonAzul>
                        <ButtonBranco onClick={() => navigate("/cadastro2")}>Voltar</ButtonBranco>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}

export default CadastroUsuario3;
