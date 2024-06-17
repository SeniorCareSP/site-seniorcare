import Stack from '@mui/material/Stack'
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import InputTexfield from '../Input/Input';
import Title from '../tituloCadastro/Title'
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Button from '@mui/joy/Button';
<<<<<<< HEAD:site/src/components/eleCadastroCuidador/CadastroCuidador1.jsx
=======

>>>>>>> develop:src/components/eleCadastroCuidador/CadastroCuidador1.jsx
function CadastroCuidador1() {
    const [value, setValue] = React.useState([]);
    const [experiencia, setExperiencia] = React.useState("");
    const [precoHora, setPrecoHora] = React.useState("");

    const navigate = useNavigate();



    const handleInputChange = (event, setStateFunction) => {
        console.log(event.target.value);
        setStateFunction(event.target.value);
        console.log(value);
    };


    const handleSave = () => {
        const dadosCadastro = localStorage.getItem("cadastro");
        if (dadosCadastro) {
            const json = JSON.parse(dadosCadastro);
            json.experiencia = experiencia;
            json.precoHora = precoHora;

            var ajudas = [];
    
            for (let index = 0; index < value.length; index++) {
                ajudas[index] = {"nome":value[index]};       
            }
            json.ajudas = ajudas;
            localStorage.setItem("cadastro", JSON.stringify(json));

            console.log(json);
            navigate("/cadastro/cuidador2");

 
        }
    };



    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={6}>
                    <Title />
                    <Stack spacing={3} className={Style["itens"]}>
                        <InputTexfield value={experiencia} label="Experiencia" onChange={(e) => handleInputChange(e, setExperiencia)} />
                        <InputTexfield value={precoHora} label="Preço por hora" onChange={(e) => handleInputChange(e, setPrecoHora)} />
                        <div className={Style["div_ajuda"]}>
                            <h3>Como posso ajudar:</h3>
                            <Stack direction="row" spacing={3} className={Style["dias-semana"]}>
                                <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => { setValue(newValue) }}>
                                    <Button value="Trabalho de Casa">Trabalho de casa</Button>
                                    <Button value="Culinaria">Culinaria</Button>
                                    <Button value="Curativos">Curativos</Button>
                                </ToggleButtonGroup>
                            </Stack>
                            <Stack direction="row" spacing={1} className={Style["ajuda"]} justifyContent={"center"}>
                                <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => { setValue(newValue) }}>
                                    <Button value="Banho">Banho</Button>
                                </ToggleButtonGroup>
                            </Stack>
                        </div>
                        <ButtonAzul onClick={() => handleSave()}> Proximo</ButtonAzul>
                        <ButtonBranco onClick={() => navigate("/cadastro3")} >Voltar</ButtonBranco>
                    </Stack>
                </Stack>
            </div>
        </div>

    );
}

export default CadastroCuidador1;