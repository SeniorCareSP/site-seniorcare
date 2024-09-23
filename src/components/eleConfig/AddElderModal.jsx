import React, { useState } from 'react';
import './ElderList.css';
import { Modal, Box, TextField, FormControlLabel, Checkbox, Button, Typography } from '@mui/material';
import axios from 'axios';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AddElderModal({ open, handleClose }) {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [dtNasc, setDtNascimento] = useState('');
  const [mobilidade, setMobilidade] = useState(false);
  const [acamado, setAcamado] = useState(false);
  const [lucido, setLucido] = useState(false);
  const [doencasCronicas, setDoencasCronicas] = useState('');
  const idUsuario = localStorage.getItem('idUsuario');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');

    const newElder = {
      nome,
      genero,
      dtNasc,
      mobilidade,
      acamado,
      lucido,
      doencasCronicas,      
      responsavel: idUsuario,
    };
    console.log(token)
    console.log(newElder)
    try {

      const response = await axios.post('http://localhost:8080/idosos', newElder);
      console.log(response)
      console.log(token)

      console.log('Resposta do servidor:', response.data);
      handleClose();
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Adicionando um idoso
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Nome"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Sexo biológico"
            select
            SelectProps={{
              native: true,
            }}
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </TextField>
          <TextField
            fullWidth
            margin="normal"
            label="Data de nascimento"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={dtNasc }
            onChange={(e) => setDtNascimento(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox checked={mobilidade} onChange={(e) => setMobilidade(e.target.checked)} />}
            label="O idoso tem mobilidade reduzida?"
          />
          <FormControlLabel
            control={<Checkbox checked={acamado} onChange={(e) => setAcamado(e.target.checked)} />}
            label="O idoso está acamado?"
          />
          <FormControlLabel
            control={<Checkbox checked={lucido} onChange={(e) => setLucido(e.target.checked)} />}
            label="O idoso está lúcido?"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Possui alguma doença crônica?"
            placeholder="Ex: Alzheimer, Parkinson"
            value={doencasCronicas}
            onChange={(e) => setDoencasCronicas(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth type="submit">
            Concluir
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default AddElderModal;
