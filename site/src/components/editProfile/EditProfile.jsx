import Style from '../../pages/admin/Admin.module.css';
import InputTexfield from '../Input/Input';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import { Stack } from '@mui/material';
import React, { useState } from "react";
import SidebarDash from '../sidebar/SidebarDash';
import { useNavigate } from "react-router-dom";
import apiAdm from '../../api/Usuario/apiAdm';

function EditProfile() {

    // const handleInputChange = (event, setStateFunction) => {
    //     setStateFunction(event.target.value);
    // }

    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [telefone, setTelefone] = useState("");
    const navigate = useNavigate();



    useEffect(() => {

        const fetchAdminData = async () => {
            const idUsuario = localStorage.getItem('idUsuario');
            try {
                const response = await apiAdm.get(`/${idUsuario}`);
                const data = response.data;
                setNome(data.nome);
                setEmail(data.email);
                setTelefone(data.telefone);
            } catch (error) {
                console.error("Erro ao buscar dados do administrador:", error);
            }
        };

        fetchAdminData();
    }, []);

    const handleSave = async (event) => {
        event.preventDefault();
        const idUsuario = localStorage.getItem('idUsuario');
        const dadosAtualizarAdm = {
            nome: nome,
            email: email,
            senha:      confirmarSenha,
            tipoDeUsuario: "ADMINISTRADOR",
            telefone: telefone,
        };
        console.log(dadosAtualizarAdm);
        try {
            await apiAdm.put(`/${idUsuario}`, dadosAtualizarAdm);
            localStorage.clear();
            window.location.reload(); // Alterado para recarregar a página corretamente
            console.log("Update feito com sucesso!");
        } catch (error) {
            console.error("Ocorreu um erro ao atualizar, por favor, tente novamente.", error);
        }
    };


    return (
        <>
            <div className={Style["container"]}>
                <SidebarDash />
                <Stack className={Style["card"]} spacing={5}>
                    <Stack spacing={3} className={Style["fotousu"]}>
                        <span></span>
                        <h2>{nome}</h2>
                    </Stack>
                    <Stack spacing={5}>
                        <Stack spacing={5} direction={"row"} className={Style["inputs"]}>
                            <Stack spacing={3}>
                                <InputTexfield label="Nome completo" value={nome} onChange={(e) => handleInputChange(e, setNome)} />
                                <InputTexfield label="Senha" type="password" value={senha} onChange={(e) => handleInputChange(e, setSenha)} />
                                <InputTexfield label="Telefone(opicional)" value={telefone} onChange={(e) => handleInputChange(e, setTelefone)} />
                            </Stack>
                            <Stack spacing={3}>
                                <InputTexfield label="Email" type='email' value={email} onChange={(e) => handleInputChange(e, setEmail)} />
                                <InputTexfield label="Confirmar senha" type='password' value={confirmarSenha} onChange={(e) => handleInputChange(e, setConfirmarSenha)} />
                            </Stack>
                        </Stack>
                        <Stack className={Style["btns"]} spacing={3}>
                            <ButtonAzul onClick={handleSave}>Concluir</ButtonAzul>
                            <ButtonBranco onClick={() => navigate(-1)}>Cancelar</ButtonBranco>
                        </Stack>
                    </Stack>
                </Stack>
            </div>
        </>
    );
}

export default EditProfile;
