import React from 'react';
import Stack from '@mui/material/Stack';
import Calendario from '../calendario/Calendario';
import Styles from "../perfil/perfil.modules.css";
import Navbar from "../cuidador/navbar/navbarCuidador";
import voltar from '../../utils/assets/setaVoltar.png';
import IMG from "../../utils/assets/Rectangle 53.png";
import Senhor from "../../utils/assets/Senhor.png";
import Favorite from '@mui/icons-material/Favorite';
import Flag from '../../utils/assets/Empty Flag.png';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import IconChat from "../../utils/assets/Chat.png";
import { Box, Typography, Button, Checkbox } from '@mui/material';

function Perfil2() {
  return (
    <>
      <Box className={Styles["container2"]} sx={{ width: "100%", backgroundColor: "white" }}>
        <Navbar />

        <Box className={Styles["tela"]} display="flex" flexDirection="row" justifyContent="space-around" sx={{ paddingTop: '8vh', paddingLeft: "12vh", marginInline: "8vh" }}>

          <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginRight: "4vh", }}>
            <img src={IMG} alt='' width="200px" height="190px" />
              <Typography variant="h6">
                  Pedro Lucca, 40 anos
              </Typography>
                 <Box display="flex" alignItems="center">
                    <img src={Flag} alt="" style={{ cursor: 'pointer', width: "3.2vh", height: "5vh", marginRight: "1vh" }} />
                       <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                 </Box>
                   <Button startIcon={<img src={IconChat} alt="chat icon" height="26vh" width="27vh" />}
                    sx={{ backgroundColor: "#077DB0",
                          display: "flex",
                          flexDirection: "column",
                          width: "15vw",
                          height: "8vh", 
                          paddingTop: "2vh"
                         }} 
                         variant="contained" 
                         color="primary">
                   Conversar
                   </Button>


            <Box display="flex" alignItems="center" marginTop="2vh">
               <img src={Senhor} alt='' width="60vw" />
                 <Typography marginLeft="1vh">1 idoso</Typography>
            </Box>
              <Typography width="15vw" marginTop="2vh" textAlign="center">
              José é um idoso que precisa de cuidados devido à fragilidade física
               e dificuldades de locomoção causadas pela idade avançada. Ele requer 
               assistência para realizar atividades básicas da vida diária, como tomar banho, 
               se vestir, preparar...
              </Typography>
            </Box>

             <Box display="flex" flexDirection="column" sx={{ width: "52vw" }}>
                 <Stack direction="row" spacing={7} justifyContent="space-between" sx={{ marginBottom: "2vh" }}>
                    <Stack Stack width="38vh">
                      <Typography sx={{ color: "#077DB0", fontSize: "2.3vh" }}> Descrição </Typography>
                         <Typography>
                             Pretende pagar: negociável
                          </Typography>
                             <Typography>
                                Precisa de um: cuidador(a)
                              </Typography>
                      </Stack>
              <Stack Stack width="43vh">
                  <Typography sx={{ color: "#077DB0", fontSize: "2.3vh" }}> Classificação de outros cuidadores</Typography>
                     <Typography> "Um idoso muito gentil e simpático, colaborou com as atividades e me tratou bem"</Typography>
              </Stack>

              <Stack width="43vh">
                <Typography sx={{ color: "#077DB0", fontSize: "2.3vh" }}>Preciso de ajuda com</Typography>
                <Typography>Cozinhar</Typography>
                <Typography> Limpar a casa</Typography>
              </Stack>
            </Stack>

            <Box sx={{ marginLeft: "12vh" }}>
              <Typography sx={{ color: "#077DB0", fontSize: "3vh", marginBottom: "2vh", alignContent: "center", justifyContent: "center", marginLeft: "3vh" }}>
                Dias que precisa de cuidado
              </Typography>
              <Calendario />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Perfil2;
