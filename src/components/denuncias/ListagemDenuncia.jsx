import React, { useState, useEffect } from 'react';
import { Stack, TextField, Button, MenuItem } from '@mui/material';
import Style from './Denuncia.module.css';
import SidebarDash from '../sidebar/SidebarDash';
import Documento from '../eleDocumento/Documento';
import InputPesquisa from '../Input/InputPesquisa';
import apiDenuncia from '../../api/Usuario/apiDenuncia';

function ListaDenun() {
  const [denuncias, setDenuncias] = useState([]);
  const [filteredDenuncias, setFilteredDenuncias] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [ordenacaoAscendente, setOrdenacaoAscendente] = useState(true); // Estado para controlar a ordem da data

  useEffect(() => {
    async function fetchDenuncias() {
      try {
        const response = await apiDenuncia.get('');
        if (Array.isArray(response.data)) {
          setDenuncias(response.data);
          setFilteredDenuncias(response.data);
        } else {
          console.error('Erro: a resposta da API não é um array de denúncias.');
        }
      } catch (error) {
        console.error('Erro ao buscar denúncias:', error);
      }
    }

    fetchDenuncias();
  }, []); // Chama apenas uma vez ao montar o componente

  useEffect(() => {
    filterDenuncias();
  }, [searchTerm, selectedStatus, selectedDate, ordenacaoAscendente]); // Atualiza quando houver alterações nos filtros ou na ordenação

  const filterDenuncias = () => {
    let filtered = [...denuncias]; // Cria uma cópia das denúncias

    if (searchTerm) {
      filtered = filtered.filter(denuncia =>
        denuncia.usuarioDenunciado.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        denuncia.info.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedStatus) {
      const statusBoolean = selectedStatus === 'Fechado';
      filtered = filtered.filter(denuncia => denuncia.status === statusBoolean);
    }

    if (selectedDate) {
      filtered = filtered.filter(denuncia => new Date(denuncia.dataDenuncia).toISOString().split('T')[0] === selectedDate);
    }

    // Ordenação por data
    filtered.sort((a, b) => {
      if (ordenacaoAscendente) {
        return new Date(a.dataDenuncia) - new Date(b.dataDenuncia);
      } else {
        return new Date(b.dataDenuncia) - new Date(a.dataDenuncia);
      }
    });

    setFilteredDenuncias(filtered);
  };

  const toggleOrdenacao = () => {
    setOrdenacaoAscendente(!ordenacaoAscendente);
  };

  return (
    <div className={Style.container}>
      <SidebarDash />
      <Stack className={Style.card} spacing={3}>
        <Stack className={Style.title} direction={"row"} spacing={25}>
          <h1>Análise de Denúncias</h1>
        </Stack>
        <Stack className={Style.filtros} direction={"row"} spacing={7}>
          <InputPesquisa value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          <Stack spacing={2}>
            <p>Filtrar por:</p>
            <Stack direction={'row'} spacing={5}>
              <TextField
                select
                label="Status"
                value={selectedStatus}
                onChange={e => setSelectedStatus(e.target.value)}
                variant="outlined"
                size="small"
                style={{ minWidth: 120 }}
              >
                <MenuItem value=""><em>Todos</em></MenuItem>
                <MenuItem value="Aberto">Aberto</MenuItem>
                <MenuItem value="Fechado">Fechado</MenuItem>
              </TextField>
              <TextField
                type="date"
                label="Data"
                InputLabelProps={{ shrink: true }}
                value={selectedDate}
                onChange={e => setSelectedDate(e.target.value)}
                variant="outlined"
                size="small"
              />
            </Stack>
          </Stack>
          <Button variant="contained" color="primary" onClick={toggleOrdenacao}>
            {ordenacaoAscendente ? 'Mais antigos primeiro' : 'Mais recentes primeiro'}
          </Button>
          <span className={Style.foto}></span>
        </Stack>

        <Stack spacing={17} className={Style.tags} direction={"row"}>
          <p>Foto</p>
          <p>Nome</p>
          <p>TAGs</p>
          <p>Data</p>
          <p>Status</p>
        </Stack>

        {filteredDenuncias.map((denuncia) => (
          <Stack key={denuncia.id}>
            <Documento 
              idDenunciado = {denuncia.usuarioDenunciado.idUsuario}
              idDenuncia={denuncia.id}
              nome={denuncia.usuarioDenunciado.nome} 
              tag={denuncia.info[0]} 
              data={new Date(denuncia.dataDenuncia).toLocaleDateString()} 
              status={denuncia.status} 
            />
          </Stack>
        ))}
      </Stack>
    </div>
  );
}

export default ListaDenun;
