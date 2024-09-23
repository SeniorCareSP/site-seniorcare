import React, { useState, useEffect } from 'react';
import './ElderList.css'; // Importando o arquivo CSS para estilização
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton, Box, Button } from '@mui/material';
import AddElderModal from './AddElderModal';

function ElderCard({ id, name, condition, age, onDelete }) {
  const handleEdit = () => {
    // Implemente a lógica de edição aqui
    console.log(`Editar idoso com ID ${id}`);
  };

  const handleDelete = () => {
    // Implemente a lógica de exclusão aqui
    onDelete(id);
  };

  return (
    <div className="elder-card">
      <div className="elder-info">
        <p>{name}, {condition}, {age} anos.</p>
      </div>
      <div className="elder-actions">
        <Box>
          <IconButton onClick={handleEdit}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDelete}>
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

function ElderList({ idosos, setIdosos }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [elders, setElders] = useState([]);

  useEffect(() => {
    setElders(idosos);
  }, [idosos]);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleDeleteElder = (elderId) => {
    const updatedElders = elders.filter(elder => elder.id !== elderId);
    setElders(updatedElders);
    setIdosos(updatedElders); // Atualiza o estado de idosos no componente pai, se necessário
  };

  return (
    <div className="elder-list-container">
      <h2>Idosos cadastrados</h2>
      <div className="elder-list">
        {elders.map((elder, index) => (
          <ElderCard
            key={index}
            id={elder.id}
            name={elder.nome}
            condition={elder.descricao || 'Sem descrição'}
            age={elder.dtNasc ? calculateAge(elder.dtNasc) : 'Data de nascimento não especificada'}
            onDelete={handleDeleteElder}
          />
        ))}
      </div>
      <AddElderButton onClick={handleOpenModal} />
      <AddElderModal open={modalOpen} handleClose={handleCloseModal} />
    </div>
  );
}

// Função para calcular a idade com base na data de nascimento
function calculateAge(birthday) {
  const ageDate = new Date(Date.now() - new Date(birthday).getTime());
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default ElderList;
