import React from 'react';
import { Modal, Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import BtnAzulS from '../../botao/BtnAzulS';
import BtnBrancoS from '../../botao/BtnBrancoS';
import styled  from '@emotion/styled';
import Styles from "./denuncia.modules.css"

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Paper = styled(Box)`
  background-color: #fff;
  border: none;
  box-shadow: 24px;
  padding: 32px;
  width: 600px;
  outline: none;
  border-radius: 10px;
`;

const FormControl = styled(FormControlLabel)`
  margin: 8px;
  min-width: 120px;
`;

const FileInput = styled(Button)`
  margin-top: 16px;
`;

const CancelButton = styled(Button)`
  background-color: #ff0000;
  color: #fff;
  &:hover {
    background-color: #d00000;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #1976d2;
  color: #fff;
  &:hover {
    background-color: #155da8;
  }
`;

const ReportUserModal = ({ open, handleClose }) => {
  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="report-user-modal-title"
    >
      <Paper>
        <Box display="flex" justifyContent="space-around" sx={{marginBottom: "2vh", height: "5vh", width: "37vw", alignItems: "center" }}>
        <Typography  display=" flex" color="#077DB0" variant="h6" id="report-user-modal-title"  align= "center" sx={{color: "#077DB0"  }}>
          Denunciar Usuário
        </Typography>
        </Box>
        <Box sx={{ width: '100%', height: '2px', backgroundColor: '#077DB0', marginBottom: '20px' }}></Box>
        <Box display="flex" justifyContent="space-around" sx={{marginBottom: "2vh",padding: "2px",  margin: "2px", height: "5vh", width: "37vw", alignItems: "center" }}> 
        <FormControl
          control={<Checkbox name="abuse" />}
          label="Abuso"
        />
        <FormControl
          control={<Checkbox name="fraud" />}
          label="Fraude"
        />
        <FormControl
          control={<Checkbox name="misleading_content" />}
          label="Conteúdo Enganoso"
        />
        </Box>
         <Box display="flex" alignContent={"center"} justifyContent="space-around" sx={{marginBottom: "2vh",padding: "2px",  margin: "2px", height: "5vh", width: "39.5vw", alignItems: "center" }}> 
      
        <FormControl
          control={<Checkbox name="cheating" />}
          label="Trapaça"
        />
        <FormControl
          control={<Checkbox name="mistreatment" />}
          label="Maus Tratos"
          
        />
        <FormControl
          control={<Checkbox name="inappropriate_behavior" />}
          label="Comportamento Indevido"
        />
        </Box>
        <TextField
          label="Detalhes"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Imagem (Opcional)
        </Typography>
        <Box display="flex" justifyContent="space-around" sx={{border: "2px dotted #077DB0" ,padding: "20px", height: "13vh", width: "36vw",  }}>
        <FileInput
          variant="contained"
          component="label"
        >
           
          Adicionar Foto
          <input
            type="file"
            hidden
          />
        </FileInput>
        </Box>
        <Box display="flex" justifyContent="space-around" sx={{ marginTop: 6, marginInline:"16vh" }}>
          <BtnBrancoS variant="contained" onClick={handleClose} sx={{ width: "23vh", height: "5.9vh", fontSize: "2vh", backgroundColor: "#FFFFFF"}}>
            Cancelar
          </BtnBrancoS>
        <BtnAzulS variant="contained" sx={{ width: "23vh", height: "5.9vh", fontSize: "2vh"}}>
            Concluir
          </BtnAzulS>
        </Box>
      </Paper>
    </StyledModal>
  );
};

export default ReportUserModal;
