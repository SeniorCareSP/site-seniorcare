import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Button, Checkbox } from '@mui/material';
// import Styles from './perfil.modules.css';
import Navbar from '../cuidador/navbar/navbarCuidador';
import IconChat from '../../utils/assets/Chat.png';
import IMG from '../../utils/assets/Rectangle 53.png';
import Senhor from '../../utils/assets/Senhor.png';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Flag from '../../utils/assets/Empty Flag.png';
import Calendario from '../calendario/Calendario';
import apiChat from '../../api/Usuario/apiChat';
import { useNavigate } from 'react-router-dom';

function Perfil2() {
  const [usuario, setUsuario] = useState(null);
  const [telaCadastro, setTelaCadastro] = useState(false); // Estado para verificar se é tela de cadastro
  const idUsuario = localStorage.getItem('idUsuario');
  const navigate = useNavigate();

  useEffect(() => {
    // Obtém os dados do usuário do localStorage
    const dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'));
    setUsuario(dadosUsuario);
    console.log(dadosUsuario);

    // Simula a lógica para determinar se é tela de cadastro
    const isTelaCadastro = false;
    setTelaCadastro(isTelaCadastro);
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
      content: 'Iniciando chat...', // Mensagem de início do chat
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
    <Box  sx={{ width: '100%', backgroundColor: 'white' }}>
      <Navbar />

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        sx={{ paddingTop: '8vh', paddingLeft: '12vh', marginInline: '8vh' }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginRight: '4vh' }}>
          <img src={IMG} alt="" width="200px" height="190px" />
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
            onClick={telaCadastro ? null : iniciarChat} // Desativa o onClick se for tela de cadastro
            disabled={telaCadastro} // Desativa o botão se for tela de cadastro
          >
            Conversar
          </Button>

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

        <Box display="flex" flexDirection="column" sx={{ width: '52vw' }}>
          <Stack direction="row" spacing={7} justifyContent="space-between" sx={{ marginBottom: '2vh' }}>
            <Stack width="38vh">
              <Typography sx={{ color: '#077DB0', fontSize: '2.3vh' }}>Descrição</Typography>
              <Typography>
                {usuario.apresentacao}
              </Typography>
            </Stack>

            <Stack width="43vh">
              <Typography sx={{ color: '#077DB0', fontSize: '2.3vh' }}>Idiomas</Typography>
              {usuario.idiomas.map(idioma => (
                <Typography key={idioma.idIdioma}>
                  {idioma.idioma}
                </Typography>
              ))}
            </Stack>

            {localStorage.getItem('tipoUsuario') === 'RESPONSAVEL' && (
              <Stack width="43vh">
                <Typography sx={{ color: '#077DB0', fontSize: '2.3vh' }}>Conteúdo se for responsável</Typography>
                <Typography>Outro conteúdo</Typography>
                <Typography>Mais conteúdo</Typography>
              </Stack>
            )}
          </Stack>

          <Box sx={{ marginLeft: '12vh' }}>
            <Typography sx={{ color: '#077DB0', fontSize: '3vh', marginBottom: '2vh', alignContent: 'center', justifyContent: 'center', marginLeft: '3vh' }}>
              Dias que precisa de cuidado
            </Typography>
            <Calendario onChange={newValue => console.log(newValue)} calendarioClicavel={!telaCadastro} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Perfil2;
