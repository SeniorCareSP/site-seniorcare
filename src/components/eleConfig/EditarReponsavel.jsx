import React, { useEffect, useState } from 'react';
import CalendarioEditarPerfil from "../calendario/CalendarioEditarPerfil";
import Navbar from "../cuidador/navbar/navbarCuidador";
import Stack from '@mui/material/Stack';
import InputTextField from "../Input/Input";
import Style from '../../pages/confUser/Atualizar.module.css';
import ButtonAzul from "../botao/BotaoAzul";
import ElderList from "./idosoComponent";
import apiResponsavel from '../../api/Usuario/apiResponsavel';
import axios from 'axios';
import Calendario from '../calendario/Calendario';
import Voltar from "../../utils/assets/setaVoltar.png";

function EleAtualizarPerfil() {
    const [nome, setNome] = useState("");
    const [apresentacao, setApresentacao] = useState("");
    const [telefone, setTelefone] = useState("");
    const [enderecoCompleto, setEnderecoCompleto] = useState("");
    const [CEP, setCEP] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [calendario, setCalendario] = useState(Array(7).fill().map(() => Array(3).fill(false)));
    const [agendaDisponibilidade, setAgendaDisponibilidade] = useState([]);
    const [idosos, setIdosos] = useState([]);
    const [imagemSrc, setImagemSrc] = useState(null);
    const idUsuario = localStorage.getItem('idUsuario');

    const [originalData, setOriginalData] = useState({});
    const [isDirty, setIsDirty] = useState(false);

    useEffect(() => {
        async function fetchImage() {
            try {
                const response = await axios.get(`http://localhost:8080/files/view/${idUsuario}.jpg`, {
                    responseType: 'blob'
                });
                const imageObjectURL = URL.createObjectURL(response.data);
                setImagemSrc(imageObjectURL);
            } catch (error) {
                console.error('Erro ao carregar imagem:', error);
            }
        }

        fetchImage();
    }, [idUsuario]);

    useEffect(() => {
        const fetchAdminData = async () => {
            const idUsuario = localStorage.getItem('idUsuario');
            try {
                const response = await apiResponsavel.get(`/${idUsuario}`);
                const data = response.data;
                console.log(data);
                setNome(data.nome);
                setTelefone(data.telefone);
                setApresentacao(data.apresentacao);
                setLogradouro(data.endereco.logradouro);
                setEnderecoCompleto(`${data.endereco.logradouro}, ${data.endereco.numero}, ${data.endereco.bairro}, ${data.endereco.cidade} - ${data.endereco.cep}`);
                setCEP(data.endereco.cep);
                setBairro(data.endereco.bairro);
                setNumero(data.endereco.numero);
                setCidade(data.endereco.cidade);
                setAgendaDisponibilidade(data.agenda.disponibilidade || []);
                setIdosos(data.idosos || []);
                setOriginalData(data);
            } catch (error) {
                console.error("Erro ao buscar dados do responsável:", error);
            }
        };

        fetchAdminData();
    }, []);

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
        checkIfDirty();
    };

    const checkIfDirty = () => {
        const hasChanges = (
            nome !== originalData.nome ||
            apresentacao !== originalData.apresentacao ||
            telefone !== originalData.telefone ||
            logradouro !== originalData.endereco.logradouro ||
            enderecoCompleto !== `${originalData.endereco.logradouro}, ${originalData.endereco.numero}, ${originalData.endereco.bairro}, ${originalData.endereco.cidade} - ${originalData.endereco.cep}` ||
            CEP !== originalData.endereco.cep ||
            bairro !== originalData.endereco.bairro ||
            numero !== originalData.endereco.numero ||
            cidade !== originalData.endereco.cidade
        );
        setIsDirty(hasChanges);
    };

    const handleSave = async (event) => {
        event.preventDefault();
        const dadosAtualizarResponsavel = {
            nome: nome,
            apresentacao: apresentacao,
            endereco: {
                logradouro: logradouro,
                cep: CEP,
                numero: numero,
                bairro: bairro,
                cidade: cidade
            },
            agenda: {
                disponibilidade: agendaDisponibilidade
            },
            idosos: idosos
        };

        try {
            await apiResponsavel.put(`/${idUsuario}`, dadosAtualizarResponsavel);
            window.location.reload();
            console.log("Atualização realizada com sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar responsável:", error);
        }
    };

    return (
        <>
            <Navbar />
            <div className={Style["corpo"]}>
                <Stack alignItems={'center'}>

                    <Stack spacing={2} direction="row" className={Style["ajuste"]}>
                        <div className={Style["img"]}>
                            <img src={Voltar} alt="" width="45vh" height="35vh" />
                            <span>Voltar</span>
                        </div>
                        <div className={Style["texto"]}>
                            <h2>Edição de perfil</h2>
                        </div>
                    </Stack>

                    <Stack direction="row" className={Style["centraliza"]}>
                        <Stack className={Style["info-usuario"]} spacing={4} marginInline={5}>
                            <Stack justifyContent='center'  direction='row'>
                                <img className={Style["foto-usu"]} src={imagemSrc} alt=""/>
                            </Stack>
                            <Stack direction='column' alignItems='center' spacing={3}>
                                <InputTextField label="Nome" value={nome} onChange={(e) => handleInputChange(e, setNome)} />
                                <InputTextField label="Sobre" value={apresentacao} onChange={(e) => handleInputChange(e, setApresentacao)} size="xl" />
                                <InputTextField label="Telefone" value={telefone} onChange={(e) => handleInputChange(e, setTelefone)} size="xl" />
                                <ElderList idosos={idosos} Style={{width:'20vh'}}/>
                            </Stack>
                        </Stack>
                        <Stack className={Style["endereco"]}  >
                            <Stack marginLeft={3} marginRight={3}>
                                <Stack direction="row" marginTop={3}>
                                    <InputTextField
                                        label="Endereço Completo"
                                        value={enderecoCompleto}
                                        disabled
                                        sx={{ width: "42vw" }}
                                    />
                                </Stack>
                                <Stack direction="row" spacing={2} marginTop={3} >
                                    <InputTextField label="CEP" value={CEP} onChange={(e) => handleInputChange(e, setCEP)} sx={{ width: "12vw" }} />
                                    <InputTextField label="Rua" value={logradouro} onChange={(e) => handleInputChange(e, setLogradouro)} sx={{ width: "29vw" }} />
                                </Stack>
                                <Stack direction="row" spacing={2} marginTop={3} >

                                    <InputTextField label="Bairro" value={bairro} onChange={(e) => handleInputChange(e, setBairro)} sx={{ width: "29vw" }} />
                                    <InputTextField label="Número" value={numero} onChange={(e) => handleInputChange(e, setNumero)} sx={{ width: "12vw" }} />
                                </Stack>
                                <Stack direction="row" spacing={2} marginTop={3} marginBottom={2}>
                                    <InputTextField label="Cidade" value={cidade} onChange={(e) => handleInputChange(e, setCidade)} sx={{ width: "42vw" }} />
                                </Stack>


                            </Stack>
                            <Stack className={Style["calendario"]} marginBottom={3}>
                                <Calendario onChange={setCalendario} />
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack direction="row" className={Style["centraliza"]} spacing={5} marginInline={5}>
                        {/* <Stack direction="row" spacing="3" className={Style["info-usuario"]}>
                        <ElderList idosos={idosos} />
                        </Stack> */}
                        {/* <Stack spacing={3} className={Style["endereco"]}>
                        <Calendario onChange={setCalendario} />
                    </Stack> */}
                    </Stack>


                    {/* <div className={Style["idoso"]}>
                    <Stack direction="row" spacing="3" className={Style["adiciona"]}>
                        <ElderList idosos={idosos} />
                        </Stack>
                        
                        </div>
                        
                        <div className={Style["calendario"]}>
                    <Stack spacing={3} className={Style["itens"]}>
                        <Calendario onChange={setCalendario} />
                    </Stack>
                </div> */}

                    <div className={Style["botao-fixo"]}>
                        <ButtonAzul onClick={handleSave} disabled={!isDirty}>Salvar Alterações</ButtonAzul>
                    </div>
                </Stack>
            </div>
        </>
    );
}

export default EleAtualizarPerfil;
