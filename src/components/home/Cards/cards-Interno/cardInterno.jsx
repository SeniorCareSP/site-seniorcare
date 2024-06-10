import React, { useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import Styles from '../cards-Interno/cardInterno.module.css';
import Imagem from '../../../../utils/assets/Rectangle 53.png';
import Like from '../../../../utils/assets/Heart.png';
import Flag from '../../../../utils/assets/Empty Flag.png';
import ModalDenuncia from '../../../cuidador/denuncia/denuncia'; // Ajuste o caminho conforme necessário

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function CardIdoso({ nome, descricao, idade }) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={Styles.cliente}>
        <section className={Styles.card}>
          <div className={Styles['centro-top']}>
            <img src={Imagem} alt="" />
            <div className={Styles.Icons}>
              <img src={Flag} alt="" onClick={handleOpenModal} style={{ cursor: 'pointer' }} />
              <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
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
                <Button variant="contained" onClick={() => navigate('/procurar')}>
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ModalDenuncia open={openModal} handleClose={handleCloseModal} />
    </>
  );
}

export default CardIdoso;
