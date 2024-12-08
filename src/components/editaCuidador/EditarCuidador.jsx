import React, { useEffect, useState } from 'react';
import Navbar from "../cuidador/navbar/navbarCuidador";
import Stack from '@mui/material/Stack'
import InputTexfield from "../Input/Input";
import Style from '../../pages/confUser/Atualizar.module.css'
import ButtonAzul from "../botao/BotaoAzul";
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Button from '@mui/joy/Button';
import { Typography } from '@mui/material';
import Voltar from "../../utils/assets/setaVoltar.png"
import { useNavigate } from "react-router-dom";
import apiCuidador from '../../api/Usuario/apiCuidador';
import apiAdm from '../../api/Usuario/apiAdm';
import axios from 'axios';
import InputTextField from "../Input/Input";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CalendarioEditarPerfil from "../calendario/CalendarioEditarPerfil";
import ip from '../../api/ipAws';

function AtualizarPerfilCuidador() {
    const [value, setValue] = React.useState([]);
    const idUsuario = localStorage.getItem('idUsuario');

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('error');
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [apresentacao, setApresentacao] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [CEP, setCEP] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [precoHora, setPrecoHora] = useState("");
    const [imagemSrc, setImagemSrc] = useState(null);
    const [enderecoCompleto, setEnderecoCompleto] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [calendario, setCalendario] = useState(Array(7).fill().map(() => Array(3).fill(false)));
    const [experiencia, setExperiencia] = useState("");


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

    const handleImageUpload = async () => {
        if (!selectedFile) {
            alert("Selecione uma imagem antes de fazer o upload.");
            return;
        }
    
        const idUsuario = localStorage.getItem('idUsuario');
        const formData = new FormData();
        formData.append('file', selectedFile, `${idUsuario}.jpg`);
        
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }
        try {
            const response = await axios.post(
                `http://${ip}/api/files/upload?idUsuario=${idUsuario}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log('repsonse', response);
            setSnackbarMessage('Imagem atualizada com sucesso!');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            console.log('Upload feito com sucesso:', response.data);
            localStorage.setItem("imagemUrl", response.data)
            setImagemSrc(URL.createObjectURL(selectedFile));
        } catch (error) {
            console.error('Erro ao fazer upload da imagem:', error);
            setSnackbarMessage('Erro ao atualizar imagem. Tente novamente.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };
    
    useEffect(() => {
        const fetchAdminData = async () => {
            const idUsuario = localStorage.getItem('idUsuario');
            
            try {
                const response = await apiCuidador.get(`/${idUsuario}`);
                const data = response.data;
                console.log(data);
                setNome(data.nome || '');
                setImagemSrc(data.imagemUrl);
                setEmail(data.email || '');
                setCalendario(data.agenda.disponibilidade || [])
                setApresentacao(data.apresentacao || '');
                setLogradouro(data.endereco.logradouro || '');
                setExperiencia(data.experiencia || '')
                setEnderecoCompleto(`${data.endereco.logradouro || ''}, ${data.endereco.numero || ''}, ${data.endereco.bairro || ''}, ${data.endereco.cidade || ''} - ${data.endereco.cep || ''}`);
                setCEP(data.endereco.cep || '');
                setRua(data.endereco.complemento || '');
                setBairro(data.endereco.bairro || '');
                setNumero(data.endereco.numero || '');
                setCidade(data.endereco.cidade || '');
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
    }, []);

    const formatarPreco = (valor) => {
        const cleanedValue = valor.replace(/\D/g, ''); // Remove tudo que não é número
        const numberValue = parseInt(cleanedValue, 10);

        if (isNaN(numberValue)) return "R$ 0,00";

        const inteiro = Math.floor(numberValue / 100);
        const centavos = String(numberValue % 100).padStart(2, '0');

        return `R$ ${inteiro.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${centavos}`;
    };

    const handleInputChangePreco = (event) => {
        const { value } = event.target;
        const formattedValue = formatarPreco(value);
        setPrecoHora(formattedValue);
    };
    const handleSave = async (event) => {
        event.preventDefault();
        const idUsuario = localStorage.getItem('idUsuario');
        const dadosAtualizarCuidador = {
            nome: nome,
            email: email,
            setApresentacao: apresentacao,
            endereco: endereco,
            CEP: CEP,
            rua: rua,
            bairro: bairro,
            numero: numero,
            cidade: cidade,
            precoHora: precoHora,
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

    return (
        <>
            <Navbar />
            <div className={Style["corpo"]}>
                <Stack alignItems={'center'}>
                    <Stack spacing={2} display="flex" direction="row" justifyContent="space-around" className={Style["ajuste"]}>
                        <div className={Style["img"]} onClick={() => navigate(`/procurar`)}>
                            <img src={Voltar} alt="" width="45vh" height="35vh"  />
                            <span>Voltar</span>
                        </div>
                        <div className={Style["texto"]}>
                            <h2>Edição de perfil</h2>
                        </div>
                    </Stack>

                    <Stack direction="row" className={Style["centraliza"]} marginBottom={2} >
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
                                <InputTextField label="Experiência" value={experiencia} onChange={(e) => handleInputChange(e, setExperiencia)} />
                                <InputTextField label="Apresentação" value={apresentacao} onChange={(e) => handleInputChange(e, setApresentacao)} size="xl" />
                                <InputTextField label="Telefone" value={telefone} onChange={handlePhoneChange} size="xl" />
                                <InputTexfield
                                    value={precoHora}
                                    label="Preço por hora"
                                    onChange={handleInputChangePreco}
                                />                            </Stack>
                            <Stack direction='column' alignItems='center' marginBottom={2} spacing={3} justifyContent='center'>
                                <Typography >
                                    Posso ajudar com:
                                </Typography>
                                <div className={Style["card"]}>
                                    <Stack spacing={3} className={Style["opcoes"]}>
                                        <Stack direction="row" spacing={2}>
                                            <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => { setValue(newValue) }}>
                                                <Button value="Trabalho de casa">Trabalho Doméstico</Button>
                                                <Button value="Culinária">Culinária</Button>
                                                <Button value="Curativos">Curativos</Button>
                                            </ToggleButtonGroup>
                                        </Stack>
                                        <Stack direction="row" spacing={2} justifyContent={"center"}>
                                            <ToggleButtonGroup spacing={2} marginBottom={2} color="primary" value={value} onChange={(event, newValue) => { setValue(newValue) }}>
                                                <Button value="Banho">Banho</Button>
                                            </ToggleButtonGroup>
                                        </Stack>
                                    </Stack>
                                </div>
                                <div></div>
                            </Stack>
                        </Stack>
                        {/* info-suario */}
                        <Stack className={Style["endereco"]} >
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
                                <Stack className={Style["calendario"]} marginBottom={3}>
                                    <CalendarioEditarPerfil onChange={setCalendario} disponibilidade={calendario} />
                                </Stack>
                                <Stack direction='column' alignItems='center' marginBottom={2} spacing={3} justifyContent='center'>
                                    <h3>Sobre você:</h3>
                                    <Stack direction="row" spacing={2}>
                                        <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => { setValue(newValue) }}>
                                            <Button value="Dirigir">Sei dirigir</Button>
                                            <Button value="Fumo">Fumo</Button>
                                            <Button value="Cuidados">Certificado de Cuidados Geriatricos</Button>
                                        </ToggleButtonGroup>
                                    </Stack>
                                    <Stack direction="row" spacing={2}>
                                        <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => { setValue(newValue) }}>
                                            <Button value="Diploa de enfermagem">Diploma de Enfermagem</Button>
                                            <Button value="Culinaria">Certificado Primeiros Socorros</Button>
                                            <Button value="Curativos">Certificado Boa Conduta</Button>
                                        </ToggleButtonGroup>
                                    </Stack>
                                </Stack>
                            </Stack>

                        </Stack>
                    </Stack>

                </Stack>
                <div className={Style["botao-fixo"]}>
                    <ButtonAzul onClick={handleSave} >Salvar Alterações</ButtonAzul>
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
            </div>
        </>
    )
}

export default AtualizarPerfilCuidador;