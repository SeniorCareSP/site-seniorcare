import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Button, Checkbox } from '@mui/material';
import Styles from './perfil.modules.css';
import Navbar from '../cuidador/navbar/navbarCuidador';
import IconChat from '../../utils/assets/Chat.png';
import Grid from '@mui/material/Grid';

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
        sx={{ paddingTop: '5vh', paddingLeft: '12vh', marginInline: '8vh' }}
      >
        {/* Css */}
        <Box display="flex" flexDirection="column" alignItems="center"
          sx={{
            marginRight: '2vh',
            width: '30vh',
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: '6px',
            boxShadow: '4px 4px 10px 4px rgba(0, 0, 0, 0.2)',
            padding: "4vh",
            textAlign: 'center', 
            marginBottom: "3vh",
          }}>
            
          <img src={usuario.imagemUrl} alt="" style={{
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
        </Box>


        {/*Informações do idoso e Tabs */}
          {/* Css */}
        <Box display="flex" flexDirection="column" sx={{
          width: '140vh',           // Largura do card
          minHeight: '70vh',         // Altura do card
          backgroundColor: 'rgb(255, 255, 255)', // Cor de fundo
          borderRadius: '6px',    // Bordas do card
          boxShadow: '4px 4px 10px 4px rgba(0, 0, 0, 0.2)',
          padding: "4vh",
          marginBottom: "3vh",
          marginRight:"4vh",
        }}>


          <Tabs>
            <TabList>
              {usuario.idosos && usuario.idosos.map((idoso, index) => (
                <Tab
                  key={index}
                  variant="soft"
                  color="primary"
                  sx={{ minWidth: '4vh', fontSize: '2vh' }}
                >
                  {index + 1} - {idoso.nome} {/* Nome do idoso na aba */}
                </Tab>
              ))}
            </TabList>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5vh',
                flexGrow: 1
              }}
            >
              {usuario.idosos && usuario.idosos.map((idoso, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <TabPanel value={index} sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding: 0 }}>
                    <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          sx={{ color: '#077DB0', fontSize: '2.5vh', fontWeight: 'bold' }}
                        >
                          Nome: {idoso.nome} - Idade: {calcularIdade(idoso.dtNasc)} anos
                        </Typography>
                        <Box
                          sx={{
                            backgroundColor: '#f0f4f8',
                            padding: '1.5vh',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            minHeight: '80%',
                          }}
                        >
                          <Box>
                          <Stack direction="row" spacing={1} justifyContent="space-between" sx={{ marginBottom: '2vh' }}>
                            <Typography variant="body1" sx={{ wordWrap: 'break-word', width: '100%', maxWidth: '35vh', overflowWrap: 'break-word' }}>
                              <strong>Descrição:</strong> {idoso.descricao}
                            </Typography>
                            <Stack width="23vh">
                            <Typography variant="body1" sx={{ wordWrap: 'break-word', width: '100%', maxWidth: '35vh', overflowWrap: 'break-word' }}>
                            <strong>Doenças Crônicas:</strong> {idoso.doencasCronicas}
                            </Typography>
                            <Typography variant="body1">
                              <strong>Gênero:</strong> {idoso.genero || "Não informado"}
                            </Typography>
                            <Typography variant="body1">
                              <strong>Data de Nascimento:</strong> {idoso.dtNasc}
                            </Typography>
                            </Stack>
                              <Stack width="23vh">
                              <Typography variant="body1">
                                <strong>Acamado:</strong> {idoso.cuidadosMin ? "Sim" : "Não"}
                              </Typography>
                              <Typography variant="body1">
                                <strong>Lúcido:</strong> {idoso.lucido ? "Sim" : "Não"}
                              </Typography>
                              <Typography variant="body1">
                                <strong>Pouca Mobilidade:</strong> {idoso.mobilidade ? "Sim" : "Não"}
                              </Typography>
                            </Stack>
                            <Stack width="13vh">
                              <Typography sx={{ color: '#077DB0', fontSize: '2.3vh', fontWeight: 'bold' }}>Idiomas</Typography>
                              {usuario.idiomas && usuario.idiomas.length > 0 ? (
                                usuario.idiomas.map(idioma => (
                                  <Typography key={idioma.idIdioma}>
                                    {idioma.idioma}
                                  </Typography>
                                ))
                              ) : (
                                <Typography>Nenhum idioma informado</Typography>
                              )}
                            </Stack>
                            </Stack>
                        
                        </Box>
                        </Box>
                      </Box>

                    
                    </Stack>
                  </TabPanel>
                </Box>
              ))}
            </Box>
          </Tabs>



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
                {usuario.endereco &&
                    usuario.endereco.latidude !== undefined &&
                    usuario.endereco.longitude !== undefined ? (
                      <MapComponent coordenadas={[usuario.endereco.latidude, usuario.endereco.longitude]} />
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
