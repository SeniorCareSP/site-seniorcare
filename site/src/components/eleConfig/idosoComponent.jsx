// ElderList.js
import React, { useState } from 'react';
import './ElderList.css'; // Importando o arquivo CSS para estilização
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Card, CardContent, Typography, IconButton, Box, Button } from '@mui/material';
import AddElderModal from './AddElderModal';

function ElderCard({ name, condition, age }) {
  return (
    <div className="elder-card">
      <div className="elder-info">
        <p>{name}, {condition}, {age} anos.</p>
      </div>
      <div className="elder-actions">
        <Box>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Box>
      </div>
    </div>
  );
}

function AddElderButton({ onClick }) {
  return (
    <button className="add-elder-button" onClick={onClick}>
      <AddCircleOutlineIcon /> Adicione um idoso
    </button>
  );
}

function ElderList() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const elders = [
    { name: 'Idoso', condition: 'acamado', age: 70 },
    // Adicione outros idosos aqui
  ];

  return (
    <div className="elder-list-container">
      <h2>Idosos cadastrados</h2>
      <div className="elder-list">
        {elders.map((elder, index) => (
          <ElderCard key={index} {...elder} />
        ))}
      </div>
      <AddElderButton onClick={handleOpenModal} />
      <AddElderModal open={modalOpen} handleClose={handleCloseModal} />
    </div>
  );
}

export default ElderList;
