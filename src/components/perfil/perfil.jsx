import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Button, Checkbox } from '@mui/material';
import Styles from './perfil.modules.css';
import Navbar from '../cuidador/navbar/navbarCuidador';
import IconChat from '../../utils/assets/Chat.png';
import IMG from '../../utils/assets/Rectangle 53.png';
import Senhor from '../../utils/assets/Senhor.png';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Flag from '../../utils/assets/Empty Flag.png';
import CalendarioPerfil from '../calendario/CalendarioPerfil';
import apiChat from '../../api/Usuario/apiChat';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { useNavigate } from 'react-router-dom';
import MapComponent from '../../components/Maps/mapsComp';
import axios from 'axios';

function Perfil2() {
  const [usuario, setUsuario] = useState(null);
  const idUsuario = localStorage.getItem('idUsuario');
  const navigate = useNavigate();
  const dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'));
  const [imagemSrc, setImagemSrc] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await axios.get(`http://localhost:8080/files/view/${dadosUsuario.idUsuario}.jpg`, {
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

    setUsuario(dadosUsuario);
    console.log(dadosUsuario);
  }, []);

  function calcularIdade(dtNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dtNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  }

  async function iniciarChat() {
    if (!usuario) return;

    const chatData = {
      senderId: idUsuario, // Usuário atual como remetente
      recipientId: usuario.idUsuario, // ID do destinatário (usuário exibido no perfil)
      content: '', // Mensagem de início do chat
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await apiChat.post('/chat', chatData);
      console.log('Chat iniciado com sucesso:', response);
      navigate('/chat');
    } catch (error) {
      console.error('Erro ao iniciar o chat:', error);
    }
  }

  if (!usuario) {
    return <div>Carregando...</div>;
  }

  return (
    <Box className={Styles.container2} sx={{ width: '100%', height: '100%', minHeight: '100vh', backgroundColor: 'white' }}>
      <Navbar />
      <Box
        className={Styles.tela}
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        sx={{ paddingTop: '8vh', paddingLeft: '12vh', marginInline: '8vh' }}
      >
        <Box display="flex" flexDirection="column" alignItems="center"
          sx={{
            marginRight: '2vh',
            width: '30vh',
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: '6px',
            boxShadow: '4px 4px 10px 4px rgba(0, 0, 0, 0.2)',
            padding: "4vh",
            textAlign: 'center' // Para centralizar o texto

          }}>
          <img src={imagemSrc || IMG} alt="" style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '6px',
            marginBottom: '1vh'
          }} />
          <Typography variant="h6">
            {usuario.nome}, {calcularIdade(usuario.dtNascimento)} Anos
          </Typography>
          <Box display="flex" alignItems="center">
            <img src={Flag} alt="" style={{ cursor: 'pointer', width: '3.2vh', height: '5vh', marginRight: '1vh' }} />
            {localStorage.getItem('tipoUsuario') === 'RESPONSAVEL' && (
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            )}
          </Box>
          <Button
            startIcon={<img src={IconChat} alt="chat icon" height="26vh" width="27vh" />}
            sx={{
              backgroundColor: '#077DB0',
              display: 'flex',
              flexDirection: 'column',
              width: '15vw',
              height: '8vh',
              paddingTop: '2vh',
            }}
            variant="contained"
            color="primary"
            onClick={iniciarChat}
          >
            Conversar
          </Button>
          {/* Igor -Trocar pela descricao do Responsável*/}
          {usuario.idosos && usuario.idosos.map((idoso, index) => (
            <Box key={index} display="flex" flexDirection="column" alignItems="center" marginTop="2vh">
              <Box display="flex" alignItems="center">
                <img src={Senhor} alt="" width="60vw" />
                <Typography marginLeft="1vh">{idoso.nome}</Typography>
              </Box>
              <Typography width="15vw" marginTop="2vh" textAlign="center">
                {idoso.descricao}
              </Typography>
            </Box>
          ))}
        </Box>


        {/*Informações do idoso e Tabs */}
        <Box display="flex" flexDirection="column" sx={{
          width: '140vh',           // Largura do card
          height: '70vh',         // Altura do card
          backgroundColor: 'rgb(255, 255, 255)', // Cor de fundo
          borderRadius: '6px',    // Bordas do card
          boxShadow: '4px 4px 10px 4px rgba(0, 0, 0, 0.2)',
          padding: "4vh"
        }}>

          <Tabs>
            <TabList>
              <Tab
                variant="soft"
                color="primary" sx={{ minWidth: '4vh', fontSize: '2vh', }}>1 -Idoso</Tab>
            </TabList>
            <TabPanel value={0}>
              {/* Aqui vai todas informações do idoso 1 */}
            </TabPanel>
          </Tabs>
          <Stack direction="row" spacing={7} justifyContent="space-between" sx={{ marginBottom: '2vh' }}>
            <Stack width="38vh">
              <Typography sx={{ color: '#077DB0', fontSize: '2.3vh' }}>Nome do Idoso - Idade</Typography>
              <Typography>
                {usuario.apresentacao}
              </Typography>
            </Stack>


            <Stack width="23vh">
              <Typography sx={{ color: '#077DB0', fontSize: '2.3vh' }}>Idiomas</Typography>
              {usuario.idiomas.map(idioma => (
                <Typography key={idioma.idIdioma}>
                  {idioma.idioma}
                </Typography>
              ))}
            </Stack>

            {localStorage.getItem('tipoUsuario') === 'RESPONSAVEL' && (
              <Stack width="23vh">
                <Typography sx={{ color: '#077DB0', fontSize: '2.3vh' }}>Características:</Typography>
                {usuario.caracteristicas.map(caracteristica => (
                  <Typography key={caracteristica.idCaracteristica}>
                    {caracteristica.nome}
                  </Typography>
                ))}
              </Stack>
            )}
          </Stack>

          <Box sx={{ marginLeft: '1vh', marginTop: '2vh', minHeight: "40vh" }}>
            <Stack direction="row" width="30vh" sx={{ marginBottom: '3vh', height: "10vh" }}>
              <Box sx={{ transform: 'scale(0.7)', transformOrigin: 'top left' }}>
                <CalendarioPerfil disponibilidade={usuario.agenda?.disponibilidade || [[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]]} />
              </Box>
              <Stack direction="column" >
                <Box sx={{ transform: 'scale(0.8)', transformOrigin: 'top left' }}>
                  <Stack width="100%" height="7vh" marginBottom="2vh" >

                    <Typography sx={{ color: '#077DB0', fontSize: '2.3vh' }}>Endereço</Typography>
                    <Typography>
                      {usuario.endereco.logradouro}, {usuario.endereco.numero}
                    </Typography>
                    <Typography>
                      {usuario.endereco.complemento && `${usuario.endereco.complemento}, `}
                      {usuario.endereco.bairro} - {usuario.endereco.cidade}, {usuario.endereco.cep}
                    </Typography>
                  </Stack>
                </Box>
                <Stack width="55vh" height="35vh">
                  {usuario.coordernada &&
                    usuario.coordernada.latitude !== undefined &&
                    usuario.coordernada.longitude !== undefined ? (
                    <MapComponent coordenadas={[usuario.coordernada.latitude, usuario.coordernada.longitude]} />
                  ) : (
                    <p>Coordenadas não disponíveis</p>
                  )}
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
      {/* 
      <Box display="flex" flexDirection="column" 
        sx={{ 
          width: '182vh',          
          height: '60vh',         
          backgroundColor: 'rgb(255, 255, 255)', 
          borderRadius: '6px',    
          boxShadow: '4px 4px 10px 4px rgba(0, 0, 0, 0.2)', 
          padding: "4vh",
          marginTop: '5vh',
          marginInline: "20vh"
        }}> 
           <Box sx={{ marginLeft: '1vh', marginTop: '2vh' }}>
                <Box sx={{ transform: 'scale(0.9)', transformOrigin: 'top left' }}>
            
              <Stack width="190vh" height="60vh" >
                  <MapComponent></MapComponent>
                </Stack>   </Box>
          </Box>
          </Box> */}
    </Box>
  );
}

export default Perfil2;
