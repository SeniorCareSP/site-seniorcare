import React, { useEffect, useState } from 'react';
import Calendario from "../calendario/Calendario";
import Navbar from "../cuidador/navbar/navbarCuidador";
import Stack from '@mui/material/Stack'
import InputTexfield from "../Input/Input";
import Style from '../../pages/confUser/Atualizar.module.css'
import ButtonAzul from "../botao/BotaoAzul";
import ElderList from "./idosoComponent";
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Button from '@mui/joy/Button';
<<<<<<< HEAD:site/src/components/eleConfig/EleAtualizarPerfil.jsx
import ImgLogin from '../../components/eleLogin/ImgLogin';
=======
import Voltar from "../../utils/assets/setaVoltar.png"
import { useNavigate } from "react-router-dom";
import apiAdm from '../../api/Usuario/apiAdm';

>>>>>>> develop:src/components/eleConfig/EleAtualizarPerfil.jsx

function EleAtualizarPerfil() {
    // const [value, setValue] = React.useState(['default']);
    const [value, setValue] = React.useState([]);

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }

    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [sobre, setSobre] = useState("");
    const [endereco, setEndereco] = useState("");
    const [CEP, setCEP] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [precoHora, setPrecoHora] = useState("");
    // const navigate = useNavigate();

    useEffect(() => {

        const fetchAdminData = async () => {
            const idUsuario = localStorage.getItem('idUsuario');
            try {
                const response = await apiAdm.get(`/${idUsuario}`);
                const data = response.data;
                setNome(data.nome);
                setSobre(data.sobre);
                setEndereco(data.endereco);
                setCEP(data.CEP);
                setRua(data.rua);
                setBairro(data.bairro);
                setNumero(data.numero);
                setCidade(data.cidade);
            } catch (error) {
                console.error("Erro ao buscar dados do cuidador:", error);
            }
        };

        fetchAdminData();
    }, []);

    const handleSave = async (event) => {
        event.preventDefault();
        const idUsuario = localStorage.getItem('idUsuario');
        const dadosAtualizarCuidador = {
            nome: nome,
            email: email,
            sobre: sobre,
            endereco: endereco,
            CEP: CEP,
            rua: rua,
            bairro: bairro,
            numero: numero,
            cidade: cidade,
            tipoDeUsuario: "ADMINISTRADOR", // ???????????
        };
        console.log(dadosAtualizarCuidador);
        try {
            await apiAdm.put(`/${idUsuario}`, dadosAtualizarCuidador);
            localStorage.clear();
            window.location.reload(); // Alterado para recarregar a página corretamente
            console.log("Update feito com sucesso!");
        } catch (error) {
            console.error("Ocorreu um erro ao atualizar, por favor, tente novamente.", error);
        }
    };


    return (
        <>
            <Navbar/>
            
            <div className={Style["corpo"]}>
                    <Stack spacing={2} display="flex" direction="row"  justifyContent="space-around" className={Style["ajuste"]}>
                    <div className={Style["img"]}>
                    <img src={Voltar} alt="" width="45vh" height="35vh"/>
                    <span>Voltar</span>
                    </div>
                    </Stack>
                    <div className={Style["texto"]}>
                    <h2>Edição de perfil</h2>
                    </div>
                

            
                <Stack direction="row" className={Style["centraliza"]} >
                    <Stack className={Style["info-usuario"]} spacing={4} marginInline={5}>
                        <div className={Style["foto-usu"]}></div>
                        <InputTexfield label="Nome" value={nome} onChange={(e) => handleInputChange(e, setNome)}/>
                        <InputTexfield label="Sobre" value={sobre} onChange={(e) => handleInputChange(e, setSobre)} size="xl"/>
                    </Stack> 
                    {/* info-suario */}
                    <Stack className={Style["endereco"]} >
                        <Stack direction="row" marginLeft={6} marginTop={2}>
                            <InputTexfield label="Endereço" value={endereco} sx={{width:"42vw"}}/>
                            </Stack>
                            <Stack direction="row" spacing={2}marginLeft={6}  >
                            <InputTexfield label="CEP" value={CEP} onChange={(e) => handleInputChange(e, setCEP)} sx={{width:"14vw"}} />
                            <InputTexfield label="Rua" value={rua} onChange={(e) => handleInputChange(e, setRua)} sx={{width:"27vw"}} />
                        </Stack>
                        <Stack direction="row" spacing={2} marginLeft={6} >
                            <InputTexfield label="Bairro" value={bairro} onChange={(e) => handleInputChange(e, setBairro)} sx={{width:"29vw"}} />
                            <InputTexfield label="Número" value={numero} onChange={(e) => handleInputChange(e, setNumero)} sx={{width:"12vw"}} />
                        </Stack>
                        <Stack direction="row" spacing={2} marginLeft={6}  marginBottom={2}>
                            <InputTexfield label="Cidade" value={cidade} onChange={(e) => handleInputChange(e, setCidade)}sx={{width:"42vw"}} />
                        </Stack>
                    </Stack>
                </Stack>
            
                <div className={Style["idoso"]}>
                    <Stack direction="row" spacing="3" className={Style["adiciona"]}>
                       <ElderList/>
                       {/* <Stack spacing={6}>
                
                    <div className={Style["card"]}>
                    <Stack spacing={3} className={Style["opcoes"]}>
                        <Stack direction="row" spacing={2}>
                            <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => { setValue(newValue) }}>
                                <Button value="dirigir">Trabalho de casa</Button>
                                <Button value="fumo">Culinária</Button>
                                <Button value="cuidados">Curativos</Button>
                            </ToggleButtonGroup>
                        </Stack>
                        <Stack direction="row" spacing={2} justifyContent={"center"}>
                            <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => { setValue(newValue) }}>
                                <Button value="trabCasa">Banho</Button>
                                 </ToggleButtonGroup>
                        </Stack>
                    </Stack>
                    </div>
    </Stack>*/}
                    </Stack> 
                   
                </div>

                <div className={Style["calendario"]}>
                <Stack spacing={3} className={Style["itens"]}>
                    <Calendario />
                    <ButtonAzul>Salvar Alterações</ButtonAzul>
                </Stack>
                </div>
            </div>

        </>
    )
}

export default EleAtualizarPerfil;