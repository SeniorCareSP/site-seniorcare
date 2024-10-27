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
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function EleAtualizarPerfil() {
    const [nome, setNome] = useState("");
    const [apresentacao, setApresentacao] = useState("");
    const [telefone, setTelefone] = useState("");
    const [enderecoCompleto, setEnderecoCompleto] = useState("");
    const [CEP, setCEP] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [email, setEmail] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [calendario, setCalendario] = useState(Array(7).fill().map(() => Array(3).fill(false)));
    const [agendaDisponibilidade, setAgendaDisponibilidade] = useState([]);
    const [idosos, setIdosos] = useState([]);
    const [imagemSrc, setImagemSrc] = useState(null);
    const idUsuario = localStorage.getItem('idUsuario');
    const [originalData, setOriginalData] = useState({});
    const [isDirty, setIsDirty] = useState(false);
    const navigate = useNavigate();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('error');
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
            try {
                const response = await apiResponsavel.get(`/${idUsuario}`);
                const data = response.data;
                console.log(data);
                setNome(data.nome || '');
                setEmail(data.email || '');
                setApresentacao(data.apresentacao || '');
                setLogradouro(data.endereco.logradouro || '');
                setEnderecoCompleto(`${data.endereco.logradouro}, ${data.endereco.numero}, ${data.endereco.bairro}, ${data.endereco.cidade} - ${data.endereco.cep}`);
                setCEP(data.endereco.cep || '');
                setBairro(data.endereco.bairro || '');
                setNumero(data.endereco.numero || '');
                setCalendario(data.agenda.disponibilidade || [])
                setCidade(data.endereco.cidade);
                setAgendaDisponibilidade(data.agenda.disponibilidade || []);
                setIdosos(data.idosos || []);
                setOriginalData(data);
                if (data.telefone) {
                    setTelefone(phoneFormatter(data.telefone));
                } else {
                    setTelefone("");
                }
            } catch (error) {
                console.error("Erro ao buscar dados do responsável:", error);
            }
        };

        fetchAdminData();
    }, [idUsuario]);

    useEffect(() => {
        checkIfDirty();
    }, [nome, email, apresentacao, telefone, logradouro, enderecoCompleto, CEP, bairro, numero, cidade, calendario]);

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
        checkIfDirty();
    };

    const checkIfDirty = () => {
        const hasChanges = (
            nome !== originalData.nome ||
            email !== originalData.email ||
            apresentacao !== originalData.apresentacao ||
            telefone.replace(/\D/g, '') !== originalData.telefone.replace(/\D/g, '') ||
            logradouro !== originalData.endereco.logradouro ||
            enderecoCompleto !== `${originalData.endereco.logradouro}, ${originalData.endereco.numero}, ${originalData.endereco.bairro}, ${originalData.endereco.cidade} - ${originalData.endereco.cep}` ||
            CEP !== originalData.endereco.cep ||
            bairro !== originalData.endereco.bairro ||
            numero !== originalData.endereco.numero ||
            cidade !== originalData.endereco.cidade ||
            calendario !== originalData.agenda.disponibilidade

        );
        setIsDirty(hasChanges);
    };

    const phoneFormatter = (value) => {
        const cleaned = value.replace(/\D/g, '');
        const match = cleaned.match(/(\d{2})(\d{4,5})(\d{4})/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return value;
    };

    const handlePhoneChange = (event) => {
        const formattedValue = phoneFormatter(event.target.value);
        setTelefone(formattedValue);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagemSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = async (event) => {
        event.preventDefault();

        const dadosAtualizarResponsavel = {
            nome: nome,
            apresentacao: apresentacao,
            email: email,
            telefone: telefone.replace(/\D/g, ''),
            endereco: {
                logradouro: logradouro,
                cep: CEP,
                numero: numero,
                bairro: bairro,
                cidade: cidade
            },
            agendas: {
                disponibilidade: calendario
            }
        };

        try {
            console.log(dadosAtualizarResponsavel);
            await apiResponsavel.put(`/${idUsuario}`, dadosAtualizarResponsavel);
            setSnackbarMessage("Atualização realizada com sucesso!");
            setSnackbarSeverity("success");
            setSnackbarOpen(true);

        } catch (error) {
            console.error("Erro ao atualizar responsável:", error);
            setSnackbarMessage("Erro ao atualizar os dados.");
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
        }
    };

    const handleImageUpload = async () => {
        if (!selectedFile) {
            alert("Selecione uma imagem antes de fazer o upload.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append('file', selectedFile, `${idUsuario}.jpg`);
            await axios.post(
                `http://localhost:8080/files/upload?filename=${idUsuario}.jpg`,
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            setSnackbarMessage("Imagem atualizada com sucesso!");
            setSnackbarSeverity("success");
            setSnackbarOpen(true);
            setSelectedFile(null);
        } catch (error) {
            alert("Erro ao enviar a imagem.");
            console.error('Erro ao enviar a imagem:', error);
            setSnackbarMessage("Erro ao enviar a imagem.");
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
        }
    };

    return (
        <>
            <Navbar />
            <div className={Style["corpo"]}>
                <Stack alignItems={'center'}>
                    <Stack spacing={2} direction="row" className={Style["ajuste"]} >
                        <div className={Style["img"]} >
                            <img src={Voltar} alt="" width="45vh" height="35vh" onClick={() => navigate(`/procurar`)} />
                            <span>Voltar</span>
                        </div>
                        <div className={Style["texto"]}>
                            <h2>Edição de perfil</h2>
                        </div>
                    </Stack>

                    <Stack direction="row" className={Style["centraliza"]}>
                        <Stack className={Style["info-usuario"]} spacing={4} marginInline={5}>
                            <Stack justifyContent='center' direction='row'>
                                <img className={Style["foto-usu"]} src={imagemSrc} alt="" />
                            </Stack>
                            <Stack direction='column' alignItems='center' spacing={3} justifyContent='center'>
                                <label htmlFor="file-upload" style={{
                                    cursor: 'pointer',
                                    color: 'black',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    height: '5vh',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                    {selectedFile ? selectedFile.name : "Selecione uma imagem"}
                                </label>
                                <input
                                    style={{ cursor: 'pointer', display: 'none' }}
                                    id="file-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <ButtonAzul onClick={handleImageUpload} disabled={!selectedFile}>Salvar Foto</ButtonAzul>
                            </Stack>
                            <Stack direction='column' alignItems='center' spacing={3}>
                                <InputTextField label="Nome" value={nome} onChange={(e) => handleInputChange(e, setNome)} />
                                <InputTextField label="Email" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
                                <InputTextField label="Sobre" value={apresentacao} onChange={(e) => handleInputChange(e, setApresentacao)} size="xl" />
                                <InputTextField label="Telefone" value={telefone} onChange={handlePhoneChange} size="xl" />
                                <ElderList idosos={idosos} Style={{ width: '20vh' }} />
                            </Stack>
                        </Stack>
                        <Stack className={Style["endereco"]}>
                            <Stack marginLeft={3} marginRight={3}>
                                <Stack direction="row" marginTop={3}>
                                    <InputTextField
                                        label="Endereço Completo"
                                        value={enderecoCompleto}
                                        disabled
                                        sx={{ width: "42vw" }}
                                    />
                                </Stack>
                                <Stack direction="row" spacing={2} marginTop={3}>
                                    <InputTextField label="CEP" value={CEP} onChange={(e) => handleInputChange(e, setCEP)} sx={{ width: "12vw" }} />
                                    <InputTextField label="Rua" value={logradouro} onChange={(e) => handleInputChange(e, setLogradouro)} sx={{ width: "29vw" }} />
                                </Stack>
                                <Stack direction="row" spacing={2} marginTop={3}>
                                    <InputTextField label="Bairro" value={bairro} onChange={(e) => handleInputChange(e, setBairro)} sx={{ width: "29vw" }} />
                                    <InputTextField label="Número" value={numero} onChange={(e) => handleInputChange(e, setNumero)} sx={{ width: "12vw" }} />
                                </Stack>
                                <Stack direction="row" spacing={2} marginTop={3} marginBottom={2}>
                                    <InputTextField label="Cidade" value={cidade} onChange={(e) => handleInputChange(e, setCidade)} sx={{ width: "42vw" }} />
                                </Stack>
                            </Stack>
                            <Stack className={Style["calendario"]} marginBottom={3}>
                                <CalendarioEditarPerfil onChange={setCalendario} disponibilidade={calendario} />
                            </Stack>
                        </Stack>
                    </Stack>

                    <div className={Style["botao-fixo"]}>
                        <ButtonAzul onClick={handleSave} disabled={!isDirty}>Salvar Alterações</ButtonAzul>
                    </div>
                    <Snackbar
                        open={snackbarOpen}
                        autoHideDuration={6000}
                        onClose={() => setSnackbarOpen(false)}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                        <Alert
                            onClose={() => setSnackbarOpen(false)}
                            severity={snackbarSeverity}
                            sx={{ width: '100%' }}
                        >
                            {snackbarMessage}
                        </Alert>
                    </Snackbar>

                </Stack>
            </div>
        </>
    );
}

export default EleAtualizarPerfil;
