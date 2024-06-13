import React, { useState } from 'react';
import { Modal, Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import BtnAzulS from '../../botao/BtnAzulS';
import BtnBrancoS from '../../botao/BtnBrancoS';
import styled  from '@emotion/styled';
import Styles from "./denuncia.modules.css";
import api from '../../../api/Usuario/apiDenuncia';
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

const ReportUserModal = ({ open, handleClose, usuarioDenunciador, usuarioDenunciado }) => {
  const [checkedAbuse, setCheckedAbuse] = useState(false);
  const [checkedFraud, setCheckedFraud] = useState(false);
  const [checkedMisleadingContent, setCheckedMisleadingContent] = useState(false);
  const [checkedCheating, setCheckedCheating] = useState(false);
  const [checkedMistreatment, setCheckedMistreatment] = useState(false);
  const [checkedInappropriateBehavior, setCheckedInappropriateBehavior] = useState(false);
  const [details, setDetails] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleCheckChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case 'abuse':
        setCheckedAbuse(checked);
        break;
      case 'fraud':
        setCheckedFraud(checked);
        break;
      case 'misleading_content':
        setCheckedMisleadingContent(checked);
        break;
      case 'cheating':
        setCheckedCheating(checked);
        break;
      case 'mistreatment':
        setCheckedMistreatment(checked);
        break;
      case 'inappropriate_behavior':
        setCheckedInappropriateBehavior(checked);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };

  const handleConcluir = async () => {
    const info = [];
    if (checkedAbuse) info.push("Abuso");
    if (checkedFraud) info.push("Fraude");
    if (checkedMisleadingContent) info.push("Conteúdo Enganoso");
    if (checkedCheating) info.push("Trapaça");
    if (checkedMistreatment) info.push("Maus Tratos");
    if (checkedInappropriateBehavior) info.push("Comportamento Indevido");

    const reportData = {
      info: info,
      detalhes: details,
      usuarioDenunciador: usuarioDenunciador,
      usuarioDenunciado: usuarioDenunciado
    };
    console.log('Tentativa Requisição de denúncia:', reportData);

    try {
      // Aqui você deve substituir 'api' pela sua instância do axios ou api configurada
      const response = await api.post('', reportData);
      console.log('Requisição de denúncia enviada com sucesso:', response.data);
      handleClose(); // Fechar o modal após concluir a denúncia com sucesso
    } catch (error) {
      console.error('Erro ao enviar a denúncia:', error);
      // Trate o erro conforme necessário (exibir mensagem de erro, etc.)
    }
  };

  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="report-user-modal-title"
    >
      <Paper>
        <Box display="flex" justifyContent="space-around" sx={{marginBottom: "2vh", height: "5vh", width: "37vw", alignItems: "center" }}>
          <Typography display=" flex" color="#077DB0" variant="h6" id="report-user-modal-title" align="center" sx={{color: "#077DB0" }}>
            Denunciar Usuário
          </Typography>
        </Box>
        <Box sx={{ width: '100%', height: '2px', backgroundColor: '#077DB0', marginBottom: '20px' }}></Box>
        <Box display="flex" justifyContent="space-around" sx={{marginBottom: "2vh", padding: "2px", margin: "2px", height: "5vh", width: "37vw", alignItems: "center" }}> 
          <FormControl
            control={<Checkbox name="abuse" checked={checkedAbuse} onChange={handleCheckChange} />}
            label="Abuso"
          />
          <FormControl
            control={<Checkbox name="fraud" checked={checkedFraud} onChange={handleCheckChange} />}
            label="Fraude"
          />
          <FormControl
            control={<Checkbox name="misleading_content" checked={checkedMisleadingContent} onChange={handleCheckChange} />}
            label="Conteúdo Enganoso"
          />
        </Box>
        <Box display="flex" justifyContent="space-around" sx={{marginBottom: "2vh", padding: "2px", margin: "2px", height: "5vh", width: "37vw", alignItems: "center" }}> 
          <FormControl
            control={<Checkbox name="cheating" checked={checkedCheating} onChange={handleCheckChange} />}
            label="Trapaça"
          />
          <FormControl
            control={<Checkbox name="mistreatment" checked={checkedMistreatment} onChange={handleCheckChange} />}
            label="Maus Tratos"
          />
          <FormControl
            control={<Checkbox name="inappropriate_behavior" checked={checkedInappropriateBehavior} onChange={handleCheckChange} />}
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
          value={details}
          onChange={handleDetailsChange}
        />
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Imagem (Opcional)
        </Typography>
        <Box display="flex" justifyContent="space-around" sx={{border: "2px dotted #077DB0" , padding: "20px", height: "13vh", width: "36vw" }}>
          <FileInput
            variant="contained"
            component="label"
          >
            Adicionar Foto
            <input
              type="file"
              hidden
              onChange={handleFileChange}
            />
          </FileInput>
        </Box>
        <Box display="flex" justifyContent="space-around" sx={{ marginTop: 6, marginInline:"16vh" }}>
          <BtnBrancoS variant="contained" onClick={handleClose} sx={{ width: "23vh", height: "5.9vh", fontSize: "2vh", backgroundColor: "#FFFFFF"}}>
            Cancelar
          </BtnBrancoS>
          <BtnAzulS variant="contained" onClick={handleConcluir} sx={{ width: "23vh", height: "5.9vh", fontSize: "2vh"}}>
            Concluir
          </BtnAzulS>
        </Box>
      </Paper>
    </StyledModal>
  );
};

export default ReportUserModal;