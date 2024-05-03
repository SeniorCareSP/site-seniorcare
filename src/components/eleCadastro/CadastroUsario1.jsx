import Stack from '@mui/material/Stack'
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import InputTexfield from '../Input/Input';
import ButtonAzul from '../botao/BotaoAzul';
import Title from '../tituloCadastro/Title'
import React, { useEffect, useState } from "react";
import Button from '@mui/joy/Button';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';

function CadastroUsuario1() {
    const [tipoUsuario, setValue] = React.useState();
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [cep, setCep] = useState(""); 

    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
      }


      const handleSave = (event) => {

        if (senha == "" || email == "" || confirmarSenha == "" || cep == "") {
            console.log("Existem Campos Nulos!");
            return;
          }

        if(senha != confirmarSenha){
            console.log("Senhas não Coincidem ")
        }
        
        var dadosCadastros = {
            nome: nome,
            email: email,
            senha : senha,
            tipoDeUsuario: tipoUsuario,
            idiomas: [],
            enderecos: []  
        };  
    

            localStorage.setItem("cadastro", dadosCadastros)
            navigate("/cadastro2")
        
      }

    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={6}>
                    <Title />
                    <Stack spacing={3} className={Style["itens"]}>
                        <InputTexfield label="Email" value={email} onChange={(e) => handleInputChange(e, setEmail)}/>
                        <InputTexfield label="Nome" value={nome} onChange={(e) => handleInputChange(e, setNome)}/>
                        <InputTexfield label="senha" value={senha} onChange={(e) => handleInputChange(e, setSenha)}/>
                        <InputTexfield label="confirmar senha" value={confirmarSenha} onChange={(e) => handleInputChange(e, setConfirmarSenha)}/>
                        <InputTexfield label="CEP" value={cep} onChange={(e) => handleInputChange(e, setCep)}/>
                        <Stack direction="row" spacing={2}>
                            <ToggleButtonGroup value={tipoUsuario} spacing={2} color="primary" onChange={handleChange}>
                                <Button value="CUIDADOR"  >Cuidador</Button>
                                <Button value="RESPONSAVEL">Responsavel</Button>
                            </ToggleButtonGroup>
                        </Stack>
                        <ButtonAzul onClick={() => handleSave()}>Proximo</ButtonAzul>
                        <a onClick={() => navigate("/login")} href=''>Já tenho uma conta</a>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}
export default CadastroUsuario1;
