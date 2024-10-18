import React, { useEffect, useState } from 'react';
import CalendarioEditarPerfil from "../calendario/CalendarioEditarPerfil";
import Navbar from "../cuidador/navbar/navbarCuidador";
import Stack from '@mui/material/Stack';
import InputTextField from "../Input/Input"; // Corrigido o nome do componente
import Style from '../../pages/confUser/Atualizar.module.css';
import ButtonAzul from "../botao/BotaoAzul";
import ElderList from "./idosoComponent";
import apiResponsavel from '../../api/Usuario/apiResponsavel';
import axios from 'axios';
import Calendario from '../calendario/Calendario';
import CalendarioPerfil from '../calendario/CalendarioPerfil';
import Voltar from "../../utils/assets/setaVoltar.png"

function EleAtualizarPerfil() {
    const [nome, setNome] = useState("");
    const [apresentacao, setApresentacao] = useState("");
    const [endereco, setEndereco] = useState("");
    const [CEP, setCEP] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [calendario, setCalendario] = useState(Array(7).fill().map(() => Array(3).fill(false)));

    const [agendaDisponibilidade, setAgendaDisponibilidade] = useState([]);
    const [idosos, setIdosos] = useState([]);
    const [imagemSrc, setImagemSrc] = useState(null);
    const idUsuario = localStorage.getItem('idUsuario');

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
                setApresentacao(data.apresentacao);
                setEndereco(data.endereco.logradouro); // Ajustado para acessar o logradouro do objeto de endereço
                setCEP(data.endereco.cep); // Ajustado para acessar o CEP do objeto de endereço
                setRua(data.endereco.complemento); // Ajustado para acessar a rua do objeto de endereço
                setBairro(data.endereco.bairro); // Ajustado para acessar o bairro do objeto de endereço
                setNumero(data.endereco.numero); // Ajustado para acessar o número do objeto de endereço
                setCidade(data.endereco.cidade); // Ajustado para acessar a cidade do objeto de endereço
                setAgendaDisponibilidade(data.agenda.disponibilidade || []); // Inicializando com array vazio se não houver dados
                setIdosos(data.idosos || []); // Inicializando com array vazio se não houver dados de idosos
            } catch (error) {
                console.error("Erro ao buscar dados do responsável:", error);
            }
        };

        fetchAdminData();
    }, []);

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    };

    const handleSave = async (event) => {
        event.preventDefault();
        const dadosAtualizarResponsavel = {
            nome: nome,
            apresentacao: apresentacao,
            endereco: {
                logradouro: endereco,
                cep: CEP,
                numero: numero,
                bairro: bairro,
                cidade: cidade
            },
            agenda: {
                disponibilidade: agendaDisponibilidade
            },
            idosos: idosos // Incluindo os dados dos idosos para salvar
        };

        try {
            await apiResponsavel.put(`/${idUsuario}`, dadosAtualizarResponsavel);
            window.location.reload(); // Recarregar a página para refletir as alterações
            console.log("Atualização realizada com sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar responsável:", error);
        }
    };

    return (
        <>
            <Navbar />

            <div className={Style["corpo"]}>
                <Stack spacing={2} display="flex" direction="row" justifyContent="space-around" className={Style["ajuste"]}>
                    <div className={Style["img"]}>
                        <img src={Voltar} alt="" width="45vh" height="35vh" />
                        <span>Voltar</span>
                    </div>
                </Stack>
                <div className={Style["texto"]}>
                    <h2>Edição de perfil</h2>
                </div>

                <Stack direction="row" className={Style["centraliza"]}>
                    <Stack className={Style["info-usuario"]} spacing={4} marginInline={5}>
                        <div className={Style["foto-usu"]}>
                            <img src={imagemSrc} alt="" width="100%" height="100%" style={{ borderRadius: "50%" }} />
                        </div>
                        <InputTextField label="Nome" value={nome} onChange={(e) => handleInputChange(e, setNome)} />
                        <InputTextField label="Sobre" value={apresentacao} onChange={(e) => handleInputChange(e, setApresentacao)} size="xl" />
                    </Stack>
                    <Stack className={Style["endereco"]}>
                        <Stack direction="row" marginLeft={6} marginTop={2}>
                            <InputTextField label="Endereço" value={endereco} onChange={(e) => handleInputChange(e, setEndereco)} sx={{ width: "42vw" }} />
                        </Stack>
                        <Stack direction="row" spacing={2} marginLeft={6}>
                            <InputTextField label="CEP" value={CEP} onChange={(e) => handleInputChange(e, setCEP)} sx={{ width: "14vw" }} />
                            <InputTextField label="Rua" value={rua} onChange={(e) => handleInputChange(e, setRua)} sx={{ width: "27vw" }} />
                        </Stack>
                        <Stack direction="row" spacing={2} marginLeft={6}>
                            <InputTextField label="Bairro" value={bairro} onChange={(e) => handleInputChange(e, setBairro)} sx={{ width: "29vw" }} />
                            <InputTextField label="Número" value={numero} onChange={(e) => setNumero(e.target.value)} sx={{ width: "12vw" }} />
                        </Stack>
                        <Stack direction="row" spacing={2} marginLeft={6} marginBottom={2}>
                            <InputTextField label="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} sx={{ width: "42vw" }} />
                        </Stack>
                    </Stack>
                </Stack>

                <div className={Style["idoso"]}>
                    <Stack direction="row" spacing="3" className={Style["adiciona"]}>
                        <ElderList idosos={idosos} /> {/* Passando idosos como propriedade */}
                    </Stack>
                </div>

                <div className={Style["calendario"]}>
                    <Stack spacing={3} className={Style["itens"]}>
                        <Calendario onChange={setCalendario} />
                        <ButtonAzul onClick={handleSave}>Salvar Alterações</ButtonAzul>
                    </Stack>
                </div>
            </div>
        </>
    );
}

export default EleAtualizarPerfil;
