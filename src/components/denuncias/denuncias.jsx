import React from 'react';
import { Stack, Typography, Box, TextField, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Style from '../../pages/admin/Admin.module.css';
import SidebarDash from '../sidebar/SidebarDash';

function Denuncias() {
    return (
        <div className={Style["container"]}>
            <SidebarDash />
            <Stack className={Style["tela"]} >

                <Typography display="flex" justifyContent="start" fontSize="4vh" paddingLeft="3vw" marginBottom="4vh">
                Denuncia
                </Typography>
                <Stack display="flex" justifyContent="space-around" direction="row" marginInline="2vh" marginBottom="4vh">
                <Stack spacing={3} direction="row"  className={Style["foto"]}>
                    <span></span>
                    <Typography variant="body1" paddingTop={"3vh"} paddingLeft="2vw">Ana Maria</Typography>
                </Stack>
                <Stack direction={"column"} marginRight={"35vw"}>
                <Typography variant="body2">Tags:</Typography>
                <Stack direction="row" spacing={1} >
                    <Button variant="contained" >Abuso</Button>
                    <Button variant="contained">Mal trato</Button>
                    <Button variant="contained">Trapaça</Button>
                </Stack>
                </Stack>
                </Stack>
               <Stack display="flex" direction="row" spacing={5}> 
                <TextField
                    label="Denuncia"
                    multiline
                    rows={5}
                    defaultValue="Ela fez isso e aquilo e falou aquilo lá não pode me senti mal tirou a peruca da minha vó e saiu correndo sem pagar."
                    variant="outlined"
                    marginTop="3vh"
                    sx={{
                       
                        width: "18vw",
                        height: "32vh"
                    }}
                />
                <Stack display="flex"  >
                 <Typography variant="body2">Imagens</Typography>
                <Box display="flex" justifyContent="space-around" sx={{border: "2px dotted #077DB0" ,padding: "7.8vh" }}>
                   
                    <Button variant="outlined" component="label" paddingTop="5vh">
                        Adicionar foto
                        <input type="file" hidden />
                    </Button>
                </Box>
                </Stack>
                
                <Stack display="flex" direction="column" width="15vw">
                <Button variant="contained" color="error">
                    Ver conversas
                </Button>
                <Stack display="flex" direction="column">
                <RadioGroup  defaultValue="banir" name="banir-manter" >
                    <FormControlLabel value="banir" control={<Radio />} label="Banir conta" />
                    <FormControlLabel value="manter" control={<Radio />} label="Manter conta" />
                </RadioGroup>
                </Stack>
                </Stack>
                </Stack>
                <Stack  display="flex" flexDirection="colummn"  spacing={2}  width="38vh">
                    <Button variant="contained" color="primary" >
                        Concluir
                    </Button>
                    <Button variant="outlined" color="primary">
                        Cancelar
                    </Button>
                    </Stack>
            </Stack>
        </div>
    );
}

export default Denuncias;
