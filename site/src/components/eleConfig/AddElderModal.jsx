// AddElderModal.js
import React from 'react';
import './ElderList.css'; 
import { Modal, Box, TextField, FormControlLabel, Checkbox, Button, Typography } from '@mui/material';

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
        <form>
          <TextField
            fullWidth
            margin="normal"
            label="Sexo biológico"
            select
            SelectProps={{
              native: true,
            }}
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
          />
          <FormControlLabel
            control={<Checkbox name="mobility" />}
            label="O idoso tem mobilidade reduzida?"
          />
          <FormControlLabel
            control={<Checkbox name="bedridden" />}
            label="O idoso está acamado?"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Possui alguma doença crônica?"
            placeholder="Ex: Alzheimer, Parkinson"
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
