import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Stack, Typography, Box, TextField, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Style from '../../pages/admin/Admin.module.css';
import SidebarDash from '../sidebar/SidebarDash';
import BotaoAzul from "../botao/BotaoAzul";
import apiDenuncia from '../../api/Usuario/apiDenuncia';

function Denuncias() {
  const [denuncia, setDenuncia] = useState(null);
  const [radioValue, setRadioValue] = useState('banir');
  const navigate = useNavigate();
  const idDenuncia = localStorage.getItem('idDenuncia');
  const idDenunciado = localStorage.getItem('idDenunciado');

  useEffect(() => {
    async function fetchDenuncia() {
      try {
        const response = await apiDenuncia.get(`/${idDenuncia}`);
        setDenuncia(response.data);
      } catch (error) {
        console.error('Erro ao buscar denúncia:', error);
      }
    }

    fetchDenuncia();
  }, [idDenuncia]);

  const fecharDenuncia = async () => {
    try {
      if (radioValue === 'banir') {
        await apiDenuncia.post(`/bloquear/${idDenunciado}`);
      }
      await apiDenuncia.post(`/resolverDenuncia/${idDenuncia}`);
      navigate("/admin/listagemDenuncia");
    } catch (error) {
      console.error('Erro ao resolver denúncia:', error);
    }
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
    console.log(event.target.value);
  };

  const cancelar = () => {
    navigate("/admin/listagemDenuncia");
  };

  if (!denuncia) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={Style.container}>
      <SidebarDash />
      <Stack className={Style.tela}>
        <Typography display="flex" justifyContent="start" fontSize="4vh" paddingLeft="3vw" marginBottom="6vh">
          Denunciado
        </Typography>

        <Stack display="flex" justifyContent="space-around" direction="row" marginInline="2vh" marginBottom="4vh">
          <Stack spacing={3} direction="row" className={Style.foto}>
            <span></span>
            <Typography variant="body1" paddingTop="3vh" paddingLeft="2vw">{denuncia?.usuarioDenunciado?.nome}</Typography>
          </Stack>

          <Stack direction={"column"} marginRight="26vw" marginLeft="4vh">
            <Typography variant="body2">Tags:</Typography>
            <Stack direction="row" spacing={3}>
              {denuncia?.info?.slice(0, 3).map((tag, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    backgroundColor: "#077DB0",
                    borderRadius: "0.6vh",
                    justifyContent: "center",
                    display: "flex",
                    paddingTop: "0.7vh",
                    width: "5.9vw",
                    height: "4vh",
                    color: "#ffff",
                    fontSize: "2.3vh"
                  }}
                >
                  {tag}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Stack display="flex" direction="row" spacing={4} marginLeft="5vh">
          <Stack display="flex">
            <Typography variant="body2">Denuncia</Typography>
            <Box display="flex" className={Style.field}>
              <TextField
                placeholder='Denuncia'
                multiline
                rows={6}
                defaultValue={denuncia?.detalhes}
                variant="outlined"
                sx={{ width: "18vw" }}
              />
            </Box>
          </Stack>

          <Stack display="flex">
            <Box marginBottom="12vh">
              <Typography variant="body2">Imagens</Typography>
              <Box display="flex" justifyContent="space-around" sx={{ border: "2px dotted #077DB0", padding: "8vh", height: "7vh", borderRadius: "0.8vh" }}>
                <BotaoAzul variant="outlined" component="label" sx={{ width: "12vw", fontSize: "2vh", borderRadius: "1vh" }}>
                  Adicionar foto
                  <input type="file" hidden />
                </BotaoAzul>
              </Box>
            </Box>
          </Stack>

          <Stack display="flex" direction="column" width="15vw" className={Style.conversa}>
            <Stack display="flex" direction="column">
              <RadioGroup value={radioValue} onChange={handleRadioChange} name="banir-manter">
                <FormControlLabel value="banir" control={<Radio />} label="Banir conta" />
                <FormControlLabel value="manter" control={<Radio />} label="Manter conta" />
              </RadioGroup>
            </Stack>
          </Stack>
        </Stack>

        <Box display="flex" width="57vw" className={Style.box}>
          <Stack display="flex" flexDirection="column" justifyContent={"center"} spacing={2} width="40vh" className={Style.botoes}>
            <Button variant="contained" color="primary" onClick={fecharDenuncia}>
              Concluir
            </Button>
            <Button variant="outlined" color="primary" onClick={cancelar}>
              Cancelar
            </Button>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
}

export default Denuncias;
