import React, { useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import Styles from '../cards-Interno/cardInterno.module.css';
import Imagem from '../../../../utils/assets/Rectangle 53.png';
import Flag from '../../../../utils/assets/Empty Flag.png';
import ModalDenuncia from '../../../cuidador/denuncia/denuncia'; // Ajuste o caminho conforme necessário
import apiCuidador from '../../../../api/Usuario/apiCuidador';
import apiResponsavel from '../../../../api/Usuario/apiResponsavel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function CardIdoso({ nome, descricao, idade, favoritado, handleToggleFavorite, tipoUsuario, idUsuario, usuarioDenunciador, usuarioDenunciado }) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  async function dadosDoUsuario(idUsuario, tipo) {
    let data;
    if (tipo === "CUIDADOR") {
      const response = await apiCuidador.get(`/${idUsuario}`);
      data = response.data;
    } else {
      const response = await apiResponsavel.get(`/${idUsuario}`);
      data = response.data;
    }
    localStorage.setItem("cadastro", JSON.stringify(data));
    navigate("/usuarios/perfil");
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleFavoriteToggle = () => {
    handleToggleFavorite(idUsuario); // Chama a função para favoritar/desfavoritar o usuário com o idUsuario
  };

  return (
    <>
      <div className={Styles.cliente}>
        <section className={Styles.card}>
          <div className={Styles['centro-top']}>
            <img src={Imagem} alt="" />
            <div className={Styles.Icons}>
              <img src={Flag} alt="" onClick={handleOpenModal} style={{ cursor: 'pointer' }} />
              {"RESPONSAVEL" === localStorage.getItem("tipoUsuario") && (
                <Checkbox
                  defaultChecked={favoritado}
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  onClick={handleFavoriteToggle}
                />
              )}
            </div>
          </div>
          <div className={Styles.info}>
            {nome}
            <br />
          </div>
          <div className={Styles.contexto}>
            <div className={Styles.centralizar}>
              <p>{descricao}</p>
              <div className={Styles.botao}>
                <Button variant="contained" onClick={() => dadosDoUsuario(idUsuario, tipoUsuario)}>
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ModalDenuncia open={openModal} handleClose={handleCloseModal}
          usuarioDenunciador={usuarioDenunciador}
          usuarioDenunciado={usuarioDenunciado}
        />
    </>
  );
}

export default CardIdoso;
