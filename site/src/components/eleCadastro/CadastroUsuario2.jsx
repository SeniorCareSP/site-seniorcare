import Stack from '@mui/material/Stack';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import InputTexfield from '../Input/Input';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import Title from '../tituloCadastro/Title';
import React, { useEffect, useState } from "react";

function CadastroUsuario2() {
    const navigate = useNavigate();

    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");



    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);   
    }

    useEffect(() => {
        const dadosCadastro = localStorage.getItem("cadastro");
        if (dadosCadastro) {
            const json = JSON.parse(dadosCadastro);

            setLogradouro(json.endereco.logradouro);
            setNumero(json.endereco.numero);
            setComplemento(json.endereco.complemento);
            setCidade(json.endereco.cidade);
            setBairro(json.endereco.bairro);
        }
    }, []);


    const handleSave = async (event) => {
        event.preventDefault();
    
        const dadosCadastro = localStorage.getItem("cadastro");
        if (dadosCadastro) {
            const json = JSON.parse(dadosCadastro);
            json.endereco.logradouro = logradouro;
            json.endereco.numero = numero;
            json.endereco.complemento = complemento;
            json.endereco.cidade = cidade;
            json.endereco.bairro = bairro;
    
            localStorage.setItem("cadastro", JSON.stringify(json));
        }
    
        navigate("/cadastro3");
    }
    




    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={6}>
                    <Title />
                    <Stack spacing={3} className={Style["itens"]}>
                        <InputTexfield label="Logradouro" value={logradouro} onChange={(e) => handleInputChange(e, setLogradouro)} />
                        <InputTexfield label="Numero" value={numero} onChange={(e) => handleInputChange(e, setNumero)} />
                        <InputTexfield label="Complemento" value={complemento} onChange={(e) => handleInputChange(e, setComplemento)} />
                        <InputTexfield label="Cidade" value={cidade} onChange={(e) => handleInputChange(e, setCidade)} />
                        <InputTexfield label="Bairro" value={bairro} onChange={(e) => handleInputChange(e, setBairro)} />
                        <ButtonAzul onClick={(event) => handleSave(event)} variant="contained">Proximo</ButtonAzul>
                        <ButtonBranco onClick={() => navigate("/cadastro")} variant="contained">Voltar</ButtonBranco>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}

export default CadastroUsuario2;
