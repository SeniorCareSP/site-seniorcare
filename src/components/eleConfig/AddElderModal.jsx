import React, { useState, useEffect } from 'react';
import './ElderList.css';
import { Modal, Box, TextField, FormControlLabel, Checkbox, Button, Typography } from '@mui/material';
import axios from 'axios';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

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

function AddElderModal({ open, handleClose, elderToEdit, refreshList }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [genero, setGenero] = useState('');
  const [dtNasc, setDtNascimento] = useState('');
  const [mobilidade, setMobilidade] = useState(false);
  const [cuidadosMin, setCuidadosMin] = useState(false);
  const [lucido, setLucido] = useState(false);
  const [doencasCronicas, setDoencasCronicas] = useState('');
  const idUsuario = localStorage.getItem('idUsuario');

  useEffect(() => {
    if (elderToEdit) {
      setNome(elderToEdit.nome);
      setDescricao(elderToEdit.descricao);
      setGenero(elderToEdit.genero);
      setDtNascimento(elderToEdit.dtNasc);
      setMobilidade(elderToEdit.mobilidade);
      setCuidadosMin(elderToEdit.cuidadosMin);
      setLucido(elderToEdit.lucido);
      setDoencasCronicas(elderToEdit.doencasCronicas);
    } else {
      setNome('');
      setDescricao('');
      setGenero('');
      setDtNascimento('');
      setMobilidade(false);
      setCuidadosMin(false);
      setLucido(false);
      setDoencasCronicas('');
    }
  }, [elderToEdit]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newElder = {
      nome,
      descricao,
      genero,
      dtNasc,
      mobilidade,
      cuidadosMin,
      lucido,
      doencasCronicas,
      responsavel: idUsuario,
    };

    try {
      if (elderToEdit) {
        await axios.put(`http://localhost:8080/idosos/${elderToEdit.idIdoso}`, newElder);
      } else {
        await axios.post('http://localhost:8080/idosos', newElder);
      }

      refreshList();
      handleClose();
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {elderToEdit ? 'Editando' : 'Adicionando'} um idoso
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth margin="normal" label="Nome" placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
          <TextField fullWidth margin="normal" label="Descrição" placeholder="Descrição sobre o Idoso" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
          
          <FormControl fullWidth>
            <InputLabel id="select-genero">Sexo biológico</InputLabel>
            <Select labelId="select-genero" fullWidth margin="normal" label="Sexo biológico" select SelectProps={{ native: true }} value={genero} onChange={(e) => setGenero(e.target.value)}>
              <MenuItem value="masculino">Masculino</MenuItem >
              <MenuItem value="feminino">Feminino</MenuItem >
            </Select>
          </FormControl>

          <TextField fullWidth margin="normal" label="Data de nascimento" type="date" InputLabelProps={{ shrink: true }} value={dtNasc} onChange={(e) => setDtNascimento(e.target.value)} />
          <FormControlLabel control={<Checkbox checked={mobilidade} onChange={(e) => setMobilidade(e.target.checked)} />} label="O idoso tem mobilidade reduzida?" />
          <FormControlLabel control={<Checkbox checked={cuidadosMin} onChange={(e) => setCuidadosMin(e.target.checked)} />} label="O idoso requer cuidados mínimos?" />
          <FormControlLabel control={<Checkbox checked={lucido} onChange={(e) => setLucido(e.target.checked)} />} label="O idoso está lúcido?" />
          <TextField fullWidth margin="normal" label="Possui alguma doença crônica?" placeholder="Ex: Alzheimer, Parkinson" value={doencasCronicas} onChange={(e) => setDoencasCronicas(e.target.value)} />
          <Button variant="contained" color="primary" fullWidth type="submit">
            Concluir
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default AddElderModal;
