import Stack from '@mui/material/Stack'
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import InputTexfield from '../Input/Input';
import ButtonAzul from '../botao/BotaoAzul';
import Title from '../tituloCadastro/Title'
import React, { useEffect, useState } from "react";
import Button from '@mui/joy/Button';
import axios from "axios";
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import FormHelperText from '@mui/joy/FormHelperText';


function CadastroUsuario1() {
    const [tipoUsuario, setValue] = React.useState();
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [cep, setCep] = useState("");

    // erros de inputs
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorNome, setErrorNome] = useState(false);
    const [errorSenha, setErrorSenha] = useState(false);
    const [errorConfSenha, setErrorConfSenha] = useState(false);
    const [errorCep, setErrorCep] = useState(false);

    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        console.log("Novo valor selecionado:", newValue);
        setValue(newValue);
    };


    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }

    const validate = () => {
        let isValid = true;

        // validação email
        if (!email) {

            setErrorEmail(true);
            
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {

            setErrorEmail(true);
            
            isValid = false;
        } else {
            setErrorEmail(false);
        }

        // validação de nome
        if (!nome) {
            setErrorNome(true);
            isValid = false;
        } else {
            setErrorNome(false);
        }

        // validação de senha
        if (!senha) {
            setErrorSenha(true);
            isValid = false;
        } else if (senha.length < 6) {
            setErrorSenha(true);
            isValid = false;
        } else {
            setErrorSenha(false);
        }

        // validação de confirmar senha
        if (!confirmarSenha) {
            setErrorConfSenha(true);
            isValid = false;
        } else if (confirmarSenha !== senha) {
            setErrorConfSenha(true);
            isValid = false;
        } else {
            setErrorConfSenha(false);
        }

        // validação de cep
        if (!cep) {
            setErrorCep(true);
            isValid = false;
        } else if (!/^\d{5}-?\d{3}$/.test(cep)) {
            setErrorCep(true);
            isValid = false;
        } else {
            setErrorCep(false);
        }


        return isValid;

    };

    const handleSave = async (event) => {
        event.preventDefault(); // Aqui está ocorrendo o erro
        validate();
        if (validate == true) {
            try {
                const response = await axios.get("https://viacep.com.br/ws/" + cep + "/json/");
                const endereco = response.data;

                const dadosCadastros = {
                    nome: nome,
                    email: email,
                    senha: senha,
                    tipoDeUsuario: tipoUsuario,
                    endereco: {
                        cep: cep,
                        logradouro: endereco.logradouro,
                        complemento: "",
                        numero: "",
                        cidade: endereco.localidade,
                        bairro: endereco.bairro
                    }
                };

                localStorage.setItem("cadastro", JSON.stringify(dadosCadastros));
                navigate("/cadastro2");
            } catch (error) {
                console.error("Erro ao buscar informações do CEP:", error);
            }
        }
    }





    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={6}>
                    <Title />
                    <Stack spacing={3} className={Style["itens"]}>
                        <InputTexfield error={errorEmail} label="Email" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
                        <InputTexfield error={errorNome} label="Nome" value={nome} onChange={(e) => handleInputChange(e, setNome)} />
                        <InputTexfield error={errorSenha} label="senha" value={senha} type={"password"} onChange={(e) => handleInputChange(e, setSenha)} />
                        <InputTexfield error={errorConfSenha} label="confirmar senha" type={"password"} value={confirmarSenha} onChange={(e) => handleInputChange(e, setConfirmarSenha)} />
                        <InputTexfield error={errorCep} label="CEP" value={cep} onChange={(e) => handleInputChange(e, setCep)} />
                        <Stack direction="row" spacing={2}>
                            <ToggleButtonGroup value={tipoUsuario} spacing={2} color="primary" onChange={handleChange}>
                                <Button value="CUIDADOR"  >Cuidador</Button>
                                <Button value="RESPONSAVEL">Responsavel</Button>
                            </ToggleButtonGroup>
                        </Stack>
                        <ButtonAzul onClick={(event) => handleSave(event)}>Proximo</ButtonAzul>
                        <a onClick={() => navigate("/login")} href=''>Já tenho uma conta</a>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}
export default CadastroUsuario1;
