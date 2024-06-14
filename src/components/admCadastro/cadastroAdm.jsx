import Style from '../../pages/admin/Admin.module.css'
import InputTexfield from '../Input/Input';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import { Stack } from '@mui/material';
import SidebarDash from '../sidebar/SidebarDash';
import SimpleSelect from '../Input/Select';
import React, { useEffect, useState } from "react";
import { Send } from '@mui/icons-material';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function CadastroAdm() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const[cargo, setCargo] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (event, setStateFunction) => {
        console.log('valor:' + event.target.value)
        console.log('valor cargp:' + cargo)
        setStateFunction(event.target.value);   
    }

    const handleSelectChange = (event) => {
        console.log("vakue" + event.target.value);
        setCargo(event.target.value);
      };


      const handleSave = async (event) => {
        event.preventDefault(); // Aqui está ocorrendo o erro
        
        const dadosCadastrarAdm = {
            nome : nome,
            email : email,
            senha : "",
            telefone : telefone,
            tipoDeUsuario: "ADMINISTRADOR",

            cargo : cargo
        }

        localStorage.setItem("CadastroAdm", JSON.stringify(dadosCadastrarAdm))
        navigate('')

    }

    return (
        <>
            <div className={Style["container"]}>
                <SidebarDash/>
                <Stack className={Style["card"]}>

                    <Stack spacing={3} className={Style["fotousu"]}>
                        <span></span>
                        <h2>nome</h2>
                    </Stack>
                    <Stack spacing={5}>
                        <Stack spacing={5} direction={"row"} className={Style["inputs"]}>
                            <Stack spacing={3}>
                                <InputTexfield label="Nome completo" value={nome} onChange={(e) => handleInputChange(e, setNome)} />
                                <InputTexfield label="E-mail" value={email} onChange={(e) => handleInputChange(e, setEmail)}/>
                            </Stack>
                            <Stack spacing={3}>
                                <InputTexfield label="Telefone(opcional)" value={telefone} onChange={(e) => handleInputChange(e, setTelefone)}/>
                                <SimpleSelect label="Permissão" value={cargo} onChange={handleSelectChange}  />
                            </Stack>
                        </Stack>
                        <Stack className={Style["btns"]} spacing={3}>
                            <ButtonAzul>Concluir</ButtonAzul>
                            <ButtonBranco>Cancelar</ButtonBranco>
                        </Stack>
                    </Stack>

                </Stack>

            </div>
        </>
    )
}

export default CadastroAdm;