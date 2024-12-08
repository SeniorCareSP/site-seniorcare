import React, { useState, useEffect } from 'react';
import './ElderList.css'; // Importando o arquivo CSS para estilização
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton, Box } from '@mui/material';
import AddElderModal from './AddElderModal';
import axios from 'axios';
import ip from '../../api/ipAws';

function ElderCard({ id, name, condition, age, onEdit, onDelete }) {
  const handleEdit = () => {
    onEdit(id);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://${ip}/api/idosos/${id}`);
      onDelete(id);
    } catch (error) {
      console.error('Erro ao deletar o idoso:', error);
    }
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
  const [elderToEdit, setElderToEdit] = useState(null);
  const [elders, setElders] = useState([]);

  useEffect(() => {
    setElders(idosos);
  }, [idosos]);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => {
    setModalOpen(false);
    setElderToEdit(null);
  };

  const handleDeleteElder = (elderId) => {
    const updatedElders = elders.filter(elder => elder.idIdoso !== elderId);
    setElders(updatedElders);
  };

  const refreshList = async () => {
    try {
      const response = await axios.get('http://'+ip+'/api/idosos');

      setElders(response.data);
      setIdosos(response.data);
    } catch (error) {
      console.error('Erro ao buscar a lista de idosos:', error);
    }
  };

  const handleEditElder = (elderId) => {
    const elder = elders.find((e) => e.idIdoso === elderId);
    setElderToEdit(elder);
    handleOpenModal();
  };

  const handleModalClose = () => {
    handleCloseModal();
    refreshList(); // Atualiza a lista após fechar o modal
  };

  return (
    <div className="elder-list-container">
      <h2>Idosos cadastrados</h2>
      <div className="elder-list">
        {elders.map((elder) => (
          <ElderCard
            key={elder.idIdoso}
            id={elder.idIdoso}
            name={elder.nome}
            condition={elder.descricao || 'Sem descrição'}
            age={elder.dtNasc ? calculateAge(elder.dtNasc) : 'Data de nascimento não especificada'}
            onEdit={handleEditElder}
            onDelete={handleDeleteElder}
          />
        ))}
      </div>
      <AddElderButton onClick={handleOpenModal} />
      <AddElderModal
        open={modalOpen}
        handleClose={handleModalClose}
        elderToEdit={elderToEdit}
        refreshList={refreshList}
      />
    </div>
  );
}

function calculateAge(birthday) {
  const ageDate = new Date(Date.now() - new Date(birthday).getTime());
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default ElderList;
