import React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';
import Calendario from '../calendario/Calendario';
import Style from "./perfil.modules.css"
import Navbar from "../cuidador/navbar/navbarCuidador";
// import ImgLogin from '../../components/eleLogin/ImgLogin';
import { Box, Typography } from '@mui/material';

function Perfil2() {
  return (
    <div className={Style["container"]}>
        <Navbar/>
         
        <div className=''>
          <Box display="flex" justifyContent="space-around">
          <Stack spacing={2} >
             <img src={""} alt=''/>
          </Stack>
          <Box>
          <Stack display="flex" justifyContent="space-between"  >
            <Typography>
              Descrição
            </Typography>
            <Typography>
              Descrição
            </Typography>
          </Stack>

          <Stack>
            <Typography>
              Descrição
            </Typography>
            <Typography>
              Descrição
            </Typography>
          </Stack>

          <Stack>
            <Typography>
              Preciso de ajuda com
            </Typography>
            <Typography>
              Descrição
            </Typography>
          </Stack>
          </Box>
          </Box>
          </div>
    </div>
  );
}

export default Perfil2;
